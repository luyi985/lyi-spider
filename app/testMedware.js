import express from "express";

const testRouter = express.Router();

testRouter.use((req, res, next) => {
	next();
})

testRouter.get('/:name', (req, res) => {
	console.log("send back response")
	res.send("test medware...")
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

export default testRouter;