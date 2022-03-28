# Getting Started

This section will help you install and import CookieConsent in your project/website.


## Installation
You can download/install the plugin using one of the following methods:
<br>

1. Use the CDN hosted version.
    ```
    https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.js
    https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.css
    ```
2. Download the [latest stable release](https://github.com/orestbida/cookieconsent/releases/latest) from github and use `cookieconsent.js` and `cookieconsent.css` files located in the `dist` folder.

3. Install via [NPM](https://www.npmjs.com/package/vanilla-cookieconsent).
    ```shell
    npm i vanilla-cookieconsent
    yarn add vanilla-cookieconsent
    ```

    Special thanks to [Till Sanders](https://github.com/tillsanders) for bringing the plugin on npm!

<br><br>

## Usage
You can use the plugin in any environment/framework: React, Vue, Svelte, PHP based websites/CMS ... anywhere.

### HTML
Import `cookieconsent.css` and `cookieconsent.js` files respectively in the head and body sections. Create a new file called `cookieconsent-init.js` and import it in the body section.
```html{4,8-9}
<html>
    <head>
        <!-- head content -->
        <link rel="stylesheet" href="path-to-cookieconsent.css">
    </head>
    <body>
        <!-- body content -->
        <script defer src="path-to-cookieconsent.js"></script>
        <script defer src="path-to-cookieconsent-init.js"></script>
    </body>
</html>
```

[Configure](./configuration.md) the plugin inside `cookieconsent-init.js`:
```javascript
const cc = CookieConsent.init();

cc.run({
    // your config. goes here
});
```
<br>

### React
```javascript
import { useEffect } from "react";

import "path-to-cookieconsent.css";
import CookieConsent from "path-to-cookieconsent.js";
```

[Configure](./configuration.md) the plugin inside the `useEffect` hook:

```javascript
export default function App() {

    useEffect(() => {
        const cc = CookieConsent.init();

        cc.run({
            // your config. goes here
        });
    }, []);

    // ... rest of the component
}
```

### Vue
[TODO]