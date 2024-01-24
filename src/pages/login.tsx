import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useCrudService from "../services/crud-service"
import PageWrapper, { Btn, Checkbox, Input, Label, RightWrapper } from "../styles/page-wrapper"
import UserEntity from "../models/user.entity"
import REDUX_ACTION from "../enums/redux-actions.enum"
import { ReduxStoreModel } from "../models/store"

const Login = () => {
    const isChecked: boolean = useSelector<ReduxStoreModel, ReduxStoreModel['auth']>((store: ReduxStoreModel) => store.auth)
    const [form, setForm] = useState<{ user: string; password: string }>({ user: '', password: '' })
    const { auth: authService } = useCrudService<UserEntity, unknown, unknown>()
    const dispatch = useDispatch()

    const getLogin = useCallback(async (data: { user: string; password: string }) => {
        try {
            const res = await authService(data)
            dispatch({ type: REDUX_ACTION.SET_USER, payload: res.data })
        } catch (error) {
            console.error(error)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageWrapper>
            <h1>
                Login Page
            </h1>
            <Label>User</Label>
            <Input
                value={form.user}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, user: event.target.value })}
            />
            <Label>Password</Label>
            <Input
                value={form.password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, password: event.target.value })}

            />
            <Btn
                disabled={!!(form.user === '' || form.password === '')}
                onClick={() => getLogin(form)}
            >
                Login
            </Btn>
            <RightWrapper>
                <Checkbox
                    type='checkbox'
                    checked={isChecked}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: REDUX_ACTION.SET_AUTH, payload: event.target.checked })}
                />
            </RightWrapper>
        </PageWrapper>
    )
}

export default Login
