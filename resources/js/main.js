// Global dependencies
import {App, Veams} from './app';

console.log('JS initialized in version:', App.version);
console.log('Veams initialized in version:', Veams.base.version);

// Imports


import FilterTags from '../templating/partials/components/filter-tags/js/filter-tags';


import ListView from '../templating/partials/components/list-view/js/list-view';

// @INSERTPOINT :: @ref: js-self-contained-import, @keep: true //

// Initialize modules with Veams
Veams.modules.register([

	,
	// Init FilterTags
	{
		namespace: 'filter-tags',
		module: FilterTags
	}


	,
	// Init ListView
	{
		namespace: 'list-view',
		module: ListView
	}

    // @INSERTPOINT :: @ref: js-init-v5, @keep: true //
]);

// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //
