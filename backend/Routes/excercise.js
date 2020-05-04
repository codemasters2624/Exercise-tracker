const router = require('express').Router();

let Excercise = require('../models/excercise.model');

router.route('/').get(function (req, res) {
	Excercise.find()
		.then((excercises) => res.json(excercises))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = req.body.duration;
	const date = req.body.date;

	const newExcercise = new Excercise({
		username,
		description,
		duration,
		date,
	});

	newExcercise
		.save()
		.then(() => res.json('Excercise added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
