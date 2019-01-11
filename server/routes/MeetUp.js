import express from 'express';
import MeetUp from '../controllers/MeetUp';




const router = express.Router();


router.post('/meetups', MeetUp.create)
.get('/meetups', MeetUp.getMeetUps)
.get('/meetups/:id', MeetUp.getMeetUp)
.get('/meetups/upcoming/', MeetUp.getUpcomingMeetUps)
.post('/meetups/:id/rsvp', MeetUp.postRsvp)

export default router;