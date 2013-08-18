(function(console, $) {

    // NOTE: TRANSMISSION IS STILL ACTIVE
    
    // A SIMPLE JAVASCRIPT PROBLEM -- WHO CAN SEE IT?

    var room = {
      
        getWidth: function() {
            return parseInt($('tjs-js-width', 10).val());
        },
        
        getHeight: function() {
            return parseInt($('tjs-js-height', 10).val());
        },
        
        printArea: function () {
            var result = this.getHeight() * this.getWidth();
            $('#tjs-js-area-output').html(result);
        }
    };

    $('#tjs-js-button-calculate').on('click', room.printArea);
























    // SIMPLE ERROR CAPTURE

    //window.onerror = console.error;


























    // BETTER ERROR CAPTURE
    // TODD - Comment this one out

    //room = {

    //    getWidth: function () {
    //        try {
    //            return parseInt($('tjs-js-width', 10).val());
    //        } catch(error) {
    //            return console.error(error.name, error.message, error.stack);
    //        }
    //    },

    //    getHeight: function () {
    //        try {
    //            return parseInt($('tjs-js-height', 10).val());
    //        } catch(error) {
    //            return console.error(error.name, error.message, error.stack);
    //        }
    //    },

    //    printArea: function () {
    //        try {
    //            var result = this.getHeight() * this.getWidth();
    //            $('#tjs-js-area-output').html(result);
    //        } catch(error) {
    //            console.error(error.name, error.message, error.stack);
    //        }
    //    }
    //};

    //$('#tjs-js-button-calculate').off();
    //$('#tjs-js-button-calculate').on('click', room.printArea);
    
























    // TRY-CATCH ALL THE THINGS!

    //console.catchIt = function(obj) {
    //    for (var key in obj) {
    //        if (typeof obj[key] !== "function") continue;
    //        (function() {
    //            var func = obj[key];
    //            obj[key] = function() {
    //                try {
    //                    var args = Array.prototype.slice.call(arguments, 0);
    //                    return func.apply(this, args);
    //                } catch(error) {
    //                    return console.error(error.name, error.message, error.stack.split('@').join('<br/>@'));
    //                }
    //            };
    //        })();
    //    }
    //};

    //console.catchIt(room);
    //$('#tjs-js-button-calculate').off();
    //$('#tjs-js-button-calculate').on('click', room.printArea);


})(window.console, window.jQuery);
