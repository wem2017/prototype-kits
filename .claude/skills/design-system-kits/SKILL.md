---
name: design-system-kits
description: ALWAYS invoke this skill FIRST for any UI development task in this codebase without exception. This skill MUST be consulted before writing ANY UI code, component, screen, layout, or visual element. Use when building any interface with React
  Native, Compose Multiplatform.

---

## Prereqs
- Read [references/code-convention.md](references/code-convention.md) before generating code
- When generating from a design spec JSON, **always load both**:
  1. [references/design-spec-structure.md](references/design-spec-structure.md) — JSON schema (what each field means)
  2. [references/design-spec-to-code.md](references/design-spec-to-code.md) — spec-to-code mapping (how to translate to RN or Compose)

## How to Use

1. **Identify platform**: `.tsx`/`.ts` = React Native, `.kt` = Compose
2. **If input is a design spec JSON** → load `references/design-spec-structure.md` for full schema mapping
3. **Find component** in catalog tables below
4. **Load reference file** for exact API
5. **Generate code** with correct imports and design tokens

## References

### Design Tokens & Styles
| File | Load when... |
|------|-------------|
| `references/tokens/colors.md` | Color hex values |
| `references/tokens/theme.md` | Light/dark theme |
| `references/tokens/typography.md` | Typography scale |
| `references/tokens/spacing-radius.md` | Spacing/radius values |

### Components
| File | Component | RN | Compose |
|------|-----------|:--:|:------:|
| `references/components/button.md` | Button | ✅ | ✅ |
| `references/components/text.md` | Text | ✅ | ✅ |
| `references/components/input.md` | Input | ✅ | ✅ |
| `references/components/input-search.md` | InputSearch | ✅ | ✅ |
| `references/components/input-text-area.md` | InputTextArea | ✅ | ✅ |
| `references/components/input-dropdown.md` | InputDropDown | ✅ | ✅ |
| `references/components/input-phone-number.md` | InputPhoneNumber | ✅ | ✅ |
| `references/components/input-money.md` | InputMoney | ✅ | ✅ |
| `references/components/input-otp.md` | InputOTP | ✅ | ✅ |
| `references/components/checkbox.md` | CheckBox | ✅ | ✅ |
| `references/components/radio.md` | Radio | ✅ | ✅ |
| `references/components/switch.md` | Switch | ✅ | ✅ |
| `references/components/icon.md` | Icon | ✅ | ✅ |
| `references/components/image.md` | Image | ✅ | ✅ |
| `references/components/badge.md` | Badge, BadgeDot | ✅ | ✅ |
| `references/components/tag.md` | Tag | ✅ | ✅ |
| `references/components/chip.md` | Chip | ✅ | ✅ |
| `references/components/popup-notify.md` | PopupNotify | ✅ | ✅ |
| `references/components/popup-promotion.md` | PopupPromotion | ✅ | ✅ |
| `references/components/toast.md` | Toast | ✅ | ✅ |
| `references/components/snackbar.md` | SnackBar | ✅ | ✅ |
| `references/components/skeleton.md` | Skeleton | ✅ | ✅ |
| `references/components/loader.md` | Loader | ✅ | ✅ |
| `references/components/tooltip.md` | Tooltip | ✅ | ✅ |
| `references/components/avatar.md` | Avatar | ✅ | ✅ |
| `references/components/carousel.md` | Carousel | ✅ | ✅ |
| `references/components/tab-view.md` | TabView | ✅ | ✅ |
| `references/components/divider.md` | Divider | ✅ | ✅ |
| `references/components/pagination.md` | Pagination | ✅ | ✅ |
| `references/components/progress-info.md` | ProgressInfo | ✅ | ✅ |
| `references/components/rating.md` | Rating | ✅ | ✅ |
| `references/components/slider.md` | Slider | ✅ | ✅ |
| `references/components/stepper.md` | Stepper | ✅ | ✅ |
| `references/components/steps.md` | Steps | ✅ | ✅ |
| `references/components/collapse.md` | Collapse | ✅ | ✅ |
| `references/components/swipe.md` | Swipe | ✅ | ✅ |
| `references/components/suggest-action.md` | SuggestAction | ✅ | ✅ |
| `references/components/uploader.md` | Uploader | ✅ | ✅ |
| `references/components/date-picker.md` | DatePicker | ✅ | ✅ |
| `references/components/information.md` | Information | ✅ | ✅ |

### Design Spec
| File | Load when... |
|------|-------------|
| `references/design-spec-structure.md` | **Understanding the JSON schema** (what each field means) |
| `references/design-spec-to-code.md` | **Mapping spec → code** (how to translate to RN or Compose) |

### Screen Layout
| File | Load when... |
|------|-------------|
| `references/screen-layout-rule.md` | Screen layout rules, `useGridLayout`, Section/Card/Item spacing, grid system |

### Navigation
| File | Load when...                                   |
|------|------------------------------------------------|
| `references/navigation/setup.md` | App root setup, Container, NavigationContainer |
| `references/navigation/stack.md` | Screen config, header                          |
| `references/navigation/navigation-options.md` | Header title, background, right buttons, **header spec → code mapping** |
| `references/navigation/navigator.md` | Compose Navigator API                          |
| `references/navigation/bottom-tab.md` | Bottom tabs                                    |
| `references/navigation/modal.md` | Modal                                          |
| `references/navigation/bottomsheet.md` | Bottom sheet                                   |

## Important Rules

1. **Always use design tokens** — Never hardcode colors/spacing/fonts
2. **RN**: Use `Screen > Section|Card > Item` — Section and Card are **siblings** (same level), never nested
3. **Design spec JSON** — When generating code from a design spec, **always load both** `references/design-spec-structure.md` (schema) and `references/design-spec-to-code.md` (platform mapping). For the `header` field, also load `references/navigation/navigation-options.md`. **Priority: use existing components from the catalog tables above** — only create custom sub-components when no existing component can fulfill the requirement.
