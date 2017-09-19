import request from 'request';

export function makeRequest(url) {
	return new Promise((resolve, reject) => {
		request.get(url, (err, res, body) => {
			if(err) return reject({status: 'err', msg: JSON.stringify(err)});
			if(res.statusCode > 302) return reject({status: res.statusCode, msg: res});
			resolve(body);
		})
	})
}

export function q(option) {
	return new Promise((resolve, reject)=> {
		request(option,(err, res, body) => {
			if(err) return reject({status: 'err', msg: res});
			if(res.statusCode > 302) return reject({status: res.statusCode, msg: res});
			resolve(res);
		})
	})
}

export function postSlack(text) {
	return new Promise((resolve, reject) => {
		request({
  			uri: 'https://www.googleapis.com/urlshortener/v1/url',
  			method: 'POST',
  			oauth: {
  				//consumer_key: '...',
    			//consumer_secret: '...',
    			client_id:'237550111488.238862340437',
    			client_secret: '6df288cf5c5db6ab6338959422461cc6',
    			scope: 'chat:write:bot',
    			token: 'UMqXyFkyfZVNWpsNzJSde2rS'
    			//token_secret: '...',
    			//session_handle: '...'
  			},
  			json: {"text": text }
  		}, (err, res, body) => {
  			if(err) return reject({status: 'err', msg: JSON.stringify(err)});
			if(res.statusCode > 302) return reject({status: res.statusCode, msg: JSON.stringify(body)});
			resolve(res);
		})
	})
}