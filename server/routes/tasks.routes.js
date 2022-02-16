const getAllTasks = (req, res) => {
	try {
		res.status(200).send({ status: 'Tasks are healthy' });
	} catch (err) {
		res.status(500).send({ status: 'Tasks are NOT healthy' });
	}
};
const getSingleTask = (req, res) => {
	const { taskId } = req.body;
	try {
		res.status(200).send({ status: 'Tasks are healthy' });
	} catch (err) {
		res.status(500).send({ status: 'Tasks are NOT healthy' });
	}
};
module.exports = { getAllTasks, getSingleTask };
