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

const CheckboxGroup = () => {
    const user = useSelector(getUserValue);
    const { checkbox } = user;
    const updateField = useFieldUpdate();

    const initialValues = {
        checkbox,
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
                        name="checkbox"
                        onChangeHandler={(event) => {
                            console.log(values);

                            const newValue = event.target.checked;
                            handleChange(event);
                            updateField('checkbox', values.checkbox);
                        }}
                    />
                    {errors.checkbox && touched.checkbox ? (
                        <div className={classNames('error-text', {}, [])}>
                            {errors.checkbox}
                        </div>
                    ) : null}
                </Form>
            )}
        </Formik>
    );
};

export default CheckboxGroup;
