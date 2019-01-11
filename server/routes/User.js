import express from 'express';
import User from '../controllers/User';



const router = express.Router();


router.post('/users', User.signUp)
.get('/users/:id', User.getUser)
.get('/users', User.getUsers)


export default router;