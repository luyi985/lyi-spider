import express from "express";
import request from 'request';
import cheerio from 'cheerio';

const testRouter = express.Router();

testRouter.use((req, res, next) => {
	next();
})

testRouter.get('/:name', (req, res) => {
	request(config.test.url, (error, response, html) => {
		let message = [];
  		if (!error && response.statusCode == 200) {
  			const $ = cheerio.load(html);
		    $(config.test.selector).each((i, element) => {
		      // message.push({
		      // 	bankName: $(element).find('td.company img').attr('alt'),
		      // 	package: $(element).find('td.productName span.product-title').text()
		      // });
		    });
  		}
  		res.send(JSON.stringify(message));
	});
})

testRouter.param('name', (req, res, next) => {
	console.log(req.params);
	const name = req.params.name;

	if (name === 'aaa') {
		res.send('return aaa');
	} else {
		next();		
	}
})

function percentToFload (percent) {
	return parseFloat(percent.slice(0, -1));
}

function dollarToInt (dollar) {
	const v = dollar.replace(',','');
	return parseInt(v.slice(1));
}

testRouter.get('/', (req, res) => {
	request(config.test.url, (error, response, html) => {
		let message = [];
  		if (!error && response.statusCode == 200) {
  			const $ = cheerio.load(html);
		    $(config.test.selector).each((i, element) => {
		    	message.push({
		       		bankName: $(element).find('td.company img').attr('alt'),
		       		package: $(element).find('td.productName span.product-title').text(),
		       		adRate: {
		       			rate: percentToFload($(element).find('td.advertisedRate .cell-value').text()),
		       			detail: $(element).find('td.advertisedRate .cell-details').text()
		       		},
		       		compareRate: percentToFload($(element).find('td.comparisonRate .cell-value').text()),
		       		repayment: dollarToInt($(element).find('td.monthlyRepayment .cell-value').text()),
		       		upFrontFee: dollarToInt($(element).find('td.upFrontFee .cell-value').text()),
		       		url: $(element).find('td.apply .gotosite').attr('href')
		    	});
		    });
  		}
  		res.send(JSON.stringify(message));
	});
})
export default testRouter;