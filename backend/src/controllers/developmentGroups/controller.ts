import { NextFunction, Request, Response } from "express";
import DevelopmentGroups from "../../models/developmentGroups";


export async function getDevelopmentGroups(req: Request, res: Response, next: NextFunction) {
    try {
        const developmentGroups = await DevelopmentGroups.findAll()
        res.json(developmentGroups)
    } catch (e) {
        next(e)
    }
}

export async function findGroupById(req: Request, res: Response, next: NextFunction) {
    try {
        const search = req.params.id;

        const author = await DevelopmentGroups.findOne({
            where: { id: search }
        })
        res.json(author)
    } catch (e) {
        next(e)
    }
}