import path from 'path';
import fs from 'fs';

const __dirname = path.resolve(path.dirname(''));
const rootPath = path.resolve(__dirname, '.');

const publicManifestPath = path.resolve(rootPath, './public/manifest.json');
const packageJsonPath = path.resolve(rootPath, './package.json');

/**
 * @description Pre build script to update the version in the manifest file
 */
const main = () => {
	try {
		const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
		const publicManifest = JSON.parse(fs.readFileSync(publicManifestPath));
		publicManifest.version = packageJson.version;

		fs.writeFileSync(
			publicManifestPath,
			JSON.stringify(publicManifest, null, 4),
		);
	} catch (error) {
		console.error('Pre build: ', error);
	}
};

main();
