(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['labels'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"labels-container\">\n    <div id=\"labels-header\">\n        <h1 id=\"labels-title\">Labels</h1>\n        <p>(Click a label to filter, click again to restore cards)</p>\n    </div>\n    <div id=\"labels-body\">\n        <ul id=\"labels-list\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"addLabel"),depth0,{"name":"addLabel","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});
})();