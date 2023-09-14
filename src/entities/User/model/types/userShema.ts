export enum UserActionTypes {
    FETCH__USER = 'FETCH_USER',
    FETCH__USER_SUCCESS = 'FETCH__USER_SUCCESS',
    FETCH__USER_ERROR = 'FETCH__USER_ERROR',
}

export enum Sex {
    man = 'man',
    woman = 'woman',
}

interface CheckboxOpinionType {
    name: string;
    label: string;
    checked: boolean;
}

export type CheckboxType = CheckboxOpinionType[];

interface RadioOpinionType {
    name: string;
    label: string;
    picked: boolean;
}

export type RadioType = RadioOpinionType[];

export interface UserSchema {
    id: string;
    name: string;
    nickname: string;
    sername: string;
    phone: string;
    email: string;
    sex: Sex;
    advantages: string[];
    radio: RadioType;
    checkbox: CheckboxType;
    about: string;
}

export interface UserStateSchema {
    user: UserSchema;
    loading: boolean;
    error: null | string;
}
