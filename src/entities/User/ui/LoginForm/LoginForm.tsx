import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input, { ThemeInput } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';
import { UserSchema } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
    phone: Yup.string()
        .matches(
            /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
            'Неверный формат номера телефона'
        )
        .required('Обязательное поле!'),

    email: Yup.string()
        .email('Неверный формат email')
        .required('Обязательное поле!'),
});

const LoginForm = () => {
    const user = useSelector(getUserValue);
    const { phone, email } = user;

    const updateField = useFieldUpdate();
    const initialValues = { email, phone };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                for (const [key, value] of Object.entries(values)) {
                    updateField(key as keyof UserSchema, value);
                }
            }}
        >
            {({
                errors,
                touched,
                submitForm,
                isValid,
                isInitialValid,
                values,
            }) => (
                <Form className="form">
                    <div className={classNames('input-wrapper', {}, [])}>
                        <Input
                            type="phone"
                            name="phone"
                            mask="+7 (999) 999-99-99"
                            maskChar="_"
                            placeholder="+7 (999) 999-99-99"
                            label="Номер телефона"
                            theme={ThemeInput.COLOR}
                            onBlur={() => updateField('phone', values.phone)}
                        />
                        {errors.phone && touched.phone ? (
                            <div className={classNames('error-text', {}, [])}>
                                {errors.phone}
                            </div>
                        ) : null}
                    </div>

                    <div className={classNames('input-wrapper', {}, [])}>
                        <Input
                            type="email"
                            name="email"
                            placeholder="tim.jennings@example.com"
                            label="Email"
                            theme={ThemeInput.COLOR}
                            onBlur={() => updateField('email', values.email)}
                        />
                        {errors.email && touched.email ? (
                            <div className={classNames('error-text', {}, [])}>
                                {errors.email}
                            </div>
                        ) : null}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
