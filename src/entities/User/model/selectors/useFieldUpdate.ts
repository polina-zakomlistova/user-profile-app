import { useDispatch } from 'react-redux';
import { userActions } from '../slice/userSlice';
import { UserSchema } from '../types/userShema';

const useUpdateField = () => {
    const dispatch = useDispatch();

    const update = (
        field: keyof UserSchema,
        value: UserSchema[keyof UserSchema]
    ) => {
        dispatch(
            userActions.updateField({
                updates: {
                    [field]: value,
                },
            })
        );
    };

    return update;
};

export default useUpdateField;
