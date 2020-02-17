(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['list'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"card-label\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"list\" data-lid="
    + alias4(((helper = (helper = lookupProperty(helpers,"lid") || (depth0 != null ? lookupProperty(depth0,"lid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lid","hash":{},"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":34}}}) : helper)))
    + ">\n    <div class=\"list-header\">\n        <span class=\"delete\">&times;</span>\n        <h3 class=\"list-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"list_title") || (depth0 != null ? lookupProperty(depth0,"list_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"list_title","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":45}}}) : helper)))
    + "</h3>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"list_label") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":7,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"list-body\"></div>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"addCard"),depth0,{"name":"addCard","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});
})();