(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['listModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"add-list-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <span id=\"close-list-modal\" class=\"fancy-button close\">&times;</span>\n            <h1 class=\"modal-title\">New List</h1>\n        </div>\n        <div class=\"modal-body\">\n            <p class=\"modal-title-prompt\">Title</p>\n            <input type=\"text\" id=\"new-list-title\"></input>\n            <p class=\"modal-label-prompt\">Card Labels:</p>\n            <div id=\"list-modal-labels\"></div>\n        </div>\n        <button id=\"submit-list-btn\">Submit</button>\n    </div>\n</div>\n";
},"useData":true});
})();