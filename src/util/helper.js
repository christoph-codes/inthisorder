export const convertTimestamp = (timestamp) => {
	let date = timestamp.toDate();
	const mm = date.getMonth();
	const dd = date.getDate();
	const yyyy = date.getFullYear();

	date = `${mm}/${dd}/${yyyy}`;
	return date;
};
export const dummyFunc = (text) => {
	console.log(text);
};
