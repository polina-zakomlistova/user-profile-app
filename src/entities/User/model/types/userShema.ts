export enum UserActionTypes {
    FETCH__USER = 'FETCH_USER',
    FETCH__USER_SUCCESS = 'FETCH__USER_SUCCESS',
    FETCH__USER_ERROR = 'FETCH__USER_ERROR',
}

export enum Sex {
    man = 'man',
    woman = 'woman',
}

type CheckboxOption = {
    value: boolean;
    label: string;
};
export interface UserSchema {
    id: string;
    name: string;
    nickname: string;
    sername: string;
    phone: string;
    email: string;
    sex: Sex;
    advantages: string[];
    radio: number;
    checkbox: CheckboxOption[];
    about: string;
}

export interface UserStateSchema {
    user: UserSchema;
    loading: boolean;
    error: null | string;
}
