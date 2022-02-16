const healthcheck = (req, res) => {
	try {
		res.status(200).send({ status: 'Everything is healthy' });
	} catch (err) {
		res.status(500).send({ status: 'Everything is NOT healthy' });
	}
};
module.exports = healthcheck;
