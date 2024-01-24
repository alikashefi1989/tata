import { useSelector } from "react-redux"
import { ReduxStoreModel } from "../models/store"
import PageWrapper, { WarnningBox } from "../styles/page-wrapper"

const Home = () => {
    const auth: boolean = useSelector<ReduxStoreModel, ReduxStoreModel['auth']>((store: ReduxStoreModel) => store.auth)

    return (
        <PageWrapper>
            <h1>
                Home Page
            </h1>
            <WarnningBox auth={auth}>
                {auth ? "You've been authorized" : "You've not been authorized"}
            </WarnningBox>
        </PageWrapper>
    )
}

export default Home
