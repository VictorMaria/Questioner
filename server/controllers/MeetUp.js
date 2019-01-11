import MeetUpModel from '../models/MeetUp';
import Joi from 'joi'


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
	getMeetUps (req, res) {
		const meetUps = MeetUpModel.getMeetUps()
		res.writeHead(200, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 200, data: meetUps}))
	},
	getMeetUp (req, res) {
		const meetUp = MeetUpModel.getMeetUp(req.params.id)
		if(!meetUp){
			res.writeHead(404, {'Content-Type': 'Application/json'})
			res.end(JSON.stringify({status: 404, error: 'Meet Up not found'}))
		} else{
		res.writeHead(200, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 200, data: [meetUp]}));
		}
	},
	getUpcomingMeetUps (req, res) {
		const upcomingMeetUps = MeetUpModel.getUpcomingMeetUps()
		res.writeHead(200, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 200, data: upcomingMeetUps}))
	},
	postRsvp (req, res) {
			const meetUp = MeetUpModel.getMeetUp(req.params.id)
			if(!meetUp){
				res.writeHead(404, {'Content-Type': 'Application/json'})
				res.end(JSON.stringify({status: 404, error: 'Meet-up not found, cannot respond'}))
			} else {
				const rsvp = MeetUpModel.postRsvp(req.params.id, req.body) 
				res.writeHead(200, {'Content-Type': 'Application/json'})
				res.end(JSON.stringify({status: 200, data: [rsvp]}))
			}
	}
}


export default MeetUp;