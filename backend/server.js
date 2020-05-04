const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri =
	'mongodb+srv://test:test@cluster0-vvqsp.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', function () {
	console.log('MongoDB connected successfully.');
});

const excerciseRouter = require('./Routes/excercise');
const userRouter = require('./Routes/user');

app.use('/excercise', excerciseRouter);
app.use('/user', userRouter);

app.listen(port, function () {
	console.log(`listening on PORT ${port}.`);
});
