import axios from "axios";
import Group from "../../models/group/Group";

class Groups {
    async getAllGroups(): Promise<Group[]> {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/group`)
        return response.data
    }

    async getGroupById(groupId: string) {
        const response = await axios.get(`${import.meta.env.VITE_REST_SERVER_URL}/group/${groupId}`)
        return response.data
    }
}

const categoriesService = new Groups()
export default categoriesService