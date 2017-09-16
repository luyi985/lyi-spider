import request from 'request';

export function makeRequest(url) {
	return new Promise((resolve, reject) => {
		request.get(url, (err, res, body) => {
			if(err) return reject({status: 'err', msg: JSON.stringify(err)});
			if(res.statusCode > 302) return reject({status: res.statusCode, msg: "something fail"});
			resolve(body);
		})
	})
}