(function (console, $) {

    $('#tjs-js-good-button').on('click', function () {
        // do some important work here
        console.log('things are going well');
        $('#tjs-js-good-output').html('success!');
    });
    
    $('#tjs-js-bad-button').on('click', function () {
        // do some important work here
        console.error('things are going terrible!');
        $('#tjs-js-bad-output').html('error!');
    });

    // PRETEND WE ARE A CRAPPY BROWSER
    
    console = {};

















    // GUARANTEE CONSOLE LOG EXISTS
    
    //var consoleObj = console || {};
    //var consoleFn = consoleObj.log || function () { };
    
    //console.log = function() {
    //    var args = Array.prototype.slice.call(arguments);
    //    return consoleFn.apply(this, args);
    //};
    













    // GUARANTEE EXTENDED CONSOLE API EXISTS
    
    //var consoleObj = console || {};
    //var fallbackFn = consoleObj.log || function () { };
    //var consoleFns = ['log', 'debug', 'info', 'warn', 'error', 'track'];
    
    //for (var i = 0; i < consoleFns.length; i++) {
    //    (function (consoleFn) {
    //        var originalFn = console[consoleFn] || fallbackFn;
    //        console[consoleFn] = function () {
    //            var args = Array.prototype.slice.call(arguments);
    //            return originalFn.apply(this, args);
    //        };
    //    })(consoleFns[i]);
    //}
    












    // CUSTOMIZE THE CONSOLE BEHAVIOR

    //var config = {
    //    consoleDisplay: false,
    //    domDisplay: true
    //};

    //var consoleObj = console || {};
    //var fallbackFn = consoleObj.log || function () { };
    //var consoleFns = ['log', 'debug', 'info', 'warn', 'error', 'track'];

    //var printDom = function(severity, message) {
    //    $('#tjs-js-consoleList').prepend('<li><h4>' + severity + '</h4><div>' + message + '</div></li>');
    //};

    //for (var i = 0; i < consoleFns.length; i++) {
    //    (function (consoleFn) {
    //        var originalFn = console[consoleFn] || fallbackFn;
    //        console[consoleFn] = function () {
    //            var args = Array.prototype.slice.call(arguments);
    //            if (config.domDisplay) printDom(consoleFn, args);
    //            if (config.consoleDisplay) return originalFn.apply(this, args);
    //        };
    //    })(consoleFns[i]);
    //}

    
})(window.console, window.jQuery);
