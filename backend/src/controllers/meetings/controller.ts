import { NextFunction, Request, Response } from "express";
import Meetings from "../../models/meetings";
import DevelopmentGroups from "../../models/developmentGroups";

export async function getAllMeetings(req: Request, res: Response, next: NextFunction) {
    try {
        const allMeetings = await Meetings.findAll({
            include: [ DevelopmentGroups ]
        });
        res.json(allMeetings);
    } catch (e) {
        next(e)
    }
}

export async function getGroupMeetings(req: Request, res: Response, next: NextFunction) {
    try {
        const groupName = req.params.name;

        const developmentGroups = await DevelopmentGroups.findOne({
            where: { name: groupName }, 
            attributes: ['id'] 
        });

        const developmentGroupsId = developmentGroups.id

        const group = await DevelopmentGroups.findByPk(developmentGroupsId, {
            include: [ {
                model: Meetings,
                include: [ DevelopmentGroups ]
         } ]
        })
        res.json(group.meetings)
    } catch (e) {
        next(e)
    }
}

export async function NewMeeting(req: Request, res: Response, next: NextFunction) {
    try {
        const groupName = req.body.name;

        const developmentGroups = await DevelopmentGroups.findOne({
            where: { name: groupName }, 
            attributes: ['id'] 
        });
        
        const developmentGroupsId = developmentGroups.id;

        const meeting = await Meetings.create({ ...req.body, developmentGroupsId: developmentGroupsId })
        await meeting.reload({
            include: [ DevelopmentGroups ],
            },
        )
        res.json(meeting)
    } catch (e) {
        next(e)
    }
}