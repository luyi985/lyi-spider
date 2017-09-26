import express from "express";
import querystring from "querystring";
import { q } from "./help";
const slackRouter = express.Router();
const token = "xoxp-237550111488-237682550961-247427851653-b7f313c16a991c23672447d087ee2727";
const messageApi = "https://slack.com/api/chat.postMessage";

slackRouter.get('/msg', (req, res) => {
	const text = req.query.t;
	q({
		method: 'POST',
		url: messageApi,
		body: querystring.stringify({
			text: text,
			token: token,
			channel: '#general'
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	})
	.then(body => {
		res.send(body)
	})
	.catch(e => {
		res.send(e);
	})

})

export default slackRouter;