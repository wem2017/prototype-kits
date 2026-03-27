# Design Spec to Code Mapping

How to translate a design spec JSON into platform code. Read `design-spec-structure.md` first to understand the JSON schema.

---

## React Native

### File & Imports

- `meta.screenName` → file name and default export
- Import design system components from `@momo-kits/foundation`
- Import `Chip` from `@momo-kits/chip` (separate package)
- Import `View`, `Pressable`, `StyleSheet` from `react-native`
- Import tokens: `Colors`, `Spacing`, `Radius` from `@momo-kits/foundation`

```tsx
import { Colors, Icon, Screen, ScreenRef, Spacing, Text } from '@momo-kits/foundation';
import { Chip } from '@momo-kits/chip';
import { Pressable, StyleSheet, View } from 'react-native';
```

### `meta` → Component Declaration

```tsx
// meta.screenName → component name
const MoneyTransferScreen: React.FC<NavigationScreenProps> = ({ navigation }) => {
  const screenRef = useRef<ScreenRef>(null);
  // ...
};
export default MoneyTransferScreen;
```

### `components` → Sub-Components

Each blueprint becomes a typed React functional component.

| Spec field | Code target |
|------------|-------------|
| `type` | Component name: `const SecurityBanner: React.FC<Props>` |
| `props` | TypeScript interface |
| `styles` | `StyleSheet.create` entry |
| `children` | JSX children |

**Prop type mapping:**

| Spec type | TypeScript type |
|-----------|----------------|
| `"string"` | `string` |
| `"number"` | `number` |
| `"boolean"` | `boolean` |
| `"function"` | `() => void` |
| `"array"` | `string[]` or typed array |

**Child element mapping:**

| Spec `type` | JSX |
|-------------|-----|
| `"Icon"` | `<Icon source="..." size={24} />` |
| `"Text"` | `<Text typography="...">{children}</Text>` |
| `"View"` | `<View style={...}>{children}</View>` |
| `"Pressable"` | `<Pressable onPress={...}>{children}</Pressable>` |
| Any design system component | `<Component {...props} />` |

**Example:**

```tsx
interface SecurityBannerProps {
  description: string;
  aiLabel: string;
  onPressMore: () => void;
}

const SecurityBanner: React.FC<SecurityBannerProps> = ({
  description, aiLabel, onPressMore,
}) => (
  <View style={styles.securityBanner}>
    <Icon source="24_check_circle" size={24} color={Colors.green_03} />
    <Text typography="body_default_regular" color={Colors.black_17} style={styles.flex1}>
      {description}
    </Text>
    <Tag label={aiLabel} icon="16_sparkle" customColor={Colors.pink_03} size="medium" />
  </View>
);
```

### `header` → Two Code Targets

Header props split across **two targets**. Putting a prop in the wrong target produces broken headers.

**Target 1: `<Screen>` JSX props** — visual appearance

| Spec `header.props` | Screen prop | Example |
|----------------------|------------|---------|
| `headerType` | `headerType` | `headerType="extended"` |
| `headerBackground` | `headerBackground` | `headerBackground="https://bg.png"` |
| `useShadowHeader` | `useShadowHeader` | `useShadowHeader={true}` |

**Target 2: `screenRef.current?.setOptions()` in `useEffect`** — content/behavior

| Spec `header.props` | setOptions prop | Transform |
|----------------------|----------------|-----------|
| `useBack` | `hiddenBack` | **Invert**: `useBack: true` → `hiddenBack: false` |
| `headerTitle` | `headerTitle` | Pass object as-is: `{ type, data }` |
| `headerRight` | `headerRight` | Pass object as-is |

```tsx
const screenRef = useRef<ScreenRef>(null);

useEffect(() => {
  screenRef.current?.setOptions({
    hiddenBack: false,
    headerTitle: {
      type: 'user',
      data: { title: name, subTitle: phone, image: avatar },
    },
    headerRight: {
      useShortcut: false,
      tools: [{ title: { vi: 'Tiện ích', en: 'Tools' }, items: [...] }],
    },
  });
}, []);
```

