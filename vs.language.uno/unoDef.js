/*---------------------------------------------------------
 * Forked from C# Defined.
 * Configuration by Realignist
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: 'Uno',
        name: 'uno',
        mimeTypes: [],
        fileExtensions: [],
        defaultToken: '',
        // used in the editor to insert comments (ctrl+/ or shift+alt+A)
        lineComment: '// ',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        // the default separators except `@`
        wordDefinition: /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        autoClosingPairs: [
            ['"', '"'],
            ['\'', '\''],
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
        ],
        brackets: [
            { open: '{', close: '}', token: 'delimiter.curly' },
            { open: '[', close: ']', token: 'delimiter.square' },
            { open: '(', close: ')', token: 'delimiter.parenthesis' },
            { open: '<', close: '>', token: 'delimiter.angle' }
        ],
        editorOptions: { tabSize: 4, insertSpaces: true },
        keywords: [
            'extern',
            'alias',
            'using',
            'bool',
            'decimal',
            'draw',
            'sbyte',
            'byte',
            'byte2',
            'byte4',
            'short',
            'short2',
            'short4',
            'ushort',
            'ushort2',
            'ushort4',
            'int',
            'int2',
            'int3',
            'int4',
            'uint',
            'long',
            'ulong',
            'char',
            'float',
            'float2',
            'float2x2',
            'float3',
            'float3x3',
            'float4',
            'float4x4',
            'double',
            'double2',
            'double3',
            'double4',
            'object',
            'dynamic',
            'string',
            'assembly',
            'module',
            'is',
            'as',
            'ref',
            'out',
            'this',
            'base',
            'new',
            'typeof',
            'void',
            'checked',
            'unchecked',
            'default',
            'delegate',
            'var',
            'const',
            'if',
            'else',
            'switch',
            'case',
            'while',
            'do',
            'for',
            'foreach',
            'in',
            'break',
            'continue',
            'goto',
            'return',
            'throw',
            'try',
            'catch',
            'finally',
            'lock',
            'yield',
            'from',
            'let',
            'where',
            'join',
            'on',
            'equals',
            'into',
            'orderby',
            'ascending',
            'descending',
            'select',
            'group',
            'by',
            'namespace',
            'partial',
            'class',
            'field',
            'event',
            'method',
            'param',
            'property',
            'public',
            'protected',
            'internal',
            'private',
            'abstract',
            'sealed',
            'static',
            'struct',
            'readonly',
            'volatile',
            'virtual',
            'override',
            'params',
            'get',
            'set',
            'add',
            'remove',
            'operator',
            'true',
            'false',
            'implicit',
            'explicit',
            'interface',
            'enum',
            'null',
            'async',
            'await'
        ],
        namespaceFollows: [
            'namespace', 'using',
        ],
        parenFollows: [
            'if', 'for', 'while', 'switch', 'foreach', 'using', 'catch'
        ],
        operators: [
            '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',
            '+', '-', '*', '/', '%', '!', '~', '++', '--', '+=',
            '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'
        ],
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        // escape sequences
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                // identifiers and keywords
                [/\@?[a-zA-Z_]\w*/, { cases: {
                            '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },
                            '@keywords': { token: 'keyword.$0', next: '@qualified' },
                            '@default': { token: 'identifier', next: '@qualified' }
                        }
                    }],
                // whitespace
                { include: '@whitespace' },
                // delimiters and operators
                [/}/, { cases: {
                            '$S2==interpolatedstring': { token: 'string.quote', bracket: '@close', next: '@pop' },
                            '@default': '@brackets' } }],
                [/[{}()\[\]]/, '@brackets'],
                [/[<>](?!@symbols)/, '@brackets'],
                [/@symbols/, { cases: { '@operators': 'delimiter', '@default': '' } }],
                // literal string
                [/\@"/, { token: 'string.quote', bracket: '@open', next: '@litstring' }],
                // interpolated string
                [/\$"/, { token: 'string.quote', bracket: '@open', next: '@interpolatedstring' }],
                // numbers
                [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, 'number.float'],
                [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                [/\d+/, 'number'],
                // delimiter: after number because of .\d floats
                [/[;,.]/, 'delimiter'],
                // strings
                [/"([^"\\]|\\.)*$/, 'string.invalid'],
                [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                // characters
                [/'[^\\']'/, 'string'],
                [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                [/'/, 'string.invalid']
            ],
            qualified: [
                [/[a-zA-Z_][\w]*/, { cases: { '@keywords': { token: 'keyword.$0' },
                            '@default': 'identifier' }
                    }],
                [/\./, 'delimiter'],
                ['', '', '@pop'],
            ],
            namespace: [
                { include: '@whitespace' },
                [/[A-Z]\w*/, 'namespace'],
                [/[\.=]/, 'delimiter'],
                ['', '', '@pop'],
            ],
            comment: [
                [/[^\/*]+/, 'comment'],
                // [/\/\*/,    'comment', '@push' ],    // no nested comments :-(
                ['\\*/', 'comment', '@pop'],
                [/[\/*]/, 'comment']
            ],
            string: [
                [/[^\\"]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            litstring: [
                [/[^"]+/, 'string'],
                [/""/, 'string.escape'],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            interpolatedstring: [
                [/[^\\"{]+/, 'string'],
                [/@escapes/, 'string.escape'],
                [/\\./, 'string.escape.invalid'],
                [/{{/, 'string.escape'],
                [/}}/, 'string.escape'],
                [/{/, { token: 'string.quote', bracket: '@open', next: 'root.interpolatedstring' }],
                [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
            ],
            whitespace: [
                [/^[ \t\v\f]*#\w.*$/, 'namespace.cpp'],
                [/[ \t\v\f\r\n]+/, ''],
                [/\/\*/, 'comment', '@comment'],
                [/\/\/.*$/, 'comment'],
            ],
        },
    };
});
//# sourceMappingURL=unoDef.js.map