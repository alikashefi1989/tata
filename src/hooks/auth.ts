import { useSelector } from "react-redux"
import UserEntity from "../models/user.entity"
import { ReduxStoreModel } from "../models/store"
import { useLayoutEffect, useState } from "react"

const useIsLoggedIn = () => {
    const user: UserEntity | null = useSelector<ReduxStoreModel, ReduxStoreModel['user']>((store: ReduxStoreModel) => store.user)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useLayoutEffect(() => {
        setIsLoggedIn(!(user === null))
    }, [user])

    return isLoggedIn
}

export default useIsLoggedIn