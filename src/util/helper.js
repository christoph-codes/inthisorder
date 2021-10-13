export const convertTimestamp = (timestamp) => {
	let date = timestamp.toDate();
	const mm = date.getMonth();
	const dd = date.getDate();
	const yyyy = date.getFullYear();

	date = `${mm}/${dd}/${yyyy}`;
	return date;
};
export const setWithExpiry = (key, value, ttl) => {
	const now = new Date();

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value,
		expiry: now.getTime() + ttl,
	};
	if (!ttl) {
		localStorage.setItem(key, JSON.stringify(value));
	} else {
		localStorage.setItem(key, JSON.stringify(item));
	}
};
export const getWithExpiry = (key) => {
	const itemStr = localStorage.getItem(key);
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null;
	}
	const item = JSON.parse(itemStr);
	const now = new Date();
	if (item.expiry) {
		// compare the expiry time of the item with the current time
		if (now.getTime() > item.expiry) {
			// If the item is expired, delete the item from storage
			// and return null
			localStorage.removeItem(key);
			return null;
		}
	}
	return item.value;
};
export const clearItem = (key) => {
	localStorage.removeItem(key);
};
