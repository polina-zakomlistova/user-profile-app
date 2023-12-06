import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sex, User, UserSchema } from '../types/user';

const initialData: User = {
    id: '',
    name: '',
    nickname: '',
    sername: '',
    phone: '',
    email: '',
    sex: undefined,
    advantages: [],
    level: '',
    skills: [],
    about: '',
};

const initialState: UserSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: initialData,
    form: initialData,
    stepForm: 0,
};

export type IUpdateFieldsAction = User;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFields: (state, action: PayloadAction<IUpdateFieldsAction>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        submitForm: (state) => {
            state.data = state.form;
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.stepForm = action.payload;
        },

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
