import fs from 'fs';
import path from 'path';

const __dirname = path.resolve(path.dirname(''));
const rootPath = path.resolve(__dirname, '.');

const packageJsonPath = path.resolve(rootPath, './package.json');

/**
 * Generate banner for the project
 * @returns {string} banner
 */
export default function generateBanner() {
	const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
	const banner = `
/**
 * Project: ${packageJson.name}
 * Version: ${packageJson.version}
 * Description: ${packageJson.description}
 * Author: ${packageJson.author.name} <${packageJson.author.email}> (${packageJson.author.url})
 * 
 * Dependencies:
${generateDependencyList(packageJson.dependencies)}
 *
 * Development Dependencies:
${generateDependencyList(packageJson.devDependencies)}
 */`.trim();

	return banner;
}

/**
 * Generate list of dependencies
 * @param {Object} dependencies - Dependencies object
 * @returns {string} list
 */
function generateDependencyList(dependencies = {}) {
	const dependenciesName = Object.keys(dependencies);
	const list = dependenciesName
		.map((dep) => ` * - ${dep} (${dependencies[dep]})`)
		.join('\n');
	return list;
}
