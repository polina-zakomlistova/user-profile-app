import React from 'react';
import { Formik, Form, Field, FormikProps } from 'formik';

import { object, array, string, number, InferType } from 'yup';
import ButtonLink, { ThemeButtonLink } from 'shared/ui/ButtonLink/ButtonLink';

import FieldArrayCustom from 'shared/Lists/FieldArray/FieldArray';

import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';
import CheckboxGroup from 'entities/User/ui/CheckboxGroup/CheckboxGroup';

const SignupSchema = object().shape({
    advantages: array().of(
        string()
            .max(50, 'Максимальная длина 50 символов')
            .required('Обязательное поле')
            .min(3, 'Minimum of 3 friends')
    ),
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
                {(props: FormikProps<any>) => (
                    <Form className="form">
                        <FieldArrayCustom
                            name="advantages"
                            onChangeInput={updateField}
                        />
                        <hr></hr>
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
