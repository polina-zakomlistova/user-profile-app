import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sex, UserSchema } from '../types/userShema';

const initialState: UserSchema = {
    id: '',
    name: '',
    nickname: '',
    sername: '',
    phone: '',
    email: '',
    sex: Sex.man,
    advantages: [],
    radio: 0,
    checkbox: [],
    about: '',
};

interface IChangeAction {
    updates: Partial<UserSchema>;
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateField: (state, action: PayloadAction<IChangeAction>) => {
            const { updates } = action.payload;
            Object.assign(state, updates);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
