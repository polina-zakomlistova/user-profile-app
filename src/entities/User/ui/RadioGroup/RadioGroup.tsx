import { Formik, Form } from 'formik';

import { object, array, string } from 'yup';

import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';

import { UserSchema } from 'entities/User';

import { classNames } from 'shared/lib/classNames/classNames';
import CheckboxList from 'shared/ui/Lists/CheckboxList/CheckboxList';

const SignupSchema = object().shape({
    checkbox: array().of(string().required('Обязательное поле')),
});

const RadioGroup = () => {
    const user = useSelector(getUserValue);
    const { radio } = user;
    const updateField = useFieldUpdate();

    const initialValues = {
        radio,
    };

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
            {({ errors, touched, values, handleChange }) => (
                <Form className="form">
                    <CheckboxList
                        name="radio"
                        onChangeHandler={(event) => {
                            console.log(values);

                            const newValue = event.target.checked;
                            //handleChange(event);
                            updateField('radio', values.radio);
                        }}
                    />
                    {errors.radio && touched.radio ? (
                        <div className={classNames('error-text', {}, [])}>
                            {errors.radio}
                        </div>
                    ) : null}
                </Form>
            )}
        </Formik>
    );
};

export default RadioGroup;
