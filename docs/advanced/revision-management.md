# Revision management
You can enable the revision management if you need to refresh the consent due to a change your cookie/privacy policy.

- `revision` number (default = 0)

## How to enable
To enable revisions, you just need to specify a valid `revision` number in your configuration. Example:
```javascript
cc.run({
    revision: 1
});
```

::: warning NOTE
The new revision number must be different from the current revision number.
:::

Once enabled, users who had already consented to revision 0, will be prompted again for consent.

## Revision message
Optionally, you can also set a revision message to let your users know what has changed since last time they visited.

TODO