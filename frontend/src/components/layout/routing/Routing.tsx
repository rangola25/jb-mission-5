import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Home from "../../ourMeetings/home/Home";
import Meetings from "../../ourMeetings/meetings/Meetings";
import NewMeeting from "../../ourMeetings/new/New";

export default function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>} />
            {/* <Route path="/" element={<Profile />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/meetings/new" element={<NewMeeting />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )   
}
