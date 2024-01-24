import { Action } from 'redux';
import REDUX_ACTION from '../../enums/redux-actions.enum';
import UserEntity from '../../models/user.entity';

interface UserActions extends Action<REDUX_ACTION> {
    payload: UserEntity | null;
}

export default UserActions