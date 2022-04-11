# Data Actions

`data-cc` is a custom attribute which allows you to bind any button — or link  — to a few, specific <br> [API methods](/advanced/api-reference.html) in order to execute core functions, without the need to use javascript code.

Valid values:
- `show--preferences`
- `accept-all`
- `accept-necessary`
- `accept-custom`

Example usage:
```html
<button type="button" data-cc="show--preferences">View preferences modal</button>
```
<br>

## `show--preferences`
Use this value to show the `preferencesModal` in order to allow the user to change his preferences at any time.

## `accept-all`
Use this value to accept all cookie categories.

## `accept-necessary`
Use this value to accept only the necessary cookie categories.

## `accept-custom`
Use this value to accept the current selection inside the preferences modal.