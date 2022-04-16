# Button Actions

`data-cc` is a custom attribute which allows you to bind any button — or link  — to a few and select [API methods](/reference/api-reference.html) in order to run core functions, without the need to use javascript code.

Valid values:
- `show--preferences`
- `accept-all`
- `accept-necessary`
- `accept-custom`

Example:
```html
<button type="button" data-cc="show--preferences">View preferences modal</button>
```

## show--preferences
Use this value to show the `preferencesModal`.

## accept-all
Use this value to accept all cookie categories.

## accept-necessary
Use this value to accept only the necessary cookie categories.

## accept-custom
Use this value to accept the current selection inside the preferences modal.