import { Formik, Form } from 'formik';

import { object, array, number } from 'yup';

import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';

import { UserSchema } from 'entities/User';

import { classNames } from 'shared/lib/classNames/classNames';
import CheckboxList from 'shared/ui/Lists/CheckboxList/CheckboxList';

const SignupSchema = object().shape({
    checkbox: array().of(number().required('Обязательное поле')),
});

const CheckboxGroup = () => {
    const user = useSelector(getUserValue);
    const { checkbox } = user;
    const updateField = useFieldUpdate();

    const initialValues = {
        checkbox,
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
                        <CheckboxList
                            name="checkbox"
                            onChangeHandler={() => {
                                updateField('checkbox', values.checkbox);
                                console.log(values);
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
        </div>
    );
};

export default CheckboxGroup;