### `body` → Screen Component

| Spec field | Screen prop |
|------------|-------------|
| `scrollable: true` | `scrollable` |
| `style.backgroundColor` | `backgroundColor={Colors.xxx}` |
| `children` | JSX children inside `<Screen>` |

```tsx
<Screen
  ref={screenRef}
  navigation={navigation}
  headerType="extended"
  scrollable
  backgroundColor={Colors.black_02}
  footerComponent={renderFooter}
>
  <SecurityBanner description={text} />
  <TransferCard amount={amount} />
</Screen>
```

### `footer` → `footerComponent` Prop

`Screen` footer already provides built-in spacing and shadow. **Skip `footer.style` properties like `padding`, `margin`, and `backgroundColor`** — they are redundant and will cause double-spacing.

```tsx
<Screen
  footerComponent={
    <Button title={buttonTitle} type="disabled" size="large" full onPress={handleTransfer} />
  }
>
```

- `footer.style` → **Skip** padding/margin/backgroundColor (Screen footer handles these)
- `footer.children` → render design system or custom components directly as `footerComponent` value
- If footer has a single child → pass it directly (no wrapping `View`)
- If footer has multiple children → wrap in a `View` but **without** padding/margin styles

### `tabs` → `{ScreenName}Tab` Wrapper File

When `tabs` is an object (not `null`), generate a separate `{ScreenName}Tab.tsx` file that wraps the screen in a `BottomTab`.

- `tabs.indexActive` determines which item in `tabs.items` renders the screen from this spec
- Other items reference external screen components by `screen` name
- `initialRouteName` defaults to `items[indexActive].name`
- When `tabs.floatingButton` is not empty (`{}`), map it to the `floatingButton` prop

```tsx
import {
  BottomTab, BottomTabItemProps, FloatingButtonProps, NavigationScreenProps,
} from '@momo-kits/foundation';
import MoneyTransferScreen from './MoneyTransferScreen';
import ScanScreen from './ScanScreen';
import ProfileScreen from './ProfileScreen';

const tabs: BottomTabItemProps[] = [
  {
    name: 'MoneyTransfer',
    label: 'Chuyển tiền',     // from items[].label
    icon: 'ic_transfer',
    screen: MoneyTransferScreen,  // indexActive: 0 → this spec's screen
    options: { title: 'Chuyển tiền' },
  },
  {
    name: 'Profile',
    label: 'Tôi',
    icon: 'ic_profile',
    screen: ProfileScreen,        // non-active → external component
    options: { title: 'Tôi' },
  },
];

// tabs.floatingButton → floatingButton prop
const floatingButton: FloatingButtonProps = {
  icon: 'ic_scan',          // from tabs.floatingButton.icon
  label: 'Quét mọi QR',    // from tabs.floatingButton.label
  onPress: () => {},        // handler to navigate to ScanScreen
};

const MoneyTransferTab: React.FC<NavigationScreenProps> = ({ navigation }) => (
  <BottomTab
    tabs={tabs}
    navigation={navigation}
    initialRouteName="MoneyTransfer"
    nested={false}
    floatingButton={floatingButton}
  />
);
export default MoneyTransferTab;
```

If a referenced `screen` component does not exist, generate a placeholder screen file for it.

### `actions` → `useCallback` Handlers

Each action key becomes a `useCallback` function. Use `code` as the function body.

**Navigation actions** use `navigator` (from `ApplicationContext`), **not** `navigation`:
- `navigator.push({ screen: Component })` — push screen (horizontal slide)
- `navigator.present({ screen: Component })` — present modal (vertical slide)
- `navigator.pop()` — go back
- See `navigation/navigator.md` for full API

```tsx
const { navigator } = useContext(ApplicationContext);

const handleChangeAmount = useCallback((value: string) => {
  setTransferAmount(value);
}, []);

const handlePressGreetingCard = useCallback(() => {
  navigator.push({ screen: GreetingCardPickerScreen });
}, [navigator]);
```

### `localization` → Default State Values

Use `vi` locale values as initial state and display strings.

