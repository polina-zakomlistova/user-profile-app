import { Formik, Form } from 'formik';

import { object, array, string, number } from 'yup';

import FieldArrayCustom from 'shared/ui/Lists/FieldArrayCustom/FieldArrayCustom';

import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';

import { UserSchema } from 'entities/User';

import { classNames } from 'shared/lib/classNames/classNames';
import { ErrorMessage } from 'shared/ui/ErrorMessage/ErrorMessage';

const SignupSchema = object().shape({
    advantages: array()
        .of(
            string()
                .min(1, 'Минимумальная длина 1 символ')
                .max(50, 'Максимальная длина 50 символов')
        )
        .min(1, 'Минимум одно ваше достоинство')
        .max(5, 'Максимум семь ваших достоинств'),
});

const AdvantagesFields = () => {
    const user = useSelector(getUserValue);
    const { advantages } = user;
    const updateField = useFieldUpdate();

    const initialValues = {
        advantages,
    };

    return (
        <Formik
            initialValues={initialValues}
            validateOnChange={true}
            validateOnBlur={true}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                for (const [key, value] of Object.entries(values)) {
                    updateField(key as keyof UserSchema, value);
                }
            }}
        >
            {({ errors, touched, values }) => (
                <Form className="form">
                    <>
                        <FieldArrayCustom
                            name="advantages"
                            list={values.advantages}
                            label="Достоинства"
                            onChangeHandle={() => {
                                updateField('advantages', values.advantages);
                            }}
                        />
                        <ErrorMessage name="advantages" />
                    </>
                </Form>
            )}
        </Formik>
    );
};

export default AdvantagesFields;
