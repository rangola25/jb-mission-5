import Draft from "./Draft";

export default interface Meeting extends Draft {
    id: string,
    createdAt: string,
    updatedAt: string
}