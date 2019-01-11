import UserModel from '../models/User';
import Joi from 'joi';


const User = {
		signUp(req, res) {
			const schema = Joi.object({
				firstname: Joi.string().required(),
				lastname: Joi.string().required(),
				othername: Joi.string().required(),
				email: Joi.string().email().required(),
				phonenumber: Joi.string().required(),
				username: Joi.string().required(),
				isAdmin: Joi.string().required()
			})
			const  result = Joi.validate(req.body, schema);
		if (result.error){
			res.writeHead(400, {'Content-Type': 'Application/json'})
			res.end(JSON.stringify({status: 400, error: result.error.details[0].message}))	
		} else{
	const user = UserModel.signUp(req.body)
	res.writeHead(201, {'Content-Type': 'Application/json'})
	res.end(JSON.stringify({status: 201, data: [user]}))
	}
},
	getUser(req, res){
	const user = UserModel.getUser(req.params.id)
	if(!user){
	res.writeHead(404, {'Content-Type': 'Application/json'})
	res.end(JSON.stringify({status: 404, error: 'User does not exist'}))
	}
	else{
		res.writeHead(200, {'Content-Type': 'Application/json'})
		res.end(JSON.stringify({status: 200, data: [user]}))
	}
},
	getUsers(req, res){
	const users = UserModel.getUsers()
	res.writeHead(200, {'Content-Type': 'Application/json'})
 	res.end(JSON.stringify({status: 200, data: users}))
	}
}

export default User;