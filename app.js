import express from 'express';
//import MeetUp from './src/controllers/MeetUp';
//import User from './src/controllers/User';

import Home from './server/routes/Home';
import MeetUp from './server/routes/MeetUp';
import Question from './server/routes/Question';
import User from './server/routes/User';


const app = express();
app.use(express.json());



app.use('/', Home);
app.use('/api/v1', MeetUp);
app.use('/api/v1', Question);
app.use('/api/v1', User);






const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Questioner listens on port ${port}`))