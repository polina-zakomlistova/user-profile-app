import {
    LoginForm,
    User,
    LoginValidationSchema,
    userActions, getFormUser,
} from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { FC, useCallback } from 'react';
import { Formik } from 'formik';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

const MainPage:FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const form = useSelector(getFormUser);
    const updateFields = useCallback((values: User) => dispatch(userActions.updateFields(values)), [dispatch]);
    const submitUser = useCallback(() => dispatch(userActions.submitForm()), [dispatch]);
    const { t } = useTranslation();

    return (
        <>
            <h2 className="visually-hidden">{t('Главная')}</h2>
            <div className="form">
                <Formik
                    initialValues={{ ...form }}
                    validationSchema={LoginValidationSchema}
                    validateOnChange
                    validateOnMount
                    onSubmit={(values) => {
                        updateFields(values);
                        submitUser();
                    }}
                >
                    {({
                        isValid, handleSubmit, values, errors,
                    }) => (
                        <>
                            <LoginForm />
                            <div className="btn-wrapper">
                                <Button
                                    className={cls.btnMargin}
                                    type="submit"
                                    name="start"
                                    disabled={!isValid}
                                    theme={ButtonTheme.COLOR}
                                    onClick={() => {
                                        if (isValid) {
                                            handleSubmit();
                                            navigate(RoutePath.create);
                                        }
                                    }}
                                >
                                    {t('Начать')}
                                </Button>
                            </div>

                        </>

                    )}
                </Formik>
            </div>

        </>

    );
};

export default MainPage;
