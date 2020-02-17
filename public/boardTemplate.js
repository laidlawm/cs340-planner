(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['board'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"board\" data-bid="
    + alias4(((helper = (helper = lookupProperty(helpers,"bid") || (depth0 != null ? lookupProperty(depth0,"bid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bid","hash":{},"data":data,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":35}}}) : helper)))
    + ">\n    <div class=\"board-header\">\n        <span class=\"delete\">&times;</span>\n        <h2 class=\"board-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"board_title") || (depth0 != null ? lookupProperty(depth0,"board_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"board_title","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":47}}}) : helper)))
    + "</h2>\n    </div>\n    <div class=\"board-content\"></div>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"addList"),depth0,{"name":"addList","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
})();