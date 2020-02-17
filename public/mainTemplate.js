(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<body>\n    <header>\n        <h1 class=\"site-title\">Planner</h1>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"labels"),depth0,{"name":"labels","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </header>\n    <div class=\"planner\">\n        <div class=\"add-board\">\n            <span id=\"add-board-btn\" class=\"add-board-btn add\">(&plus;) BOARD</span>\n        </div>\n    </div>\n</body>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"boardModal"),depth0,{"name":"boardModal","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"listModal"),depth0,{"name":"listModal","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"cardModal"),depth0,{"name":"cardModal","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"labelModal"),depth0,{"name":"labelModal","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();