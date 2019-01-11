const MeetUp = {
	create (req, res) {
		const schema = Joi.object({
			topic: Joi.string().required(),
			location: Joi.string().required(),
			images: Joi.array(),
			topic: Joi.string().required(),
			happeningOn: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/).required(),
			tags: Joi.array().required()
		})
		const  result = Joi.validate(req.body, schema);
		if (result.error){
			res.writeHead(400, {'Content-Type': 'Application/json'})
			res.end(JSON.stringify({status: 400, error: result.error.details[0].message}))
		} else {
			const meetUp = MeetUpModel.create(req.body)
			res.writeHead(201, {'Content-Type': 'Application/json'})
			res.end(JSON.stringify({status: 201, data: [meetUp]}))
		}
	},