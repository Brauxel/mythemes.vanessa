import { toKebabCase } from "./manipulators";
/* 
	- This calls all the functions sent as arguments using the curried format
*/
const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

/*
	- This function accepts CSS as an object and convets the keys from camelCase to kebab-case and returns it as a valid CSS string.
*/
const generateCSS = styles => {
	if (!styles) {
		return;
	}

	const cssOutput = Object.entries(styles).reduce((cssStyles, [key, value]) => {
		const cssReady = toKebabCase(key);
		cssStyles = cssStyles + cssReady + ": " + value + ";";

		return cssStyles;
	}, "");

	return cssOutput;
};

export { callAll, generateCSS };
