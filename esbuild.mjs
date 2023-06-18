import * as esbuild from 'esbuild';
import copyStaticFiles from 'esbuild-copy-static-files';

esbuild.build({
	entryPoints: ['src/index.tsx'],
	bundle: true,
	outfile: 'dist/bundle.js',
	target: 'es6',
	// minify: true,
	jsxDev: true,
	plugins: [
		copyStaticFiles({
			src: './public',
			dest: './dist',
		}),
	],
});
