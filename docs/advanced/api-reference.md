# API Reference


## run

Configures the plugin with the provided config. object.

- **Type**

    ```javascript
    function(config: object): void
    ```
- **Details**

    The `config` argument is required and must contain — at least — the `categories` and `language` properties (both properly configured). Check out how to set up [categories](/advanced/configuration-reference.html#categories) and [translations](/advanced/configuration-reference.html#languages-and-translations).

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

<br>


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

<br>

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

<br>

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

<br>

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

<br>

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

    The first argument accepts the following possible values:
    - `undefined` (not specified)
    - `'all'` accept all,
    - `'category_1'` accept only this category
    - `[]` reject all/accepts necessary only,
    - `['category_1', 'category_2']` accept specific categories (reject all the others)

- **Example**
    ```javascript
    cc.accept('all');                // accept all categories
    cc.accept([]);                   // reject all (accept only categories marked as readOnly/necessary)
    cc.accept('analytics');          // accept only the "analytics" category
    cc.accept(['cat_1', 'cat_2']);   // accept only these 2 categories
    cc.accept();                     // accept currently selected categories inside the preferences modal

    cc.accept('all', ['analytics']); // accept all categories except the "analytics" category
    cc.accept('all', ['cat_1', 'cat_2']); // accept all categories except these 2
    ```

<br>

## acceptedCategory

Returns `true` if the specified category was accepted, otherwise `false`.

- **Type**

    ```javascript
    function(categoryName: string): boolean
    ```

- **Example**
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