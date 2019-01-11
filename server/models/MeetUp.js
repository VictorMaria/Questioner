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