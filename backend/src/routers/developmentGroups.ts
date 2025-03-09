import { Router } from "express";
import { findGroupById, getDevelopmentGroups } from "../controllers/developmentGroups/controller";


const developmentGroupsRouter = Router()

developmentGroupsRouter.get('/', getDevelopmentGroups)
developmentGroupsRouter.get('/:id', findGroupById)
export default developmentGroupsRouter