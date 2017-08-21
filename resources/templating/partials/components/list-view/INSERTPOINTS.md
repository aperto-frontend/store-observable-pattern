
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: list-view, @tag: component-partial }}
{{#with list-view-bp}}
	{{> c-list-view}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "component/_c-list-view";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/list-view/scss/_c-list-view";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import ListView from './modules/list-view/list-view';
// @INSERT :: END
// @INSERT :: START @tag: js-self-contained-import //
import ListView from '../templating/partials/components/list-view/js/list-view';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 //
/**
 * Init ListView
 */
Helpers.loadModule({
	el: '[data-js-module="list-view"]',
	module: ListView,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3 //
/**
 * Init ListView
 */
Helpers.loadModule({
	domName: 'list-view',
	module: ListView,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
	,
	// Init ListView
	{
		namespace: 'list-view',
		module: ListView
	}
	// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for ListView
 */
EVENTS.listView = {
	eventName: 'listView:eventName'
};
// @INSERT :: END
```
