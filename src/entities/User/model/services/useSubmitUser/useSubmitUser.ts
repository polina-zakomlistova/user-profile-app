import { useDispatch } from 'react-redux';
import { userActions } from '../../slice/userSlice';

export const useSubmitUser = () => {
    const dispatch = useDispatch();

    const submit = () => dispatch(userActions.submitForm());

    return submit;
};
