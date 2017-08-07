# aurelia-plugins-pagination

A pagination plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-pagination --save
```

Add `node_modules/babel-polyfill/dist/polyfill.min.js` to the prepend list in `aurelia.json`. Do not forgot to add `babel-polyfill` to the dependencies in `package.json`.

**JSPM**

```shell
jspm install aurelia-plugins-pagination
```

**Bower**

```shell
bower install aurelia-plugins-pagination
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-pagination', config => {
      config.options({
        of: 'of' // the translation of the word 'OF', you can also use aurelia-i18n here
      });
    });

    await aurelia.start();
    aurelia.setRoot('app');
}
```

## Usage

Once the pagination plugin is configured, to use it simply add the custom element `<aup-pagination></aup-pagination>` in your view.

```html
<aup-pagination current-page.bind="currentPage" page-size.bind="pageSize" page-sizes.bind="pageSizes" total-items.bind="totalItems"></aup-pagination>
```

There are 4 bindable attributes that need to be connected to your view model. It's your view model that does the retrieving of the items.
* `current-page`: this attribute is bound to the `currentPage` property of your view model
* `page-size`: this attribute is bound to the `pageSize` property of your view model
* `page-sizes`: this attribute is bound to the `pageSizes` property of your view model
* `total-items`: this attribute is bound to the `totalItems` property of your view model

Your view model extends from `PagedViewModel`. This class already has all the necessary methods and properties provided.

```javascript
import {PagedViewModel} from 'aurelia-plugins-pagination';

export class MyViewModel extends PagedViewModel {
  constructor() {
    super();
  }
  
  async activate() {
    this.totalItems = await this.userService.count();
  }
  
  async reload() {
    this.users = await this.userService.all({ limit: this.limit, skip: this.skip });
  }
}
```

By default the following properties are defined in the `PagedViewModel` - and thus available in your own view model:
* `currentPage` - default is `1`
* `pageSize` - default is `10`
* `pageSizes` - default is an array `[10, 25, 50, 100]`
* `totalItems` - has no default

There are 2 computed properties available, once all above properties have given a value:
* The property `limit` will give you the number of items that needs to be retrieved
* The property `skip` will give the number of items that needs to be skipped

In the `activate` method defined by the `aurelia-router` you at least specify the total amount of items that are in the list you're paging. As soon as the `totalItems` are set the `PagedViewModel` will fire a method called `reload()`. In this method you do the actual retrieving of the subset of your list based on the `limit` and `skip` properties. The `reload()` method is also fired when your `currentPage` or `pageSizes` changes.

The styling of the different elements in `<aup-pagination>` can be changed with these optional bindable properties:

* `button-class` - the CSS class for the `first`, `previous`, `next` and `last` buttons
* `input-class` - the CSS class for the `input` element that controls the `currentPage`
* `text-class` - the CSS class for the text that shows the total amount of pages
* `select-class` - the CSS class for the `select` element that controls the `pageSize`
* `option-class` - the CSS class for the `option` element of each `pageSize`