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

interface ICheckboxRadioType {
    name: string;
    label: string;
}

export type ICheckboxRadioListType = ICheckboxRadioType[];

export const itSkills: ICheckboxRadioListType = [
    { name: 'frontend', label: 'Frontend' },
    { name: 'backend', label: 'Backend' },
];

export const itRadio: ICheckboxRadioListType = [
    { name: 'junior', label: 'Junior' },
    { name: 'middle', label: 'Middle' },
    { name: 'senior', label: 'Senior' },
];

export interface UserSchema {
    data?: User;
    form?: User;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    stepForm: number;
}
