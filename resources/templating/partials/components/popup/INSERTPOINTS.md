
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: popup, @tag: component-partial }}
{{#with popup-bp}}
	{{> c-popup}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-popup";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/popup/scss/_c-popup";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import Popup from './modules/popup/popup';
// @INSERT :: END
// @INSERT :: START @tag: js-self-contained-import //
import Popup from '../templating/partials/components/popup/js/popup';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 //
/**
 * Init Popup
 */
Helpers.loadModule({
	el: '[data-js-module="popup"]',
	module: Popup,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3 //
/**
 * Init Popup
 */
Helpers.loadModule({
	domName: 'popup',
	module: Popup,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
	,
	// Init Popup
	{
		namespace: 'popup',
		module: Popup
	}
	// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Popup
 */
EVENTS.popup = {
	eventName: 'popup:eventName'
};
// @INSERT :: END
```
