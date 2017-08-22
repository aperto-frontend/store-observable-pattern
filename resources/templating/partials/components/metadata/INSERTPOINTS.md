
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: metadata, @tag: component-partial }}
{{#with metadata-bp}}
	{{> c-metadata}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "component/_c-metadata";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/metadata/scss/_c-metadata";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import Metadata from './modules/metadata/metadata';
// @INSERT :: END
// @INSERT :: START @tag: js-self-contained-import //
import Metadata from '../templating/partials/components/metadata/js/metadata';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 //
/**
 * Init Metadata
 */
Helpers.loadModule({
	el: '[data-js-module="metadata"]',
	module: Metadata,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3 //
/**
 * Init Metadata
 */
Helpers.loadModule({
	domName: 'metadata',
	module: Metadata,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
	,
	// Init Metadata
	{
		namespace: 'metadata',
		module: Metadata
	}
	// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Metadata
 */
EVENTS.metadata = {
	eventName: 'metadata:eventName'
};
// @INSERT :: END
```
