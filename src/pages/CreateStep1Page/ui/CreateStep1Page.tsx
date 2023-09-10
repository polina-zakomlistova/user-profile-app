import { Formik, Form } from 'formik';
import ButtonLink, { ThemeButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { object, string } from 'yup';
import SelectField from 'shared/ui/Select/Select';
import Input from 'shared/ui/Input/Input';
import { Sex, UserSchema } from 'entities/User/model/types/userShema';

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
                    for (const [key, value] of Object.entries(values)) {
                        updateField(key as keyof UserSchema, value);
                    }
                }}
            >
                {({ errors, touched, submitForm }) => (
                    <Form className="form">
                        <div className="input-wrapper">
                            <Input name="nickname" label="Nickname" />
                            {errors.nickname && touched.nickname ? (
                                <div>{errors.nickname}</div>
                            ) : null}
                        </div>
                        <div className="input-wrapper">
                            <Input name="name" label="Name" />
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                        </div>
                        <div className="input-wrapper">
                            <Input name="sername" label="SerName" />
                            {errors.sername && touched.sername ? (
                                <div>{errors.sername}</div>
                            ) : null}
                        </div>
                        <SelectField
                            name="sex"
                            label="Sex"
                            options={sexOptions}
                        />
                        <div className="btn-wrapper">
                            <ButtonLink
                                to={'/'}
                                name="back"
                                theme={ThemeButtonLink.COLOR}
                                onClick={() => submitForm()}
                            >
                                Назад
                            </ButtonLink>
                            <ButtonLink
                                to={'/step2'}
                                name="next"
                                onClick={() => submitForm()}
                            >
                                Далее
                            </ButtonLink>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateStep1Page;
