/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import node from 'eslint-plugin-node';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends('eslint:recommended', 'airbnb-base', 'plugin:jsdoc/recommended'),
	{
		plugins: {
			node,
		},
		files: ['**/*.mjs'],
		languageOptions: {
			globals: {
				...globals.browser,
			},

			parser: babelParser,
			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				requireConfigFile: false,

				babelOptions: {
					plugins: ['@babel/plugin-syntax-import-assertions'],
				},
			},
		},
		rules: {
			'import/no-unresolved': ['error', {
				ignore: [
					'@aws-lambda-powertools/logger/middleware',
					'@aws-lambda-powertools/tracer/middleware',
				],
			}],

			'import/extensions': ['error', 'ignorePackages', {
				js: 'never',
				json: 'always',
			}],

			'jsdoc/require-jsdoc': ['off', {
				publicOnly: true,
				enableFixer: false,

				require: {
					FunctionDeclaration: true,
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: true,
					FunctionExpression: true,
				},

				contexts: ['VariableDeclaration'],
			}],

			'linebreak-style': 'off',

			'max-len': ['error', {
				code: 200,
			}],

			indent: [2, 'tab', {
				SwitchCase: 1,
				VariableDeclarator: 1,
			}],

			'no-console': 'off',
			'no-tabs': 0,
			'node/no-unsupported-features/es-syntax': 'off',
		},
	},
];
