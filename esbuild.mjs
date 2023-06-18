import * as esbuild from 'esbuild';
import copyStaticFiles from 'esbuild-copy-static-files';

esbuild.build({
	entryPoints: ['src/index.tsx'],
	bundle: true,
	outfile: 'dist/bundle.js',
	target: 'es2015',
	minify: true,
	plugins: [
		copyStaticFiles({
			src: './public',
			dest: './dist',
		}),
	],
});
