module.exports = function(Handlebars) {

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["c-filter-tags"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.filterTagsContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.filterTagsClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n     data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.filterTagsJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "---\ntype: component\ncontextData: \"filter-tags-bp\"\nlayout: \"lyt-docs\"\npublish: false\n---\n\n\n<div class=\"c-filter-tags"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.filterTagsContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.filterTagsClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-filter-tags\"\n     data-js-module=\"filter-tags\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.filterTagsJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n     filter-tags\n     \n</div>\n";
},"useData":true});

this["App"]["Templates"]["c-list-view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.listViewContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.listViewClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n     data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.listViewJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "---\ntype: component\ncontextData: \"list-view-bp\"\nlayout: \"lyt-docs\"\npublish: false\n---\n\n\n<div class=\"c-list-view"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.listViewContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.listViewClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-list-view\"\n     data-js-module=\"list-view\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.listViewJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n     list-view\n     \n</div>\n";
},"useData":true});

this["App"]["Templates"]["c-list-view-tpl"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"col-xs-6 col-md-6\">\n			<a href=\"#\" class=\"thumbnail\" data--js-item=\"list-view-cta\">\n				<img src=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.preview_gif : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" alt=\"Image\">\n			</a>\n		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-view__list row\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

return this["App"]["Templates"];

};