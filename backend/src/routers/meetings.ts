import { Router } from "express";
import { getAllMeetings, getGroupMeetings, NewMeeting } from "../controllers/meetings/controller";

const meetingsRouter = Router()

meetingsRouter.get('/', getAllMeetings)
meetingsRouter.get('/:name', getGroupMeetings)
meetingsRouter.post('/new', NewMeeting)
export default meetingsRouter