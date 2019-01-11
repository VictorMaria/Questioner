import QuestionModel from '../models/Question';
import Joi from 'joi';


const Question = {
	postQuestion (req, res) {
		const schema = Joi.object({
			createdBy: Joi.number().integer().required(),
			meetup: Joi.number().integer().required(),
			title: Joi.string().required(),
			body: Joi.string().required()
			})
		const  result = Joi.validate(req.body, schema);
		if (result.error){
			res.writeHead(400, {'Content-Type': 'Application/json'})
			res.end(JSON.stringify({status: 400, error: result.error.details[0].message}))
		} else {
		const question = QuestionModel.postQuestion(req.body)
		res.writeHead(201, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 201, data: [question]}))
		}
	},
	getQuestion (req, res) {
		const question = QuestionModel.getQuestion(req.params.id)
		if (!question) {
			res.writeHead(404, {'Content-Type': 'Application/json'})
			res.end(JSON.stringify({status: 404, error: 'Question not found'}))
		}
		else {
		res.writeHead(200, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 200, data: [question]}))
		}
	},
	getQuestions(req, res){
		const questions = QuestionModel.getQuestions()
		res.writeHead(200, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 200, data: questions}))
	},
	upvote(req, res){
		const question = QuestionModel.getQuestion(req.params.id)
		if (!question){
		res.writeHead(404, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 404, error: 'Question not found, action not recorded'}))
		} else {
		const upvote = QuestionModel.upvote(req.params.id)
		res.writeHead(200, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 200, data: [upvote]}))
	}
},
	downvote(req, res){
		const question = QuestionModel.getQuestion(req.params.id)
		if (!question){
		res.writeHead(404, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 404, error: 'Question not found, action not recorded'}))
		} else {
		const downvote = QuestionModel.downvote(req.params.id)
		res.writeHead(200, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 200, data: [downvote]}))
	}
}
}
export default Question;