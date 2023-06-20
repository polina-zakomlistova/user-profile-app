import React from 'react';
import { Formik, Form, Field } from 'formik';
import ButtonLink from 'shared/ui/ButtonLink/ButtonLink';

import { object, string, InferType } from 'yup';
import { Button } from 'shared/ui/Button/Button';

const SignupSchema = object().shape({
    about: string()
        .max(200, 'Максимальная длина 200 символов')
        .required('Обязательное поле'),
});

type UserInfo = InferType<typeof SignupSchema>;

const CreateStep3Page = () => {
    const initialValues: UserInfo = {
        about: '',
    };

    return (
        <div>
            <h2>Create Step3 Page</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label htmlFor="about">About</label>
                            <Field as="textarea" id="about" name="about" />
                        </div>
                    </Form>
                )}
            </Formik>
            <ButtonLink id="button-back" to={'/step2'}>
                Назад
            </ButtonLink>
            <Button id="button-send">Отправить</Button>
        </div>
    );
};

export default CreateStep3Page;
