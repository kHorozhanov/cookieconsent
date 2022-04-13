# Callbacks and Events
There are a few callbacks/events at your disposal to handle different kinds of situations. Each callback has a corresponding custom event, named after the callback function itself.

Available callbacks/events:

- `onFirstConsent`
- `onConsent`
- `onChange`

## `onFirstConsent`
This event is triggered only the very first time that the user expresses their choice of consent (accept/reject).

Example (callback way):
```javascript
cc.run({
    onFirstConsent: function(){
        // do something ...
    }
});
```

Example (custom event):
```javascript
window.addEventListener('onFirstConsent', function(){
    // do something
});
```

## `onConsent`
This event is triggered the very first time the user expresses expresses their choice of consent — just like `onFirstConsent` — but also on every subsequent page load.

Example (callback way):
```javascript
cc.run({
    onConsent: function(){
        // do something ...
    }
});
```

Example (custom event):
```javascript
window.addEventListener('onConsent', function(){
    // do something
});
```

## `onChange`
This event is triggered when the user modifies their preferences and only if consent has already been provided.

Example (callback way):
```javascript
cc.run({
    onChange: function(){
        // do something ...
    }
});
```

Example (custom event):
```javascript
window.addEventListener('onChange', function(){
    // do something
});
```

<br>


::: warning
If you're using custom events, make sure to subscribe to the specific event prior to the plugin's execution, to avoid potential inconsistent behaviors.
:::