/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", './xmlDef', 'monaco'], function (require, exports, languageDef, monaco) {
    function activate(_ctx) {
        monaco.Modes.registerMonarchDefinition('xml', languageDef.language);
        monaco.Modes.loadInBackgroundWorker(require.toUrl('./xmlWorker.js'));
        return null;
    }
    exports.activate = activate;
});
