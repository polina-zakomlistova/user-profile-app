import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import SelectField from 'shared/ui/Select/Select';
import Input from 'shared/ui/Input/Input';
import { Sex, UserSchema } from 'entities/User/model/types/userShema';

import { useSelector } from 'react-redux';

import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { useNavigate } from 'react-router-dom';

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

const UserPage = () => {
    const user = useSelector(getUserValue);
    const { nickname, name, sername, sex } = user;
    const updateField = useFieldUpdate();
    const initialValues = {
        nickname,
        name,
        sername,
        sex,
    };

    const navigate = useNavigate();

    return (
        <div className="container">
            <h2 className="visually-hidden">Step 1</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    for (const [key, value] of Object.entries(values)) {
                        updateField(key as keyof UserSchema, value);
                    }
                }}
            >
                {({ errors, touched, submitForm, isValid, values }) => (
                    <Form className="form">
                        <div className={classNames('input-wrapper', {}, [])}>
                            <Input
                                name="nickname"
                                label="Nickname"
                                onBlur={() =>
                                    updateField('nickname', values.nickname)
                                }
                            />
                            {errors.nickname && touched.nickname ? (
                                <div
                                    className={classNames('error-text', {}, [])}
                                >
                                    {errors.nickname}
                                </div>
                            ) : null}
                        </div>
                        <div className={classNames('input-wrapper', {}, [])}>
                            <Input
                                name="name"
                                label="Name"
                                onBlur={() => updateField('name', values.name)}
                            />
                            {errors.name && touched.name ? (
                                <div
                                    className={classNames('error-text', {}, [])}
                                >
                                    {errors.name}
                                </div>
                            ) : null}
                        </div>
                        <div className={classNames('input-wrapper', {}, [])}>
                            <Input
                                name="sername"
                                label="SerName"
                                onBlur={() =>
                                    updateField('sername', values.sername)
                                }
                            />
                            {errors.sername && touched.sername ? (
                                <div
                                    className={classNames('error-text', {}, [])}
                                >
                                    {errors.sername}
                                </div>
                            ) : null}
                        </div>
                        <div className={classNames('input-wrapper', {}, [])}>
                            <SelectField
                                name="sex"
                                label="Sex"
                                onBlur={() => updateField('sex', values.sex)}
                                options={sexOptions}
                            />
                        </div>

                        {!isValid ? (
                            <div className={classNames('error-text', {}, [])}>
                                Необходимо заполнить все поля
                            </div>
                        ) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserPage;