```tsx
const [transferAmount, setTransferAmount] = useState('0');
const recipientName = 'Anh Dũng Hồng';
const quickMessageList = ['Mình chuyển tiền nhé 🤑', 'Em cảm ơn ạ! 🤟'];
```

### `tracking` → Comments

Generate as inline comments near the relevant handler.

```tsx
const handleTransfer = useCallback(() => {
  // tracking: TransferButtonPressed { amount, message, recipientPhone }
  initiateTransfer({ amount, message, recipient });
}, []);
```

### Token Resolution

| Spec token | Code |
|------------|------|
| `"Colors.pink_03"` | `Colors.pink_03` (in JSX: `{Colors.pink_03}`) |
| `"Spacing.L"` | `Spacing.L` (in style: `paddingHorizontal: Spacing.L`) |
| `"Radius.M"` | `Radius.M` (in style: `borderRadius: Radius.M`) |

All tokens import from `@momo-kits/foundation`.

### Variable Resolution

| Spec value | Code |
|------------|------|
| `"{amount}"` | `{amount}` (prop or state in JSX) |
| `"{onPress}"` | `{onPress}` (callback prop) |
| `"{items[0]}"` | `{items[0]}` (array access) |

### Styles

Use `StyleSheet.create` at the bottom of the file. Never inline style objects in JSX — extract to stylesheet.

```tsx
const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.green_08,
    paddingHorizontal: Spacing.L,
    gap: Spacing.S,
  },
});
```

---

## Compose Multiplatform

### File & Imports

- `meta.screenName` → file name and `@Composable` function name
- Import components from `vn.momo.kits.components`
- Import tokens from `vn.momo.kits.const` (Colors, Spacing, Radius, Typography)
- Import navigation from `vn.momo.kits.navigation`

```kotlin
import vn.momo.kits.components.*
import vn.momo.kits.const.Colors
import vn.momo.kits.const.Spacing
import vn.momo.kits.const.Radius
import vn.momo.kits.const.Typography
import vn.momo.kits.navigation.LocalNavigation
import vn.momo.kits.navigation.LocalNavigator
```

### `meta` → Composable Function

```kotlin
@Composable
fun MoneyTransferScreen() {
    val navigation = LocalNavigation.current
    val navigator = LocalNavigator.current
    // ...
}
```

### `components` → Composable Sub-Functions

Each blueprint becomes a `@Composable` function with a data class for props (if more than 2 params).

| Spec field | Code target |
|------------|-------------|
| `type` | Function name: `@Composable fun SecurityBanner(...)` |
| `props` | Function parameters or data class |
| `styles` | `Modifier` chain |
| `children` | Composable children in `Column`/`Row`/`Box` |

**Prop type mapping:**

| Spec type | Kotlin type |
|-----------|-------------|
| `"string"` | `String` |
| `"number"` | `Int` or `Float` |
| `"boolean"` | `Boolean` |
| `"function"` | `() -> Unit` |
| `"array"` | `List<String>` or typed list |

**Style mapping:**

| Spec style | Compose Modifier/Layout |
|------------|------------------------|
| `flexDirection: "row"` | `Row { }` |
| `flexDirection: "column"` (default) | `Column { }` |
| `flex: 1` | `Modifier.weight(1f)` |
| `padding: "Spacing.L"` | `Modifier.padding(Spacing.L)` |
| `paddingHorizontal: "Spacing.L"` | `Modifier.padding(horizontal = Spacing.L)` |
| `paddingVertical: "Spacing.S"` | `Modifier.padding(vertical = Spacing.S)` |
| `gap: "Spacing.S"` | `Arrangement.spacedBy(Spacing.S)` |
| `backgroundColor: "Colors.green_08"` | `Modifier.background(Colors.green_08)` |
| `borderRadius: "Radius.M"` | `Modifier.clip(RoundedCornerShape(Radius.M))` |
| `alignItems: "center"` | `verticalAlignment = Alignment.CenterVertically` (Row) |
| `justifyContent: "center"` | `horizontalArrangement = Arrangement.Center` (Row) |
| `alignSelf: "center"` | `Modifier.align(Alignment.CenterHorizontally)` |

