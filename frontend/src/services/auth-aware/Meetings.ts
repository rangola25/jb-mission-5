import axios from "axios";
import Draft from "../../models/meeting/Draft";
import Meeting from "../../models/meeting/Meeting";

class Meetings {
    async getAllMeetings(): Promise<Meeting[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/meetings`)
        return response.data
    }

    async getGroupMeetings(name: string): Promise<Meeting[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/${name}`)
        return response.data
    }

    async new(draft: Draft): Promise<Meeting> {
        const response = await axios.post<Meeting>(`${import.meta.env.VITE_REST_SERVER_URL}/meetings/new`, draft)
        return response.data
    }

    // async remove(code: string): Promise<boolean> {
    //     const response = await axios.delete<boolean>(`${import.meta.env.VITE_REST_SERVER_URL}/gifts/${code}`)
    //     const isDeleted = response.data
    //     return isDeleted
    // }
}

const meetingsService = new Meetings()
export default meetingsService