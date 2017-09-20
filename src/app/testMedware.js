import express from "express";
import cheerio from 'cheerio';
import { makeRequest } from './help';

const testRouter = express.Router();

testRouter.use((req, res, next) => {
	next();
})

function percentToFload (percent) {
	return parseFloat(percent.slice(0, -1));
}

function dollarToInt (dollar) {
	const v = dollar.replace(',','');
	return parseInt(v.slice(1));
}

testRouter.get('/', (req, res) => {
	makeRequest(config.test.url())
	.then(html => {
		let message = [];
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
  		res.send(JSON.stringify(message));
	})
	.catch(e=>{
		res.send(e);
	})
})
export default testRouter;