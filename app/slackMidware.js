import express from "express";
import { q } from "./help";
const slackRouter = express.Router();
const clientId = '237550111488.238862340437';
const clientSecret = '6df288cf5c5db6ab6338959422461cc6';
const scope = 'incoming-webhook,chat:write:bot'
const redirectUri = 'http://138.197.9.69:8080/slack/access';


const auth = [
	`client_id=${clientId}`,
	`scope=${scope}`,
	//`client_secret=${clientSecret}`,
	`redirect_uri=${redirectUri}`
]

const authParams = `?${auth.join('&')}`;



slackRouter.get('/auth', (req, res) => {
	q({
		method: 'GET',
		url: `https://slack.com/oauth/authorize${authParams}`
	})
	.then(body => {
		res.send(body)
	})
	.catch(e => {
		res.send(e);
	})
})

slackRouter.get('/access', (req, res) => {
	res.send(req.query);
	/*q({
		method: 'GET',
		url: `https://slack.com/oauth/authorize${authParams}`
	})
	.catch(e => {
		res.send(e);
	})*/
})

export default slackRouter;