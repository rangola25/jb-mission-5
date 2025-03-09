import {
    AllowNull,
    Column,
    DataType,
    Default,
    HasMany,
    Model,
    PrimaryKey,
    Table
} from "sequelize-typescript";
import Meetings from "./meetings";

@Table({
    underscored: true,
})
export default class DevelopmentGroups extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING(64))
    name: string

    @HasMany(() => Meetings)
    meetings: Meetings[];
}
