const finishMessages = [
	'That was great work, keep it up!',
	'You are on a roll, you should be proud!',
	'Wow! How did you do that so fast?',
	'Great job!',
	'Outstanding work!',
	'You are such a team player.',
	'Amazing!',
	'Thank you for your hard work!',
	'We knew you could do it. Awesome work!',
	'Well done. Thanks for helping out!',
	'You are the best!',
	'Keep it going!',
];
const generateFinishMessage = () => {
	const randomNumber = Math.floor(Math.random() * finishMessages.length - 1);
	return finishMessages[randomNumber];
};
export default generateFinishMessage;
