/* 
	- This calls all the functions sent as arguments using the curried format
*/
const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

export { callAll };
