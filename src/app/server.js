import express from "express";
import testMedware from './testMedware';
import slackMidware from './slackMidware';


const App = express();
const port = process.env.PORT || 8080;

App.use('/test', testMedware);
App.use('/slack', slackMidware);

App.listen(port, () => {
	console.log(`Server is running on port ${port}`);
})
const router = express.Router();