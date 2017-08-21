
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: filter-tags, @tag: component-partial }}
{{#with filter-tags-bp}}
	{{> c-filter-tags}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "component/_c-filter-tags";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/filter-tags/scss/_c-filter-tags";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import FilterTags from './modules/filter-tags/filter-tags';
// @INSERT :: END
// @INSERT :: START @tag: js-self-contained-import //
import FilterTags from '../templating/partials/components/filter-tags/js/filter-tags';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 //
/**
 * Init FilterTags
 */
Helpers.loadModule({
	el: '[data-js-module="filter-tags"]',
	module: FilterTags,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3 //
/**
 * Init FilterTags
 */
Helpers.loadModule({
	domName: 'filter-tags',
	module: FilterTags,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
	,
	// Init FilterTags
	{
		namespace: 'filter-tags',
		module: FilterTags
	}
	// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for FilterTags
 */
EVENTS.filterTags = {
	eventName: 'filterTags:eventName'
};
// @INSERT :: END
```
