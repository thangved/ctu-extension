import fs from 'fs';
import path from 'path';
import { zip } from 'zip-a-folder';

const __dirname = path.resolve(path.dirname(''));
const rootPath = path.resolve(__dirname, '.');

const distManifestPath = path.resolve(rootPath, './dist/manifest.json');

/**
 * @description Post build script to create a zip file of the build folder
 */
const main = async () => {
	try {
		const manifest = JSON.parse(fs.readFileSync(distManifestPath, 'utf8'));

		const version = manifest.version;
		const name = manifest.short_name;

		const zipName = `${name}-v${version}.zip`;

		await zip(
			path.resolve(__dirname, './dist/'),
			path.resolve(__dirname, `./${zipName}`),
		);
	} catch (error) {
		console.error('Post build: ', error);
	}
};

main();
