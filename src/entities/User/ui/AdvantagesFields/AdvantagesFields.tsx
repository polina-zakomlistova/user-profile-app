import { Formik, Form } from 'formik';

import { object, array, string, number } from 'yup';

import FieldArrayCustom from 'shared/ui/Lists/FieldArrayCustom/FieldArrayCustom';

import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';

import { UserSchema } from 'entities/User';

import { classNames } from 'shared/lib/classNames/classNames';

const SignupSchema = object().shape({
    advantages: array()
        .of(
            string()
                .min(1, 'Минимумальная длина 1 символ')
                .max(50, 'Максимальная длина 50 символов')
        )
        .min(3, 'Минимум три ваших достоинства'),
    radio: number().required('Обязательное поле'),
    checkbox: array().of(number().required('Обязательное поле')),
});

const AdvantagesFields = () => {
    const user = useSelector(getUserValue);
    const { advantages, checkbox } = user;
    const updateField = useFieldUpdate();

    const initialValues = {
        advantages,
    };

    return (
        <div className="container">
            <h2 className="visually-hidden">Step 2</h2>
            <Formik
                initialValues={initialValues}
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
                                onChangeHandle={() => {
                                    updateField(
                                        'advantages',
                                        values.advantages
                                    );
                                }}
                            />
                            {errors.advantages && touched.advantages ? (
                                <div
                                    className={classNames('error-text', {}, [])}
                                >
                                    {errors.advantages}
                                </div>
                            ) : null}
                        </>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AdvantagesFields;
