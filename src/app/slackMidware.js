import express from "express";
import querystring from "querystring";
import { q } from "./help";
const slackRouter = express.Router();
const clientId = '237550111488.238862340437';
const clientSecret = '6df288cf5c5db6ab6338959422461cc6';
const scope = 'incoming-webhook,chat:write:bot'
const redirectUri = 'http://138.197.9.69:8080/slack/access';//'http://localhost:8080/slack/access';
const code = "237550111488.242831798641.efb15339cb861de67c51ec52e14614454a1a593fac84232b3adee4c8e4b4f603"

const auth = [
	`client_id=${clientId}`,
	`scope=${scope}`,
	`redirect_uri=${redirectUri}`
]

function access(code){
	return 
}

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

export default slackRouter;