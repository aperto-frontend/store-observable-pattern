
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: edit-bar, @tag: component-partial }}
{{#with edit-bar-bp}}
	{{> c-edit-bar}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-edit-bar";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/edit-bar/scss/_c-edit-bar";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import EditBar from './modules/edit-bar/edit-bar';
// @INSERT :: END
// @INSERT :: START @tag: js-self-contained-import //
import EditBar from '../templating/partials/components/edit-bar/js/edit-bar';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 //
/**
 * Init EditBar
 */
Helpers.loadModule({
	el: '[data-js-module="edit-bar"]',
	module: EditBar,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3 //
/**
 * Init EditBar
 */
Helpers.loadModule({
	domName: 'edit-bar',
	module: EditBar,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
	,
	// Init EditBar
	{
		namespace: 'edit-bar',
		module: EditBar
	}
	// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for EditBar
 */
EVENTS.editBar = {
	eventName: 'editBar:eventName'
};
// @INSERT :: END
```
