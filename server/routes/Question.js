import express from 'express';
import Question from '../controllers/Question';



const router = express.Router();


router.get('/', (req, res) => {
	return res.send('Welcome to Questioner')
});
router.post('/questions', Question.postQuestion)
.get('/questions', Question.getQuestions)
.get('/questions/:id', Question.getQuestion)
.patch('/questions/:id/upvote', Question.upvote)
.patch('/questions/:id/downvote', Question.downvote)

export default router;