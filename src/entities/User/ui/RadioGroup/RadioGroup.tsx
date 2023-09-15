import { Formik, Form } from 'formik';

import { object, array, string } from 'yup';

import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';

import { UserSchema } from 'entities/User';

import { classNames } from 'shared/lib/classNames/classNames';
import RadioList from 'shared/ui/Lists/RadioList/RadioList';
import { itRadio } from 'entities/User/model/types/userShema';
import { ErrorMessage } from 'shared/ui/ErrorMessage/ErrorMessage';

const SignupSchema = object().shape({
    radio: string(),
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
            validateOnChange={true}
            validateOnBlur={true}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                for (const [key, value] of Object.entries(values)) {
                    updateField(key as keyof UserSchema, value);
                }
            }}
        >
            {({ errors, touched, values, handleChange }) => (
                <Form className="form">
                    <RadioList
                        name="radio"
                        label="Выбор"
                        list={itRadio}
                        onChangeHandler={() => {
                            updateField('radio', values.radio);
                        }}
                    />
                    <ErrorMessage name="radio" />
                </Form>
            )}
        </Formik>
    );
};

export default RadioGroup;
