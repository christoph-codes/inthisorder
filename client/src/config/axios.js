import axios from 'axios';

const ITO_API = axios.create({
	baseURL:
		process.env.NODE_ENV === 'development'
			? `http://localhost:5555`
			: process.env.SERVER_URL,
	timeout: 2000,
});

export default ITO_API;
