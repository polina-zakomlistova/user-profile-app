import cls from './ErrorMessage.module.scss';

import { Field, getIn, FormikValues } from 'formik';

interface ErrorMessageProps {
    name: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ name }) => (
    <Field
        name={name}
        render={({ form }: { form: FormikValues }) => {
            const error = getIn(form.errors, name);
            const touch = getIn(form.touched, name);
            return error ? (
                <div className={cls.errorMessage}>{error}</div>
            ) : null;
        }}
    />
);
