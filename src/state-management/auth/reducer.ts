import REDUX_ACTION from "../../enums/redux-actions.enum";
import { ReduxStoreModel } from "../../models/store";
import AuthActions from "./action-model";

export function reducer(prevState: ReduxStoreModel['auth'], action: AuthActions): ReduxStoreModel['auth'] {

    switch (action.type) {
        case REDUX_ACTION.SET_AUTH:
            return action.payload;
        default:
            return prevState ? prevState : false
    }
}