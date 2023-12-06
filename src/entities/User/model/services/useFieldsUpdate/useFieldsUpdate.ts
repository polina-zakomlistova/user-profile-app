import { useDispatch } from 'react-redux';
import { IUpdateFieldsAction, userActions } from '../../slice/userSlice';

export const useFieldsUpdate = () => {
    const dispatch = useDispatch();

    const update = (fields: IUpdateFieldsAction) => {
        dispatch(
            userActions.updateFields(fields),
        );
    };

    return update;
};
