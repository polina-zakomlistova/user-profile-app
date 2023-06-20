import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';

import Input, { ThemeInput } from 'shared/ui/Input/Input';
import ButtonLink, { ThemeButtonLink } from 'shared/ui/ButtonLink/ButtonLink';

import { useSelector } from 'react-redux';

import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';

const SignupSchema = object().shape({
    phone: string()
        .matches(
            /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
            'Неверный формат номера телефона'
        )
        .required('Обязательное поле'),

    email: string()
        .email('Неверный формат email')
        .required('Обязательное поле'),
});

const MainPage = () => {
    const user = useSelector(getUserValue);
    const { phone, email } = user;
    const updateField = useFieldUpdate();
    const initialValues = {
        email,
        phone,
    };

    return (
        <div className="container">
            <h2 className="visually-hidden">main</h2>

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
                                type="phone"
                                name="phone"
                                mask="+7 999 999-99-99"
                                maskChar="_"
                                placeholder="+7 999 999-99-99"
                                label="Номер телефона"
                                theme={ThemeInput.COLOR}
                                onChange={(e) =>
                                    updateField('phone', e.target.value)
                                }
                                value={phone}
                            />
                        </div>
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                        <div className="input-wrapper">
                            <Input
                                type="email"
                                name="email"
                                placeholder="tim.jennings@example.com"
                                label="Email"
                                theme={ThemeInput.COLOR}
                                onChange={(e) =>
                                    updateField('email', e.target.value)
                                }
                                value={email}
                            />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>
                    </Form>
                )}
            </Formik>

            <ButtonLink
                id="button-start"
                to={'/step1'}
                theme={ThemeButtonLink.COLOR}
            >
                Начать
            </ButtonLink>
        </div>
    );
};

export default MainPage;
