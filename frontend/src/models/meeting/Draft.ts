import Group from "../group/Group";

export default interface Draft extends Group {
    developmentGroupsId: string,
    startDate: Date,
    endDate: Date,
    description: string,
    room: string
}