(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['cardModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"add-card-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <span id=\"close-card-modal\" class=\"fancy-button close\">&times;</span>\n            <h1 class=\"modal-title\">New Card</h1>\n        </div>\n        <div class=\"modal-body\">\n            <p class=\"modal-title-prompt\">Card Title:</p>\n            <input type=\"text\" id=\"new-card-title\"></input><br>\n            <p class=\"modal-label-prompt\">Card Labels:</p>\n            <div id=\"card-modal-labels\"></div>\n            <p class=\"modal-desc-prompt\">Card Description:</p>\n            <input type=\"text\" id=\"new-card-desc\"></input>\n        </div>\n        <button id=\"submit-card-btn\">Submit</button>\n    </div>\n</div>\n";
},"useData":true});
})();