import React from 'react';
import { Formik, Form, Field } from 'formik';
import ButtonLink, { ThemeButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { object, string, InferType, mixed } from 'yup';
import SelectField from 'shared/ui/Select/Select';
import Input from 'shared/ui/Input/Input';
import { Sex } from 'entities/User/model/types/userShema';
import { UserSchema } from 'entities/User';

import { useSelector } from 'react-redux';

import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';

const SignupSchema = object().shape({
    nickname: string()
        .max(30, 'Максимальная длина 30 символов')
        .matches(/^[a-zA-Z0-9]+$/, 'Может содержать только буквы и цифры')
        .required('Обязательное поле'),
    name: string()
        .max(50, 'Максимальная длина 50 символов')
        .matches(/^[a-zA-Z]+$/, 'Может содержать только буквы')
        .required('Обязательное поле'),
    sername: string()
        .max(50, 'Максимальная длина 50 символов')
        .matches(/^[a-zA-Z]+$/, 'Может содержать только буквы')
        .required('Обязательное поле'),
    sex: string()
        .required('Обязательное поле')
        .oneOf(Object.values(Sex), 'Неверное значение'),
});

const sexOptions = Object.values(Sex).map((value) => ({
    value,
    label: value,
    id: `field-sex-option-${value}`,
}));

const CreateStep1Page = () => {
    const user = useSelector(getUserValue);
    const { nickname, name, sername, sex } = user;
    const updateField = useFieldUpdate();
    const initialValues = {
        nickname,
        name,
        sername,
        sex,
    };

    return (
        <div className="container">
            <h2 className="visually-hidden">Step 1</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="form">
                        <div className="input-wrapper">
                            <Input
                                name="nickname"
                                label="Nickname"
                                onChange={(e) =>
                                    updateField('nickname', e.target.value)
                                }
                                value={nickname}
                            />
                            {errors.nickname && touched.nickname ? (
                                <div>{errors.nickname}</div>
                            ) : null}
                        </div>
                        <div className="input-wrapper">
                            <Input
                                name="name"
                                label="Name"
                                onChange={(e) =>
                                    updateField('name', e.target.value)
                                }
                                value={name}
                            />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                        </div>
                        <div className="input-wrapper">
                            <Input
                                name="sername"
                                label="SerName"
                                onChange={(e) =>
                                    updateField('sername', e.target.value)
                                }
                                value={sername}
                            />
                            {errors.sername && touched.sername ? (
                                <div>{errors.sername}</div>
                            ) : null}
                        </div>
                        <SelectField
                            name="sex"
                            label="Sex"
                            options={sexOptions}
                        />
                    </Form>
                )}
            </Formik>
            <div className="btn-wrapper">
                <ButtonLink
                    to={'/'}
                    id="button-back"
                    theme={ThemeButtonLink.COLOR}
                >
                    Назад
                </ButtonLink>
                <ButtonLink to={'/step2'} id="button-next">
                    Далее
                </ButtonLink>
            </div>
        </div>
    );
};

export default CreateStep1Page;
