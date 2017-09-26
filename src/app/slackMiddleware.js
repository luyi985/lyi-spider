import express from "express";
import querystring from "querystring";
import { q } from "./help";
const slackRouter = express.Router();
const clientId = '237550111488.238862340437';
const clientSecret = '6df288cf5c5db6ab6338959422461cc6';
const scope = 'incoming-webhook,chat:write:bot'
const redirectUri = 'http://138.197.9.69:8080/slack/access';//'http://localhost:8080/slack/access';
const code = "237550111488.242831798641.efb15339cb861de67c51ec52e14614454a1a593fac84232b3adee4c8e4b4f603"
const token = "xoxp-237550111488-237682550961-243737065895-541b4138af290fd4e75f16c1d5786679";
const webhook = "https://hooks.slack.com/services/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";
const auth = [
	`client_id=${clientId}`,
	`scope=${scope}`,
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
	
	q({
		method: 'POST',
		url: `https://slack.com/api/oauth.access`,
		body: querystring.stringify({
			"code" : req.query.code,
			"client_id": clientId,
			"client_secret": clientSecret,
			"redirect_uri": redirectUri
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

slackRouter.get('/msg', (req, res) => {
	const text = req.query.t;
	q({
		method: 'POST',
		url: webhook,
		body: JSON.stringify({
			text: text
		}),
		headers: {
			"Content-Type": "application/json"
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