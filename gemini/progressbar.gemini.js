var gemini = require('gemini');

gemini.suite('progressbar', function(root) {

    root.setUrl('desktop.tests/progressbar/gemini/gemini.html');

    [
        'hackaton-s-text',
        'hackaton-m-no-text-no-progress',
        'islands'
    ]
        .forEach(function(test) {
            var progressbarSelector = '.' + test;

            gemini.suite(test, function(suite) {
                suite
                    .setCaptureElements(progressbarSelector)
                    .capture('plain');
            });
        });

});
