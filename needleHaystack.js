var strStr = function (haystack, needle) {
	if (needle == '') {
		return 0
	} else if (!haystack.includes(needle)) {
		return -1
	} else {
		return haystack.indexOf(needle)
	}
};