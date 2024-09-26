import fs from 'fs';
import path from 'path';
import { zip } from 'zip-a-folder';

const __dirname = path.resolve(path.dirname(''));
const rootPath = path.resolve(__dirname, '.');

const distPath = path.resolve(rootPath, './dist/');
const distManifestPath = path.resolve(distPath, './manifest.json');

/**
 * @description Post build script to create a zip file of the build folder
 */
const main = async () => {
	try {
		const manifest = JSON.parse(fs.readFileSync(distManifestPath, 'utf8'));

		const version = manifest.version;
		const name = manifest.short_name;

		const defaultZipName = `${name}.zip`;
		const versionZipName = `${name}-v${version}.zip`;

		await zip(distPath, path.resolve(__dirname, `./${defaultZipName}`));
		await zip(distPath, path.resolve(__dirname, `./${versionZipName}`));
	} catch (error) {
		console.error('Post build: ', error);
	}
};

main();
