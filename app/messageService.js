import { q } from "./help";
const clientId = '237550111488.238862340437';
const clientSecret = '6df288cf5c5db6ab6338959422461cc6';
const code = '237550111488.243247573523.92e224335a09d060db9c800b015cbd24313f3923afa57b4eac0190dd34be601d'


const auth = [
	`client_id=${clientId}`,
	`client_secret=${clientSecret}`,
	`code=${code}`
]

const authParams = `?${auth.join('&')}`;

q({
	method: 'GET',
	url: `https://slack.com/api/oauth.access${authParams}`
})
.then(body => {
	console.log(body)
})
.catch(e => {
	console.error(e);
})