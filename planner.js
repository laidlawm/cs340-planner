module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function populate(res, mysql, context, complete) {
        context.boards = [
            {
                board_id: 0,
                board_title: "Board-Zero",
                lists: [
                    {
                        list_id: 0,
                        list_title: "List-Zero"
                    }
                ]
            },
            {
                board_id: 1,
                board_title: "Board-One",
                lists: [
                    {
                        list_id: 1,
                        list_title: "List-One"
                    }
                ]
            }
        ]
        complete();
    }

    router.get('/populate', function(req, res) {
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["boardFuncs.js", "listFuncs.js"];
        var mysql = req.app.get('mysql');
        populate(res, mysql, context, complete);
        console.log(context);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1) {
                res.render('planner', context);
            }
        }
    });

    return router;
}();
