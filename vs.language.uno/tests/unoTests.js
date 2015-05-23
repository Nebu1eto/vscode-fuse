/*---------------------------------------------------------
 * Forked from C# Defined.
 * Configuration by Realignist
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", '../unoDef', 'monaco-testing'], function (require, exports, unoDef, T) {
    var tokenizationSupport = T.createTokenizationSupport(unoDef.language);
    var tokenize = T.createTokenizeFromSupport(tokenizationSupport);
    var assertTokens = T.assertTokens;
    function assertTokens2(message, expected) {
        var actual = tokenize(message).tokens;
        assertTokens(actual, expected, message);
    }
    ;
    T.module('Syntax Highlighting - Uno');
    T.test('Generated from sample', function () {
        var previousState = tokenizationSupport.getInitialState();
        // Line 1
        var src = 'using Fuse;';
        var tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'keyword.using.uno', bracket: 0 },
            { startIndex: 5, type: '', bracket: 0 },
            { startIndex: 6, type: 'namespace.uno', bracket: 0 },
            { startIndex: 12, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 2
        src = 'using System.Collections.Generic;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'keyword.using.uno', bracket: 0 },
            { startIndex: 5, type: '', bracket: 0 },
            { startIndex: 6, type: 'namespace.uno', bracket: 0 },
            { startIndex: 12, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 13, type: 'namespace.uno', bracket: 0 },
            { startIndex: 24, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 25, type: 'namespace.uno', bracket: 0 },
            { startIndex: 32, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 3
        src = 'using Android;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'keyword.using.uno', bracket: 0 },
            { startIndex: 5, type: '', bracket: 0 },
            { startIndex: 6, type: 'namespace.uno', bracket: 0 },
            { startIndex: 12, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 13, type: 'namespace.uno', bracket: 0 },
            { startIndex: 24, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 4
        src = 'using System.Linq;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'keyword.using.uno', bracket: 0 },
            { startIndex: 5, type: '', bracket: 0 },
            { startIndex: 6, type: 'namespace.uno', bracket: 0 },
            { startIndex: 12, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 13, type: 'namespace.uno', bracket: 0 },
            { startIndex: 17, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 5
        src = 'using System.Text;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'keyword.using.uno', bracket: 0 },
            { startIndex: 5, type: '', bracket: 0 },
            { startIndex: 6, type: 'namespace.uno', bracket: 0 },
            { startIndex: 12, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 13, type: 'namespace.uno', bracket: 0 },
            { startIndex: 17, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 6
        src = 'using System.Threading.Tasks;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'keyword.using.uno', bracket: 0 },
            { startIndex: 5, type: '', bracket: 0 },
            { startIndex: 6, type: 'namespace.uno', bracket: 0 },
            { startIndex: 12, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 13, type: 'namespace.uno', bracket: 0 },
            { startIndex: 22, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 23, type: 'namespace.uno', bracket: 0 },
            { startIndex: 28, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 7
        src = '';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
        ]);
        // Line 8
        src = 'namespace VS';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'keyword.namespace.uno', bracket: 0 },
            { startIndex: 9, type: '', bracket: 0 },
            { startIndex: 10, type: 'namespace.uno', bracket: 0 }
        ]);
        // Line 9
        src = '{';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'delimiter.curly.uno', bracket: 1 }
        ]);
        // Line 10
        src = '	class Program';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 1, type: 'keyword.class.uno', bracket: 0 },
            { startIndex: 6, type: '', bracket: 0 },
            { startIndex: 7, type: 'identifier.uno', bracket: 0 }
        ]);
        // Line 11
        src = '	{';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 1, type: 'delimiter.curly.uno', bracket: 1 }
        ]);
        // Line 12
        src = '		static void Main(string[] args)';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 2, type: 'keyword.static.uno', bracket: 0 },
            { startIndex: 8, type: '', bracket: 0 },
            { startIndex: 9, type: 'keyword.void.uno', bracket: 0 },
            { startIndex: 13, type: '', bracket: 0 },
            { startIndex: 14, type: 'identifier.uno', bracket: 0 },
            { startIndex: 18, type: 'delimiter.parenthesis.uno', bracket: 1 },
            { startIndex: 19, type: 'keyword.string.uno', bracket: 0 },
            { startIndex: 25, type: 'delimiter.square.uno', bracket: 1 },
            { startIndex: 26, type: 'delimiter.square.uno', bracket: -1 },
            { startIndex: 27, type: '', bracket: 0 },
            { startIndex: 28, type: 'identifier.uno', bracket: 0 },
            { startIndex: 32, type: 'delimiter.parenthesis.uno', bracket: -1 }
        ]);
        // Line 13
        src = '		{';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 2, type: 'delimiter.curly.uno', bracket: 1 }
        ]);
        // Line 14
        src = '			ProcessStartInfo si = new ProcessStartInfo();';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'identifier.uno', bracket: 0 },
            { startIndex: 19, type: '', bracket: 0 },
            { startIndex: 20, type: 'identifier.uno', bracket: 0 },
            { startIndex: 22, type: '', bracket: 0 },
            { startIndex: 23, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 24, type: '', bracket: 0 },
            { startIndex: 25, type: 'keyword.new.uno', bracket: 0 },
            { startIndex: 28, type: '', bracket: 0 },
            { startIndex: 29, type: 'identifier.uno', bracket: 0 },
            { startIndex: 45, type: 'delimiter.parenthesis.uno', bracket: 1 },
            { startIndex: 46, type: 'delimiter.parenthesis.uno', bracket: -1 },
            { startIndex: 47, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 15
        src = '			float load= 3.2e02f;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'keyword.float.uno', bracket: 0 },
            { startIndex: 8, type: '', bracket: 0 },
            { startIndex: 9, type: 'identifier.uno', bracket: 0 },
            { startIndex: 13, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 14, type: '', bracket: 0 },
            { startIndex: 15, type: 'number.float.uno', bracket: 0 },
            { startIndex: 22, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 16
        src = '';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
        ]);
        // Line 17
        src = '			si.FileName = @"tools\\\\node.exe";';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'identifier.uno', bracket: 0 },
            { startIndex: 5, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 6, type: 'identifier.uno', bracket: 0 },
            { startIndex: 14, type: '', bracket: 0 },
            { startIndex: 15, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 16, type: '', bracket: 0 },
            { startIndex: 17, type: 'string.quote.uno', bracket: 1 },
            { startIndex: 19, type: 'string.uno', bracket: 0 },
            { startIndex: 34, type: 'string.quote.uno', bracket: -1 },
            { startIndex: 35, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 18
        src = '			si.Arguments = "tools\\\\simpleserver.js";';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'identifier.uno', bracket: 0 },
            { startIndex: 5, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 6, type: 'identifier.uno', bracket: 0 },
            { startIndex: 15, type: '', bracket: 0 },
            { startIndex: 16, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 17, type: '', bracket: 0 },
            { startIndex: 18, type: 'string.quote.uno', bracket: 1 },
            { startIndex: 19, type: 'string.uno', bracket: 0 },
            { startIndex: 24, type: 'string.escape.uno', bracket: 0 },
            { startIndex: 26, type: 'string.uno', bracket: 0 },
            { startIndex: 41, type: 'string.quote.uno', bracket: -1 },
            { startIndex: 42, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 19
        src = '			';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 }
        ]);
        // Line 20
        src = '			string someString = $"hello{outside+variable}the string again {{ escaped";';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'keyword.string.uno', bracket: 0 },
            { startIndex: 9, type: '', bracket: 0 },
            { startIndex: 10, type: 'identifier.uno', bracket: 0 },
            { startIndex: 20, type: '', bracket: 0 },
            { startIndex: 21, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 22, type: '', bracket: 0 },
            { startIndex: 23, type: 'string.quote.uno', bracket: 1 },
            { startIndex: 25, type: 'string.uno', bracket: 0 },
            { startIndex: 30, type: 'string.quote.uno', bracket: 1 },
            { startIndex: 31, type: 'identifier.uno', bracket: 0 },
            { startIndex: 38, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 39, type: 'identifier.uno', bracket: 0 },
            { startIndex: 47, type: 'string.quote.uno', bracket: -1 },
            { startIndex: 48, type: 'string.uno', bracket: 0 },
            { startIndex: 65, type: 'string.escape.uno', bracket: 0 },
            { startIndex: 67, type: 'string.uno', bracket: 0 },
            { startIndex: 75, type: 'string.quote.uno', bracket: -1 },
            { startIndex: 76, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 21
        src = '			var @string = 5;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'keyword.var.uno', bracket: 0 },
            { startIndex: 6, type: '', bracket: 0 },
            { startIndex: 7, type: 'identifier.uno', bracket: 0 },
            { startIndex: 14, type: '', bracket: 0 },
            { startIndex: 15, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 16, type: '', bracket: 0 },
            { startIndex: 17, type: 'number.uno', bracket: 0 },
            { startIndex: 18, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 22
        src = '			';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 }
        ]);
        // Line 23
        src = '			if (x == 4)';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'keyword.if.uno', bracket: 0 },
            { startIndex: 5, type: '', bracket: 0 },
            { startIndex: 6, type: 'delimiter.parenthesis.uno', bracket: 1 },
            { startIndex: 7, type: 'identifier.uno', bracket: 0 },
            { startIndex: 8, type: '', bracket: 0 },
            { startIndex: 9, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 11, type: '', bracket: 0 },
            { startIndex: 12, type: 'number.uno', bracket: 0 },
            { startIndex: 13, type: 'delimiter.parenthesis.uno', bracket: -1 }
        ]);
        // Line 24
        src = '			{';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'delimiter.curly.uno', bracket: 1 }
        ]);
        // Line 25
        src = '				for (int i = 4; i<10; i++)';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 4, type: 'keyword.for.uno', bracket: 0 },
            { startIndex: 7, type: '', bracket: 0 },
            { startIndex: 8, type: 'delimiter.parenthesis.uno', bracket: 1 },
            { startIndex: 9, type: 'keyword.int.uno', bracket: 0 },
            { startIndex: 12, type: '', bracket: 0 },
            { startIndex: 13, type: 'identifier.uno', bracket: 0 },
            { startIndex: 14, type: '', bracket: 0 },
            { startIndex: 15, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 16, type: '', bracket: 0 },
            { startIndex: 17, type: 'number.uno', bracket: 0 },
            { startIndex: 18, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 19, type: '', bracket: 0 },
            { startIndex: 20, type: 'identifier.uno', bracket: 0 },
            { startIndex: 21, type: 'delimiter.angle.uno', bracket: 1 },
            { startIndex: 22, type: 'number.uno', bracket: 0 },
            { startIndex: 24, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 25, type: '', bracket: 0 },
            { startIndex: 26, type: 'identifier.uno', bracket: 0 },
            { startIndex: 27, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 29, type: 'delimiter.parenthesis.uno', bracket: -1 }
        ]);
        // Line 26
        src = '				{';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 4, type: 'delimiter.curly.uno', bracket: 1 }
        ]);
        // Line 27
        src = '					var d = i;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 5, type: 'keyword.var.uno', bracket: 0 },
            { startIndex: 8, type: '', bracket: 0 },
            { startIndex: 9, type: 'identifier.uno', bracket: 0 },
            { startIndex: 10, type: '', bracket: 0 },
            { startIndex: 11, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 12, type: '', bracket: 0 },
            { startIndex: 13, type: 'identifier.uno', bracket: 0 },
            { startIndex: 14, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 28
        src = '				}';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 4, type: 'delimiter.curly.uno', bracket: -1 }
        ]);
        // Line 29
        src = '			}';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'delimiter.curly.uno', bracket: -1 }
        ]);
        // Line 30
        src = '			else';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'keyword.else.uno', bracket: 0 }
        ]);
        // Line 31
        src = '			{';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'delimiter.curly.uno', bracket: 1 }
        ]);
        // Line 32
        src = '				return;';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 4, type: 'keyword.return.uno', bracket: 0 },
            { startIndex: 10, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 33
        src = '			}';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'delimiter.curly.uno', bracket: -1 }
        ]);
        // Line 34
        src = '			';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 }
        ]);
        // Line 35
        src = '';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
        ]);
        // Line 36
        src = '			Process.Start(si);';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 3, type: 'identifier.uno', bracket: 0 },
            { startIndex: 10, type: 'delimiter.uno', bracket: 0 },
            { startIndex: 11, type: 'identifier.uno', bracket: 0 },
            { startIndex: 16, type: 'delimiter.parenthesis.uno', bracket: 1 },
            { startIndex: 17, type: 'identifier.uno', bracket: 0 },
            { startIndex: 19, type: 'delimiter.parenthesis.uno', bracket: -1 },
            { startIndex: 20, type: 'delimiter.uno', bracket: 0 }
        ]);
        // Line 37
        src = '		}';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 2, type: 'delimiter.curly.uno', bracket: -1 }
        ]);
        // Line 38
        src = '	}';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: '', bracket: 0 },
            { startIndex: 1, type: 'delimiter.curly.uno', bracket: -1 }
        ]);
        // Line 39
        src = '}';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'delimiter.curly.uno', bracket: -1 }
        ]);
        // Line 40
        src = '';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
        ]);
        // Line 41
        src = '#pragma region /MapLayer/*Image* /// ';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'namespace.cpp.uno', bracket: 0 }
        ]);
        // Line 42
        src = 'namespace ShouldNotBeAComment {}';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'keyword.namespace.uno', bracket: 0 },
            { startIndex: 9, type: '', bracket: 0 },
            { startIndex: 10, type: 'namespace.uno', bracket: 0 },
            { startIndex: 29, type: '', bracket: 0 },
            { startIndex: 30, type: 'delimiter.curly.uno', bracket: 1 },
            { startIndex: 31, type: 'delimiter.curly.uno', bracket: -1 }
        ]);
        // Line 43
        src = '#pragma endregion Region_1';
        tokens = tokenize(src, previousState);
        previousState = tokens.endState;
        assertTokens(tokens.tokens, [
            { startIndex: 0, type: 'namespace.cpp.uno', bracket: 0 }
        ]);
    });
    T.test('Keywords', function () {
        var tokens = tokenize('namespace VS { class Program { static void Main(string[] args) {} } }').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'keyword.namespace.uno' },
            { startIndex: 9, type: '' },
            { startIndex: 10, type: 'namespace.uno' },
            { startIndex: 12, type: '' },
            { startIndex: 13, type: 'delimiter.curly.uno' },
            { startIndex: 14, type: '' },
            { startIndex: 15, type: 'keyword.class.uno' },
            { startIndex: 20, type: '' },
            { startIndex: 21, type: 'identifier.uno' },
            { startIndex: 28, type: '' },
            { startIndex: 29, type: 'delimiter.curly.uno' },
            { startIndex: 30, type: '' },
            { startIndex: 31, type: 'keyword.static.uno' },
            { startIndex: 37, type: '' },
            { startIndex: 38, type: 'keyword.void.uno' },
            { startIndex: 42, type: '' },
            { startIndex: 43, type: 'identifier.uno' },
            { startIndex: 47, type: 'delimiter.parenthesis.uno' },
            { startIndex: 48, type: 'keyword.string.uno' },
            { startIndex: 54, type: 'delimiter.square.uno' },
            { startIndex: 55, type: 'delimiter.square.uno' },
            { startIndex: 56, type: '' },
            { startIndex: 57, type: 'identifier.uno' },
            { startIndex: 61, type: 'delimiter.parenthesis.uno' },
            { startIndex: 62, type: '' },
            { startIndex: 63, type: 'delimiter.curly.uno' },
            { startIndex: 64, type: 'delimiter.curly.uno' },
            { startIndex: 65, type: '' },
            { startIndex: 66, type: 'delimiter.curly.uno' },
            { startIndex: 67, type: '' },
            { startIndex: 68, type: 'delimiter.curly.uno' }
        ]);
    });
    T.test('Comments - single line', function () {
        var tokens = tokenize('//').tokens;
        T.equal(tokens.length, 1);
        assertTokens(tokens, [{ startIndex: 0, type: 'comment.uno' }]);
        tokens = tokenize('    // a comment').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: '' },
            { startIndex: 4, type: 'comment.uno' }
        ]);
        tokens = tokenize('// a comment').tokens;
        assertTokens(tokens, [{ startIndex: 0, type: 'comment.uno' }]);
        tokens = tokenize('//sticky comment').tokens;
        assertTokens(tokens, [{ startIndex: 0, type: 'comment.uno' }]);
        tokens = tokenize('/almost a comment').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'delimiter.uno' },
            { startIndex: 1, type: 'identifier.uno' },
            { startIndex: 7, type: '' },
            { startIndex: 8, type: 'identifier.uno' },
            { startIndex: 9, type: '' },
            { startIndex: 10, type: 'identifier.uno' }
        ]);
        assertTokens2('1 / 2; /* comment', [
            { startIndex: 0, type: 'number.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'number.uno' },
            { startIndex: 5, type: 'delimiter.uno' },
            { startIndex: 6, type: '' },
            { startIndex: 7, type: 'comment.uno' }
        ]);
        tokens = tokenize('var x = 1; // my comment // is a nice one').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'keyword.var.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'identifier.uno' },
            { startIndex: 5, type: '' },
            { startIndex: 6, type: 'delimiter.uno' },
            { startIndex: 7, type: '' },
            { startIndex: 8, type: 'number.uno' },
            { startIndex: 9, type: 'delimiter.uno' },
            { startIndex: 10, type: '' },
            { startIndex: 11, type: 'comment.uno' }
        ]);
    });
    T.test('Comments - range comment, single line', function () {
        var tokens = tokenize('/* a simple comment */').tokens;
        assertTokens(tokens, [{ startIndex: 0, type: 'comment.uno' }]);
        tokens = tokenize('var x = /* a simple comment */ 1;').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'keyword.var.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'identifier.uno' },
            { startIndex: 5, type: '' },
            { startIndex: 6, type: 'delimiter.uno' },
            { startIndex: 7, type: '' },
            { startIndex: 8, type: 'comment.uno' },
            { startIndex: 30, type: '' },
            { startIndex: 31, type: 'number.uno' },
            { startIndex: 32, type: 'delimiter.uno' }
        ]);
        tokens = tokenize('var x = /* comment */ 1; */').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'keyword.var.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'identifier.uno' },
            { startIndex: 5, type: '' },
            { startIndex: 6, type: 'delimiter.uno' },
            { startIndex: 7, type: '' },
            { startIndex: 8, type: 'comment.uno' },
            { startIndex: 21, type: '' },
            { startIndex: 22, type: 'number.uno' },
            { startIndex: 23, type: 'delimiter.uno' },
            { startIndex: 24, type: '' }
        ]);
        tokens = tokenize('x = /**/;').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'comment.uno' },
            { startIndex: 8, type: 'delimiter.uno' }
        ]);
        tokens = tokenize('x = /*/;').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'comment.uno' }
        ]);
    });
    T.test('Numbers', function () {
        assertTokens2('0', [
            { startIndex: 0, type: 'number.uno' }
        ]);
        var tokens = tokenize('0x').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'number.uno' },
            { startIndex: 1, type: 'identifier.uno' }
        ]);
        assertTokens2('0x123', [
            { startIndex: 0, type: 'number.hex.uno' }
        ]);
        assertTokens2('23.5', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('23.5e3', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('23.5E3', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('23.5F', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('23.5f', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('1.72E3F', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('1.72E3f', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('1.72e3F', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('1.72e3f', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('23.5D', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('23.5d', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('1.72E3D', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('1.72E3d', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('1.72e3D', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('1.72e3d', [
            { startIndex: 0, type: 'number.float.uno' }
        ]);
        assertTokens2('0+0', [
            { startIndex: 0, type: 'number.uno' },
            { startIndex: 1, type: 'delimiter.uno' },
            { startIndex: 2, type: 'number.uno' }
        ]);
        assertTokens2('100+10', [
            { startIndex: 0, type: 'number.uno' },
            { startIndex: 3, type: 'delimiter.uno' },
            { startIndex: 4, type: 'number.uno' }
        ]);
        assertTokens2('0 + 0', [
            { startIndex: 0, type: 'number.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'number.uno' }
        ]);
    });
    T.test('Strings', function () {
        var tokens = tokenize('x = "string";').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'string.quote.uno' },
            { startIndex: 5, type: 'string.uno' },
            { startIndex: 11, type: 'string.quote.uno' },
            { startIndex: 12, type: 'delimiter.uno' }
        ]);
        tokens = tokenize('x = "stri\\"ng";').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'string.quote.uno' },
            { startIndex: 5, type: 'string.uno' },
            { startIndex: 9, type: 'string.escape.uno' },
            { startIndex: 11, type: 'string.uno' },
            { startIndex: 13, type: 'string.quote.uno' },
            { startIndex: 14, type: 'delimiter.uno' }
        ]);
    });
    T.test('Verbatim Strings', function () {
        var tokens = tokenize('x = @"verbatimstring";').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'string.quote.uno' },
            { startIndex: 6, type: 'string.uno' },
            { startIndex: 20, type: 'string.quote.uno' },
            { startIndex: 21, type: 'delimiter.uno' }
        ]);
        tokens = tokenize('x = @"verbatim""string";').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'string.quote.uno' },
            { startIndex: 6, type: 'string.uno' },
            { startIndex: 14, type: 'string.escape.uno' },
            { startIndex: 16, type: 'string.uno' },
            { startIndex: 22, type: 'string.quote.uno' },
            { startIndex: 23, type: 'delimiter.uno' }
        ]);
        tokens = tokenize('x = @"verbatim\\string\\";').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'string.quote.uno' },
            { startIndex: 6, type: 'string.uno' },
            { startIndex: 22, type: 'string.quote.uno' },
            { startIndex: 23, type: 'delimiter.uno' }
        ]);
        tokens = tokenize('x = @"verbatim\nstring";').tokens;
        assertTokens(tokens, [
            { startIndex: 0, type: 'identifier.uno' },
            { startIndex: 1, type: '' },
            { startIndex: 2, type: 'delimiter.uno' },
            { startIndex: 3, type: '' },
            { startIndex: 4, type: 'string.quote.uno' },
            { startIndex: 6, type: 'string.uno' },
            { startIndex: 21, type: 'string.quote.uno' },
            { startIndex: 22, type: 'delimiter.uno' }
        ]);
    });
});
