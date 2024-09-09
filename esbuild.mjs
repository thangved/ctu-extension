import { build } from 'esbuild';
import copyStaticFiles from 'esbuild-copy-static-files';

build({
	entryPoints: ['src/index.tsx'],
	bundle: true,
	outfile: 'dist/bundle.js',
	target: 'es6',
	minify: true,
	plugins: [
		copyStaticFiles({
			src: './public',
			dest: './dist',
		}),
	],
});
