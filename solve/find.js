// write .find(f)
function find(array, callback) {
	const index = array.findIndex(callback);
	if (index === -1) {
		return undefined;
	} else {
		return array[index];
	}
}