**Child element mapping:**

| Spec `type` | Compose |
|-------------|---------|
| `"Icon"` | `Icon(source = "...", size = 24.dp)` |
| `"Text"` | `Text(text = "...", style = Typography.bodyDefaultRegular)` |
| `"View"` | `Column { }` / `Row { }` / `Box { }` (based on flexDirection in styles) |
| `"Pressable"` | `Modifier.activeOpacityClickable { onClick() }` on a Box/Row |

**Example:**

```kotlin
@Composable
fun SecurityBanner(
    description: String,
    aiLabel: String,
    onPressMore: () -> Unit,
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(Colors.green_08)
            .padding(horizontal = Spacing.L, vertical = Spacing.S),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(Spacing.S),
    ) {
        Icon(source = "24_check_circle", size = 24.dp, color = Colors.green_03)
        Text(
            text = description,
            style = Typography.bodyDefaultRegular,
            color = Colors.black_17,
            modifier = Modifier.weight(1f),
        )
        Tag(label = aiLabel, customColor = Colors.pink_03, size = TagSize.Medium)
    }
}
```

### `header` → `LaunchedEffect` + `navigation.setOptions`

In Compose, header configuration goes into `navigation.setOptions()` inside `LaunchedEffect(Unit)`.

| Spec `header.props` | setOptions param | Transform |
|----------------------|-----------------|-----------|
| `useBack` | `hiddenBack` | **Invert**: `useBack: true` → `hiddenBack = false` |
| `headerType` | `headerType` | `HeaderType.Default()` / `HeaderType.Extended()` / `HeaderType.None` |
| `headerTitle` (string) | `headerTitle` | `HeaderTitle.Default("Title")` |
| `headerTitle` (user) | `headerTitle` | Custom composable in header |
| `headerRight` | `headerRight` | `HeaderRight.Toolkit(...)` |

```kotlin
val navigation = LocalNavigation.current

LaunchedEffect(Unit) {
    navigation.setOptions(
        headerTitle = HeaderTitle.Default("Transfer"),
        headerType = HeaderType.Extended(),
        hiddenBack = false,
        headerRight = HeaderRight.Toolkit(),
    )
}
```

### `body` → Screen Content

| Spec field | Compose |
|------------|---------|
| `scrollable: true` | `ScrollData(scrollable = true)` in `setOptions` |
| `style.backgroundColor` | `backgroundColor` in `setOptions` or `Modifier.background()` |
| `children` | Composable calls in `Column`/`LazyColumn` |

```kotlin
Column(
    modifier = Modifier
        .fillMaxSize()
        .background(Colors.black_02),
) {
    SecurityBanner(description = securityText, ...)
    TransferCard(amount = transferAmount, ...)
}
```

For scrollable content with header collapse:

```kotlin
val listState = rememberLazyListState()

LaunchedEffect(Unit) {
    navigation.setOptions(
        scrollData = ScrollData(scrollState = listState),
    )
}

LazyColumn(state = listState) {
    item { SecurityBanner(...) }
    item { TransferCard(...) }
}
```

### `footer` → `footerComponent` in `setOptions`

Navigation footer already provides built-in spacing and shadow. **Skip `footer.style` properties like `padding`, `margin`, and `backgroundColor`** — they are redundant.

```kotlin
LaunchedEffect(Unit) {
    navigation.setOptions(
        footerComponent = {
            Button(
                title = buttonTitle,
                type = ButtonType.DISABLED,
                size = Size.LARGE,
                isFull = true,
                onClick = { handleTransfer() },
            )
        },
    )
}
```

- `footer.style` → **Skip** padding/margin/backgroundColor (footer handles these)
- Single child → pass directly; multiple children → wrap in `Column`/`Row` without spacing styles

### `tabs` → `{ScreenName}Tab` Composable

When `tabs` is an object (not `null`), generate a separate `{ScreenName}Tab.kt` file with a `BottomTab` composable.

