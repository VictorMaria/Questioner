

class Question {
	constructor(){
	this.questions = []
	this.postedQuestions = []
	this.postedQuestionsWithId = []
	}
	postQuestion(data){
		const question = {
			id: this.questions.length + 1,
			createdOn: new Date(),
			createdBy: data.createdBy,
			meetup: data.meetup,
			title: data.title,
			body: data.body,
			votes: 0
		} 
		const postedQuestion = {
			user: question.createdBy, 
			meetup: question.meetup, 
			title: question.title, 
			body: question.body
			}
		const postedQuestionWithId = {
			id: question.id,
			user: question.createdBy,
			meetup: question.meetup,
			title: question.title,
			body: question.body,
			votes: 0
		}	
		this.questions.push(question)
		this.postedQuestions.push(postedQuestion)
		this.postedQuestionsWithId.push(postedQuestionWithId)
		return postedQuestion
	}
	getQuestion(id){
		const question = this.questions.find(q => q.id === parseInt(id, 10))
		if (question){
		return {
			user: question.createdBy, 
			meetup: question.meetup, 
			title: question.title, 
			body: question.body
			}
	       }
	    }
	 getQuestions () {
	 	return this.postedQuestionsWithId
	 }   
	 
	upvote(id){
		const question = this.questions.find(q => q.id === parseInt(id, 10))
		if(!hasDownvoted && voteCount <= 0){
		question.votes += 1
		voteCount +=1
		hasUpvoted = true 
		}
		return {
			meetup: question.meetup, 
			title: question.title, 
			body: question.body, 
			votes: question.votes
			}
	}
	downvote(id){
		const question = this.questions.find(q => q.id === parseInt(id, 10))
		if(!hasUpvoted && voteCount <= 0 && question.votes > 0){
		question.votes -= 1
		voteCount += 1
		hasDownvoted = true 
		}
		return {
			meetup: question.meetup, 
			title: question.title, 
			body: question.body, 
			votes: question.votes
			}
	}
}

let voteCount = 0
let hasUpvoted = false
let hasDownvoted = false


export default new Question;




