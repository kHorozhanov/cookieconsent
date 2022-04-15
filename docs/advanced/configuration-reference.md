# Configuration Options
Overview of all availabe configuration options.

:::info Invalid Consent
Consent is not valid when at least one of following situations occurs:
- consent is missing (e.g. user has not yet made a choice)
- revision numbers don't match
- the plugin's cookie does not exist/has expired
- the plugin's cookie is structurally not valid (e.g. empty)
:::

## root

- type: `HTMLElement`
- default: `document.body`

Root (parent) element where the modal will be appended as a last child.


## mode

- type: `string`
- allowed values: `'opt-in'`, `'opt-out'`
- default: `'opt-in'`

Change the activation logic of the scripts when consent is not valid.


## autoShow

- type: `boolean`
- default: `true`

Automatically show the consent modal if consent is not valid. Based on your use case, you may turn this option off and use the `.show()` method instead to programmatically show the modal.


## revision

- type: `number`
- default: 0


## manageScriptTags

- type: `boolean`
- default: `true`


## autoClearCookies

- type: `boolean`
- default: `true`


## hideFromBots

- type: `boolean`
- default: `true`

<br>



## categories

- type: `object`
- default: `undefined`

::: info
There are no default categories. You have to create and configure them, based on your needs.
:::

Example on how to create the `analytics` category:
```javascript
cc.run({
    categories: {
        analytics: {
            // category config
        }
    }
})
```

<br>

### categories.enabled
- type: `boolean`

Mark the category as enabled by default.

<br>


### categories.readOnly
- type: `boolean`

Treat the category as read-only/necessary. The user won't be able to toggle the category off when this option is enabled. Enable only on categories which are essential for the proper functioning of your website.

e.g. configure the `necessary` category as read-only:
```javascript
cc.run({
    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        }
        analytics: {
            enabled: false,
            readOnly: false
        }
    }
})
```
<br>

### categories.autoClear
- type: `object`

Clear cookies when user rejects the cookie category. Available options for the autoClear object:

- `autoClear.cookies`: `[{cookie}]` array of cookie objects
- `autoClear.reloadPage`: `boolean` reload page on clear

Example category config:
```javascript
cc.run({
    categories: {
        analytics: {
            enabled: false,
            readOnly: false,
            autoClear: {
                // autoClear config
            }
        }
    }
})
```


## language

### language.default

### language.autoDetect

### language.translations