/*---------------------------------------------------------
 * Forked from C# Defined.
 * Configuration by Realignist
 *--------------------------------------------------------*/
/// <reference path="../declares.d.ts" />
'use strict';
define(["require", "exports", './unoDef', 'monaco'], function (require, exports, unoDef, monaco) {
    monaco.Modes.registerMonarchDefinition('uno', unoDef.language);
});