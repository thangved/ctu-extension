import * as esbuild from 'esbuild';
import copyStaticFiles from 'esbuild-copy-static-files';

esbuild.build({
	entryPoints: ['src/index.ts'],
	bundle: true,
	outfile: 'dist/bundle.js',
	minify: true,
	plugins: [
		copyStaticFiles({
			src: './public',
			dest: './dist',
		}),
	],
});
