import { monthlyRepayment } from './help';
import express from 'express';

const loanRouter = express.Router();

loanRouter.get('/calc', (req, res, next) => {
	let { p, y, r, f} = req.query;
	const pay = monthlyRepayment(p, y, r, f);
	try{
		if (pay) {
			res.json({pay});
			return next();
		}
		throw 'not correct p, y, r in query';
	} catch(e) {
		next(e);
	}
})

export default loanRouter;