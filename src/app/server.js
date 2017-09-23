import express from "express";
import testMiddleware from './testMiddleware';
import slackMiddleware from './slackMiddleware';
import homeloanMiddleware from './homeloanMiddleware';


const App = express();
const port = process.env.PORT || 8080;

App.use('/test', testMiddleware);
App.use('/slack', slackMiddleware);
App.use('/homeloan', homeloanMiddleware);

App.use((err, req, res, next) => {
	res.status(500).json({ error: err });
})

App.listen(port, () => {
	console.log(`Server is running on port ${port}`);
})
const router = express.Router();