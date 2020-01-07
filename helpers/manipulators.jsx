/* 
	- This function accepts a string in camelCase and converts it to kebab-case
*/
const toKebabCase = string => {
	return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

export { toKebabCase };
