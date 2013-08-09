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


    // CREATE NETWORK TRANSMISSION HOOK 
    // TODD: DONT COMMENT OUT
    
    var config = {
        consoleDisplay: false,
        domDisplay: true,
        transmit: true
    };

    var consoleObj = console || {};
    var fallbackFn = consoleObj.log || function () { };
    var consoleFns = ['log', 'debug', 'info', 'warn', 'error', 'track'];

    console.transmit = function () {};
    var printDom = function (severity, message) {
        $('#tjs-js-consoleList').prepend('<li><h4>' + severity + '</h4><div>' + message + '</div></li>');
    };

    for (var i = 0; i < consoleFns.length; i++) {
        (function (consoleFn) {
            var originalFn = console[consoleFn] || fallbackFn;
            console[consoleFn] = function () {
                var args = Array.prototype.slice.call(arguments);
                if (config.transmit) console.transmit(consoleFn, args);
                if (config.domDisplay) printDom(consoleFn, args);
                if (config.consoleDisplay) return originalFn.apply(this, args);
            };
        })(consoleFns[i]);
    }











    // SIMPLE TRANSMIT IMPLEMENTATION
    // TODD: DONT COMMENT OUT

    //console.transmit = function (severity, message) {
    //    var payload = {
    //        timestamp: new Date().toISOString(),
    //        severity: severity,
    //        message: message
    //    };

    //    $.ajax({
    //        data: JSON.stringify(payload),
    //        url: '/log',
    //        type: 'POST',
    //        contentType: 'application/json'
    //    });
    //};
















    // WHAT HAPPENS WHEN THINGS GO TERRIBLY, TERRIBLY WRONG?
    // TODD: DONT COMMENT OUT

    //$('#tjs-js-bad-button').on('click', function () {
    //    for (var i = 0; i < 1000; i++) {
    //        console.error('its turtles all the way down');
    //    }
    //});






















    // SIMPLE THROTTLING
    // TODD: DONT COMMENT OUT

    //var transmissions = 0;
    //console.transmit = function (severity, message) {
    //    if (transmissions > 10) return;
    //    transmissions++;
        
    //    var payload = {
    //        timestamp: new Date().toISOString(),
    //        severity: severity,
    //        message: message
    //    };

    //    $.ajax({
    //        data: JSON.stringify(payload),
    //        url: '/log',
    //        type: 'POST',
    //        contentType: 'application/json'
    //    });
    //};
    















    // RECOVERABLE THROTTLING FOR SPAS
    // TODD: DONT COMMENT OUT
    
    //var transmissionCount = 0,
    //    lastTransmissionAttempt = new Date().getTime();
    //console.transmit = function (severity, message) {

    //    var now = new Date().getTime();
    //    if (lastTransmissionAttempt + 1000 >= now) { // if in cooldown period
    //        lastTransmissionAttempt = now;
    //        transmissionCount++;
    //        if (transmissionCount > 10) return;
    //    } else {
    //        transmissionCount = 0;
    //        lastTransmissionAttempt = now;
    //    }

    //    var payload = {
    //        timestamp: new Date().toISOString(),
    //        severity: severity,
    //        message: message
    //    };

    //    $.ajax({
    //        data: JSON.stringify(payload),
    //        url: '/log',
    //        type: 'POST',
    //        contentType: 'application/json'
    //    });
    //};


})(window.console, window.jQuery);
