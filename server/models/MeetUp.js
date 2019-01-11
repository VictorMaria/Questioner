class MeetUp {
	constructor () {
		this.meetUps = []
		this.postedMeetUps = []
	}
	create (data) {
		const meetUp = {
			id: this.meetUps.length + 1,
			createdOn: new Date(),
			location: data.location,
			images: data.images,
			topic: data.topic,
			happeningOn: data.happeningOn,
			tags: data.tags
	}
	const postedMeetUp = {
			id: meetUp.id,
			location: meetUp.location,
			images: meetUp.images,
			topic: meetUp.topic,
			happeningOn: meetUp.happeningOn,
			tags: meetUp.tags
			}
	this.meetUps.push(meetUp)
	this.postedMeetUps.push(postedMeetUp)
	return postedMeetUp;
  }
  getMeetUps () {
	return this.postedMeetUps;
  }
  
  getMeetUp (id) {
	const meetUp = this.meetUps.find((meetup) => meetup.id === parseInt(id, 10))
	if(meetUp){
	return {
			id: meetUp.id,
			location: meetUp.location,
			images: meetUp.images,
			topic: meetUp.topic,
			happeningOn: meetUp.happeningOn,
			tags: meetUp.tags
			}
			}
  }
  getUpcomingMeetUps () {
	const upcomingMeetUps = this.postedMeetUps.sort((first, second) => {
	const firstHappeningOn = parseInt(first.happeningOn, 10)
	const secondHappeningOn = parseInt(second.happeningOn, 10)
	return firstHappeningOn - secondHappeningOn
	})
  }
  postRsvp (id, data) {
	const meetUp = this.meetUps.find((meetup) => meetup.id === parseInt(id, 10))
	return {
			meetup: meetUp.id,
			topic: meetUp.topic,
			status: data.status  	
		}
  }
}
export default new MeetUp;