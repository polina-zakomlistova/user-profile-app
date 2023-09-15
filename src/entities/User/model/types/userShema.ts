export enum UserActionTypes {
    FETCH__USER = 'FETCH_USER',
    FETCH__USER_SUCCESS = 'FETCH__USER_SUCCESS',
    FETCH__USER_ERROR = 'FETCH__USER_ERROR',
}

export enum Sex {
    man = 'man',
    woman = 'woman',
}

export interface UserSchema {
    id: string;
    name: string;
    nickname: string;
    sername: string;
    phone: string;
    email: string;
    sex: Sex;
    advantages: string[];
    radio: string;
    checkbox: string[];
    about: string;
}

export interface UserStateSchema {
    user: UserSchema;
    loading: boolean;
    error: null | string;
}

interface ICheckboxType {
    name: string;
    label: string;
}

interface IRadioType {
    name: string;
    label: string;
}

export type IRadioListType = IRadioType[];
export type ICheckboxListType = ICheckboxType[];

export const itSkills: ICheckboxListType = [
    { name: 'frontend', label: 'Frontend' },
    { name: 'backend', label: 'Backend' },
];

export const itRadio: IRadioListType = [
    { name: '1', label: '1' },
    { name: '2', label: '2' },
    { name: '3', label: '3' },
];
