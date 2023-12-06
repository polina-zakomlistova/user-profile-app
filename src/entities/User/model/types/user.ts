export enum Sex {
    man = 'man',
    woman = 'woman',
}

export enum UserKeys{
    id = 'id',
    name = 'name',
    nickname = 'nickname',
    sername = 'sername',
    phone = 'phone',
    email = 'email',
    sex = 'sex',
    advantages = 'advantages',
    radio = 'level',
    checkbox = 'skills',
    about = 'about',
}

export interface User {
    [UserKeys.id]?: string;
    [UserKeys.name]?: string;
    [UserKeys.nickname]?: string;
    [UserKeys.sername]?: string;
    [UserKeys.phone]?: string;
    [UserKeys.email]?: string;
    [UserKeys.sex]?: Sex;
    [UserKeys.advantages]?: string[];
    [UserKeys.radio]?: string;
    [UserKeys.checkbox]?: string[];
    [UserKeys.about]?: string;
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
    { name: 'junior', label: 'junior' },
    { name: 'middle', label: 'middle' },
    { name: 'senior', label: 'senior' },
];

export interface UserSchema {
    data?: User;
    form?: User;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    stepForm: number;
}
