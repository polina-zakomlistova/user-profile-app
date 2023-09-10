import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Input, { ThemeInput } from 'shared/ui/Input/Input';
import ButtonLink, { ThemeButtonLink } from 'shared/ui/ButtonLink/ButtonLink';

import { useSelector } from 'react-redux';

import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';
import { UserSchema } from 'entities/User';

const SignupSchema = Yup.object().shape({
    phone: Yup.string()
        //.matches(
        //     /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
        //     'Неверный формат номера телефона'
        // )
        .required('Обязательное поле!'),

    email: Yup.string()
        .email('Неверный формат email')
        .required('Обязательное поле!'),
});

const MainPage = () => {
    const user = useSelector(getUserValue);
    const { phone, email } = user;

    const updateField = useFieldUpdate();
    const initialValues = { email, phone };

    return (
        <div className="container">
            <h2 className="visually-hidden">main</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    for (const [key, value] of Object.entries(values)) {
                        updateField(key as keyof UserSchema, value);
                    }
                }}
            >
                {({ errors, touched, submitForm }) => (
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
                            />
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </div>
                        <ButtonLink
                            name="start"
                            to={'/step1'}
                            onClick={() => submitForm()}
                            theme={ThemeButtonLink.COLOR}
                        >
                            Начать
                        </ButtonLink>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MainPage;
