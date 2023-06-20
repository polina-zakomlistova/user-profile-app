import React from 'react';
import { Formik, Form, Field } from 'formik';

import { object, array, string, number, InferType } from 'yup';
import ButtonLink, { ThemeButtonLink } from 'shared/ui/ButtonLink/ButtonLink';

import FieldArrayCustom from 'entities/User/ui/FieldArray/FieldArray';
import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';
import CheckboxGroup from 'entities/User/ui/CheckboxGroup/CheckboxGroup';

const SignupSchema = object().shape({
    advantages: array().of(string().required('Обязательное поле')),
    radio: number().required('Обязательное поле'),
    checkbox: array().of(number().required('Обязательное поле')),
});

const CreateStep2Page = () => {
    const user = useSelector(getUserValue);
    const { advantages, radio, checkbox } = user;
    const updateField = useFieldUpdate();
    const initialValues = {
        advantages,
        radio,
        checkbox,
    };

    return (
        <div className="container">
            <h2 className="visually-hidden">Step 2</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="form">
                        <FieldArrayCustom
                            name="advantages"
                            onChangeInput={updateField}
                        />

                        <div>
                            <label>Checkbox</label>
                            <div>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checkbox"
                                        value={1}
                                    />
                                    1
                                </label>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checkbox"
                                        value={2}
                                    />
                                    2
                                </label>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checkbox"
                                        value={3}
                                    />
                                    3
                                </label>
                            </div>
                        </div>
                        {/* <CheckboxGroup
                            name={'checkbox'}
                            onChangeInput={updateField}
                        /> */}

                        <div>
                            <label>Radio</label>
                            <div>
                                <label>
                                    <Field
                                        type="radio"
                                        name="radio"
                                        value={1}
                                    />
                                    1
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="radio"
                                        value={2}
                                    />
                                    2
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="radio"
                                        value={3}
                                    />
                                    3
                                </label>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="btn-wrapper">
                <ButtonLink id="button-back" to={'/step1'}>
                    Назад
                </ButtonLink>
                <ButtonLink
                    to={'/step3'}
                    id="button-next"
                    theme={ThemeButtonLink.COLOR}
                >
                    Далее
                </ButtonLink>
            </div>
        </div>
    );
};

export default CreateStep2Page;
