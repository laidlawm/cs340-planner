(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['boardModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"add-board-modal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <span id=\"close-board-modal\" class=\"fancy-button close\">&times;</span>\n            <h1 class=\"modal-title\">New Board</h1>\n        </div>\n        <div class=\"modal-body\">\n            <p class=\"modal-title-prompt\">Title</p>\n            <input type=\"text\" id=\"new-board-title\"></input>\n        </div>\n        <button id=\"submit-board-btn\">Submit</button>\n    </div>\n</div>\n";
},"useData":true});
})();