# API Reference


## run

Configures the plugin with the provided config. object.

- **Type**

    ```javascript
    function(config: object): void
    ```
- **Details**

    The `config` argument is required and must contain — at least — the `categories` and `language` properties (both properly configured). Check out how to set up [categories](/reference/configuration-reference.html#categories) and [translations](/reference/configuration-reference.html#languages-and-translations).

- **Example**
    ```javascript
    cc.run({
        categories: {
            // categories here
        },
        language: {
            default: 'en',

            translations: {
                en: {
                    // modal translations here
                }
            }
        }
    });
    ```


## show

Shows the consent modal.

- **Type**

    ```javascript
    function(delay?: number, createModal?: boolean): void
    ```
- **Details**

    Both arguments are optional. You can show the modal after a specific `delay` (measured in milliseconds). If consent was previously expressed, the consent modal will not be generated; you'll have to pass `true` to the second argument to generate it on the fly.

- **Example**
    ```javascript
    // show modal after 300ms
    cc.show(300);

    // show modal (if it doesn't exist, create it)
    cc.show(0, true);
    ```

## hide

Hides the consent modal.

- **Type**

    ```javascript
    function(): void
    ```

- **Example**
    ```javascript
    cc.hide();
    ```

## showPreferences

Shows the preferences modal.

- **Type**

    ```javascript
    function(delay?: number): void
    ```
- **Details**

    The delay argument is optional.

- **Example**
    ```javascript
    // show modal after 300ms
    cc.showPreferences(300);

    // show modal (without delay)
    cc.showPreferences();
    ```


## hidePreferences

Hides the preferences modal.

- **Type**

    ```javascript
    function(): void
    ```

- **Example**
    ```javascript
    cc.hidePreferences();
    ```


## accept

Accepts or rejects categories.

- **Type**

    ```javascript
    function(
        categoriesToAccept?: string | string[],
        exclusions?: string[]
    ): void
    ```
- **Details**

    The first argument accepts either a `string` or an `array` of strings. Special values:

    - `'all'` accept all
    - `[]`: empty array, accept none (reject all)
    - ` `: empty argument, accept only the categories selected in the preferences modal

- **Examples**
    ```javascript
    cc.accept('all');                // accept all categories
    cc.accept([]);                   // reject all (accept only categories marked as readOnly/necessary)
    cc.accept();                     // accept currently selected categories inside the preferences modal

    cc.accept('analytics');          // accept only the "analytics" category
    cc.accept(['cat_1', 'cat_2']);   // accept only these 2 categories

    cc.accept('all', ['analytics']); // accept all categories except the "analytics" category
    cc.accept('all', ['cat_1', 'cat_2']); // accept all categories except these 2
    ```


## acceptedCategory

Returns `true` if the specified category was accepted, otherwise `false`.

- **Type**

    ```javascript
    function(categoryName: string): boolean
    ```

- **Examples**
    ```javascript
    /**
     * if the user accepted the 'analytics' category
     * print "hooray!"
     */
    if(cc.acceptedCategory('analytics')){
        console.log("hooray!");
    }

    /**
     * if the user didn't accept the 'ads' category
     * print "oh no ..."
     */
    if(!cc.acceptedCategory('ads')){
        console.log("oh no ...");
    }
    ```

## validCookie

Returns `true` if the specified cookie is valid (exists and its content is not empty).

- **Type**

    ```javascript
    function(cookieName: string): boolean
    ```

- **Example** <br>

    Check if the `'gid'` cookie is set.

    ```javascript
    if(cc.validCookie('_gid')){
        // _gid cookie is valid!
    }else{
        // _gid cookie is not set ...
    }
    ```

## eraseCookies

Removes one or multiple cookies.

- **Type**

    ```javascript
    function(
        cookies: string[],
        path?: string,
        domains?: string[]
    ): boolean
    ```

- **Examples** <br>

    Delete the plugin's own cookie

    ```javascript
    cc.eraseCookies(['cc_cookie']);
    ```

    Delete the `_gid` and `_ga` cookies:
    ```javascript
    cc.eraseCookies(['_ga', '_gid'], '/', [location.hostname]);
    ```