(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['label'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li data-labelid="
    + alias4(((helper = (helper = lookupProperty(helpers,"labelid") || (depth0 != null ? lookupProperty(depth0,"labelid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"labelid","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":28}}}) : helper)))
    + " class=\"label-list-item\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"label_name") || (depth0 != null ? lookupProperty(depth0,"label_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label_name","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":67}}}) : helper)))
    + "</li>\n";
},"useData":true});
})();