import UserEntity from "./user.entity";

export interface ReduxStoreModel {
    user: UserEntity | null
    auth : boolean
}