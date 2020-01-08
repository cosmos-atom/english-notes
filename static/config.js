'use strict';
require.config({
    baseUrl:'static',
    paths: {
        'jquery': 'lib/jquery-3.4.1',
        'underscore': 'lib/underscore-1.9.1',
        'backbone': 'lib/backbone-1.4.0',
        'handlebars': 'lib/handlebars-v4.5.3',
        'text': 'lib/requirejs-plugin-text-2.0.16',
        'i18n': 'lib/requirejs-plugin-i18n-2.0.6',
        'domReady': 'lib/requirejs-plugin-domReady-2.0.1',
        '_str': 'lib/underscore.string-3.3.4',
        'jquery-ui': 'jquery-ui-1.12.1/jquery-ui',
        'mymodule': 'testmodule'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'handlebars': {
            deps: ['jquery'],
            exports: 'Handlebars'
        },
        'i18n': {
            deps: ['require']
        },
        '_str': {
            deps: ['underscore'],
            exports: '_s'
        }
    }
});
