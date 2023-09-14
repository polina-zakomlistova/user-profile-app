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
    radio: [
        { name: '1', label: '1', picked: true },
        { name: '2', label: '2', picked: false },
        { name: '3', label: '3', picked: false },
    ],
    checkbox: [
        { name: 'frontend', label: 'Frontend', checked: true },
        { name: 'backend', label: 'Backend', checked: false },
    ],
    about: '',
};

export interface IChangeAction {
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
