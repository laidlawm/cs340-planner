module.exports = function(){
    var express = require('express');
    var router = express.Router();

    router.get('/', function(req, res) {
        var callbackCount = 0;
        var context = 0;
        context.jsscripts = [];
        var mysql = req.app.get('mysql');
        getBoards
    });

    router.get('/populate', function(req, res) {
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["boardFuncs.js", "listFuncs.js"];
        var mysql = req.app.get('mysql');
        populate(res, mysql, context, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1) {
                res.render('planner', context);
            }
        }
    });

    return router;
}();
