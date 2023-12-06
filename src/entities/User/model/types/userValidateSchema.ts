import * as Yup from 'yup';
import { Sex, UserKeys } from 'entities/User/model/types/user';

const phoneSchema = Yup.string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверный формат номера телефона')
    .required('Обязательное поле!');

const emailSchema = Yup.string()
    .email('Неверный формат email')
    .required('Обязательное поле!');

const nicknameSchema = Yup.string()
    .max(30, 'Максимальная длина 30 символов')
    .matches(/^([а-яёА-ЯЁ]+|[a-zA-Z]+)$/, 'Может содержать только буквы и цифры')
    .required('Обязательное поле');

const nameSchema = Yup.string()
    .max(50, 'Максимальная длина 50 символов')
    .matches(/^([а-яёА-ЯЁ]+|[a-zA-Z]+)$/, 'Может содержать только буквы')
    .required('Обязательное поле');

const sernameSchema = Yup.string()
    .max(50, 'Максимальная длина 50 символов')
    .matches(/^([а-яёА-ЯЁ]+|[a-zA-Z]+)$/, 'Может содержать только буквы')
    .required('Обязательное поле');

const sexSchema = Yup.string()
    .required('Обязательное поле')
    .oneOf(Object.values(Sex), 'Неверное значение');

const advantagesSchema = Yup.array()
    .of(
        Yup.string()
            .min(1, 'Минимумальная длина 1 символ')
            .max(50, 'Максимальная длина 50 символов'),
    )
    .min(1, 'Минимум одно ваше достоинство')
    .max(5, 'Максимум семь ваших достоинств');

const radioSchema = Yup.string();

const checkboxSchema = Yup.array().of(Yup.string()).min(1, 'Выберите хотя бы одно значение');

const aboutSchema = Yup.string().max(200, 'Максимальная длина 200 символов');

export const UserValidationSchema = Yup.object().shape({
    [UserKeys.phone]: phoneSchema,
    [UserKeys.email]: emailSchema,
    [UserKeys.nickname]: nicknameSchema,
    [UserKeys.name]: nameSchema,
    [UserKeys.sername]: sernameSchema,
    [UserKeys.sex]: sexSchema,
    [UserKeys.advantages]: advantagesSchema,
    [UserKeys.radio]: radioSchema,
    [UserKeys.checkbox]: checkboxSchema,
    [UserKeys.about]: aboutSchema,
});

export const LoginValidationSchema = Yup.object().shape({
    [UserKeys.phone]: phoneSchema,
    [UserKeys.email]: emailSchema,
});
export const Step1ValidationSchema = Yup.object().shape({
    [UserKeys.nickname]: nicknameSchema,
    [UserKeys.name]: nameSchema,
    [UserKeys.sername]: sernameSchema,
    [UserKeys.sex]: sexSchema,
});
export const Step2ValidationSchema = Yup.object().shape({
    [UserKeys.advantages]: advantagesSchema,
    [UserKeys.radio]: radioSchema,
    [UserKeys.checkbox]: checkboxSchema,
});
export const Step3ValidationSchema = Yup.object().shape({
    [UserKeys.about]: aboutSchema,
});
