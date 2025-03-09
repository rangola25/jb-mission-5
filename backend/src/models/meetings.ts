import { 
    AllowNull, 
    BelongsTo, 
    Column, 
    DataType, 
    Default, 
    ForeignKey, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import DevelopmentGroups from "./developmentGroups";

@Table({
    underscored: true,
})
export default class Meetings extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @ForeignKey(() => DevelopmentGroups)
    @AllowNull(false)
    @Column(DataType.UUID)
    developmentGroupsId: string

    @AllowNull(false)
    @Column(DataType.DATE)
    startDate: Date

    @AllowNull(false)
    @Column(DataType.DATE)
    endDate: Date

    @AllowNull(false)
    @Column(DataType.STRING(240))
    description: string

    @AllowNull(false)
    @Column(DataType.STRING)
    room: string

    @BelongsTo(() => DevelopmentGroups)
    developmentGroups: DevelopmentGroups;
}
