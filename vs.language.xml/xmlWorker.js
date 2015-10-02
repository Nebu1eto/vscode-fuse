/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", 'vs/languages/lib/common/beautify-html'], function (require, exports, beautifyHTML) {
    function beautify(value, options) {
        return beautifyHTML.html_beautify(value, options);
    }
    exports.beautify = beautify;
});
//# sourceMappingURL=xmlWorker.js.map