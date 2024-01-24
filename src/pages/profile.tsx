import { useSelector } from "react-redux"
import { ReduxStoreModel } from "../models/store"
import PageWrapper, { Label } from "../styles/page-wrapper"
import UserEntity from "../models/user.entity"

const Profile = () => {
    const user: UserEntity | null = useSelector<ReduxStoreModel, ReduxStoreModel['user']>((store: ReduxStoreModel) => store.user)
    return (
        <PageWrapper>
            <h1>
                Profile Page
            </h1>
            <Label>Name:</Label>
            <Label info>{user?.name || ''}</Label>
            <Label>Username:</Label>
            <Label info>{user?.username || ''}</Label>
            <Label>Email:</Label>
            <Label info>{user?.email || ''}</Label>
            <Label>Phone:</Label>
            <Label info>{user?.phone || ''}</Label>
            <Label>Website:</Label>
            <Label info>{user?.website || ''}</Label>
        </PageWrapper>
    )
}

export default Profile
