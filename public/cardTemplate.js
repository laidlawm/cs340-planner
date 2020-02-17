(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['card'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"card-label\" data-labelid="
    + alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":57}}}) : helper)))
    + ">"
    + alias1(container.lambda(depth0, depth0))
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card\" data-cid="
    + alias4(((helper = (helper = lookupProperty(helpers,"cid") || (depth0 != null ? lookupProperty(depth0,"cid") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cid","hash":{},"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":34}}}) : helper)))
    + ">\n    <div class=\"card-header\">\n        <span class=\"delete\">&times;</span>\n        <h4 class=\"card-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"card_title") || (depth0 != null ? lookupProperty(depth0,"card_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_title","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":45}}}) : helper)))
    + "</h4>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"card_label") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":7,"column":17}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"card-body\">\n        <p class=\"card-content\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"card_content") || (depth0 != null ? lookupProperty(depth0,"card_content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card_content","hash":{},"data":data,"loc":{"start":{"line":10,"column":32},"end":{"line":10,"column":48}}}) : helper)))
    + "</p>\n    </div>\n</cid>\n";
},"useData":true});
})();