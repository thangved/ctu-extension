import * as fs from 'fs';
import path from 'path';
import { zip } from 'zip-a-folder';

const __dirname = path.resolve(path.dirname(''));

const main = async () => {
	try {
		const manifest = JSON.parse(
			fs.readFileSync(path.resolve(__dirname, './dist/manifest.json')),
		);

		const version = manifest.version;
		const name = manifest.short_name;

		const zipName = `${name}-v${version}.zip`;

		console.log('Post build: ', zipName);

		await zip(
			path.resolve(__dirname, './dist/'),
			path.resolve(__dirname, `./${zipName}`),
		);
	} catch (error) {
		console.log('Post build: ', error);
	}
};

main();
