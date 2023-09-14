import { Formik, Form } from 'formik';

import { object, string, InferType } from 'yup';
import { useSelector } from 'react-redux';
import { getUserValue } from 'entities/User/model/selectors/getUserValue';

import { Textarea } from 'shared/ui/Textarea/Textarea';
import useFieldUpdate from 'entities/User/model/selectors/useFieldUpdate';
import { UserSchema } from 'entities/User/model/types/userShema';

const SignupSchema = object().shape({
    about: string()
        .max(200, 'Максимальная длина 200 символов')
        .required('Обязательное поле'),
});

type UserInfo = InferType<typeof SignupSchema>;

const AboutPage = () => {
    const user = useSelector(getUserValue);
    const { about } = user;

    const updateField = useFieldUpdate();

    const initialValues: UserInfo = {
        about,
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={() => {}}
        >
            {({ errors, touched, values }) => (
                <Form>
                    <Textarea
                        name="about"
                        label="About"
                        onChangeHandler={() => {
                            updateField('about', values.about);
                        }}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default AboutPage;
