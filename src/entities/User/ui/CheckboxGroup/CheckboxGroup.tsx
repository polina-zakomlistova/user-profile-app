import { Formik, Form } from 'formik';

import { object, array, string } from 'yup';

import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';

import { UserSchema } from 'entities/User';

import { classNames } from 'shared/lib/classNames/classNames';
import CheckboxList from 'shared/ui/Lists/CheckboxList/CheckboxList';
import { itSkills } from 'entities/User/model/types/userShema';
import { ErrorMessage } from 'shared/ui/ErrorMessage/ErrorMessage';

const SignupSchema = object().shape({
    checkbox: array().of(string()).min(1, 'Выберите хотя бы одно значение'),
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
                    <CheckboxList
                        list={itSkills}
                        label="Навыки"
                        name="checkbox"
                        onChangeHandler={() => {
                            updateField('checkbox', values.checkbox);
                        }}
                    />
                    <ErrorMessage name="checkbox" />
                </Form>
            )}
        </Formik>
    );
};

export default CheckboxGroup;