- `tabs.indexActive` determines which item renders the screen from this spec
- When `tabs.floatingButton` is not empty (`{}`), map it to the `floatingButton` parameter

```kotlin
import vn.momo.kits.navigation.bottomtab.BottomTab
import vn.momo.kits.navigation.bottomtab.BottomTabItem
import vn.momo.kits.navigation.bottomtab.BottomTabFloatingButton

@Composable
fun MoneyTransferTab() {
    BottomTab(
        items = listOf(
            BottomTabItem(
                name = "MoneyTransfer",
                label = "Chuyển tiền",
                icon = "ic_transfer",
                screen = { MoneyTransferScreen() },
            ),
            BottomTabItem(
                name = "Profile",
                label = "Tôi",
                icon = "ic_profile",
                screen = { ProfileScreen() },
            ),
        ),
        // tabs.floatingButton → floatingButton prop
        floatingButton = BottomTabFloatingButton(
            icon = "ic_scan",
            label = "Quét mọi QR",
            onPress = { /* navigate to ScanScreen */ },
        ),
    )
}
```

### `actions` → Lambda / Remember Handlers

```kotlin
val handleChangeAmount: (String) -> Unit = { value ->
    transferAmount = value
}

val handlePressGreetingCard = {
    navigator.push { GreetingCardPickerScreen() }
}
```

### `localization` → Default State

Use `vi` locale values as initial state with `remember` + `mutableStateOf`.

```kotlin
var transferAmount by remember { mutableStateOf("0") }
val recipientName = "Anh Dũng Hồng"
val quickMessageList = listOf("Mình chuyển tiền nhé 🤑", "Em cảm ơn ạ! 🤟")
```

### `tracking` → Comments

```kotlin
val handleTransfer = {
    // tracking: TransferButtonPressed { amount, message, recipientPhone }
    initiateTransfer(amount, message, recipient)
}
```

### Token Resolution

| Spec token | Compose code |
|------------|-------------|
| `"Colors.pink_03"` | `Colors.pink_03` |
| `"Spacing.L"` | `Spacing.L` (already Dp — do NOT call `.dp`) |
| `"Radius.M"` | `Radius.M` |

Import from `vn.momo.kits.const`.

### Variable Resolution

| Spec value | Compose code |
|------------|-------------|
| `"{amount}"` | `amount` (parameter or state) |
| `"{onPress}"` | `onPress()` (lambda invocation) |
| `"{items[0]}"` | `items[0]` (list access) |

### Typography Mapping

Spec typography tokens map to Compose `Typography` object properties using camelCase:

| Spec token | Compose |
|------------|---------|
| `"body_default_regular"` | `Typography.bodyDefaultRegular` |
| `"header_s_semibold"` | `Typography.headerSSemibold` |
| `"description_default_regular"` | `Typography.descriptionDefaultRegular` |

---

## Quick Reference: RN vs Compose Side-by-Side

| Concept | React Native | Compose |
|---------|-------------|---------|
| Screen wrapper | `<Screen ref={screenRef}>` | `Column` / `LazyColumn` + `setOptions` |
| Header config | `screenRef.current?.setOptions()` in `useEffect` | `navigation.setOptions()` in `LaunchedEffect` |
| Footer | `<Screen footerComponent={fn}>` | `footerComponent` in `setOptions` |
| Styles | `StyleSheet.create({})` | `Modifier` chain |
| State | `useState` | `mutableStateOf` + `remember` |
| Handlers | `useCallback` | Lambda or local function |
| Row layout | `<View style={{ flexDirection: 'row' }}>` | `Row { }` |
| Flex grow | `style={{ flex: 1 }}` | `Modifier.weight(1f)` |
| Gap | `style={{ gap: Spacing.S }}` | `Arrangement.spacedBy(Spacing.S)` |
| Token import | `@momo-kits/foundation` | `vn.momo.kits.const` |
| Component import | `@momo-kits/foundation` or `@momo-kits/<lib>` | `vn.momo.kits.components` |
| Navigation | `navigation` prop | `LocalNavigation.current` |
| Navigator | `ApplicationContext.navigator` | `LocalNavigator.current` |
