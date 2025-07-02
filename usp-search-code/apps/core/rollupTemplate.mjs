/* eslint-disable import/no-extraneous-dependencies */
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import progress from 'rollup-plugin-progress';

const baseConfig = {
	input: './src/handler.mjs',
	output: {
		dir: 'dist',
		entryFileNames: 'index.mjs',
		format: 'es',
		sourcemap: false,
	},
	external: [
		'esmock',
	],
	plugins: [
		progress({
			clearLine: true,
		}),
		nodeResolve({ preferBuiltins: true }),
		commonjs(),
		json(),
		terser(),
	],
};

export default baseConfig;
