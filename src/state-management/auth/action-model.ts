import { Action } from 'redux';
import REDUX_ACTION from '../../enums/redux-actions.enum';

interface AuthActions extends Action<REDUX_ACTION> {
    payload: boolean;
}

export default AuthActions