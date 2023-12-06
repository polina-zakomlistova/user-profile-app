import { classNames } from 'shared/lib/classNames/classNames';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
    FC, useCallback, useEffect, useState,
} from 'react';
import yup from 'yup';
import { useTranslation } from 'react-i18next';
import {
    getFormUser,
    getStepFormUser,
    Step1Form,
    Step2Form,
    Step3Form,
    itRadio,
    itSkills,
    Step1ValidationSchema,
    Step2ValidationSchema,
    Step3ValidationSchema,
    userActions,
    User,
} from 'entities/User';
import { MultiStepForm } from 'shared/ui/MultiStepForm/MultiStepForm';
import { StepForm } from 'shared/ui/StepForm/StepForm';

const CreatePage:FC = () => {
    const dispatch = useDispatch();
    const updateFields = useCallback((values: User) => dispatch(userActions.updateFields(values)), [dispatch]);
    const submitUser = useCallback(() => dispatch(userActions.submitForm()), [dispatch]);
    const form = useSelector(getFormUser);
    const currentStep = useSelector(getStepFormUser);
    const setStep = useCallback((step: number) => dispatch(userActions.setStep(step)), [dispatch]);
    const { t } = useTranslation();
    const [validationSchema, setValidationSchema] = useState<yup.ObjectSchema<{}>>();

    useEffect(() => {
        switch (currentStep) {
        case 0:
            setValidationSchema(Step1ValidationSchema);
            break;
        case 1:
            setValidationSchema(Step2ValidationSchema);
            break;
        case 2:
            setValidationSchema(Step3ValidationSchema);
            break;
        default:
            break;
        }
    }, [currentStep]);

    console.log(currentStep, validationSchema);
    return (
        <div className="container">
            <h2 className="visually-hidden">{t('Создание профиля')}</h2>
            <Formik
                initialValues={{ ...form }}
                validationSchema={validationSchema}
                isInitialValid={false}
                validateOnChange
                validateOnMount
                onSubmit={(values) => {
                    updateFields(values);
                    submitUser();
                }}
            >
                {({
                    errors, handleSubmit, isValid, values,
                }) => (
                    <MultiStepForm onSetStep={(step) => setStep(step || 0)}>
                        <StepForm label="1">
                            <Step1Form />
                        </StepForm>
                        <StepForm label="2">
                            <Step2Form
                                advantagesList={values.advantages || []}
                                levelList={itRadio}
                                skillsList={itSkills}
                            />
                        </StepForm>
                        <StepForm label="3">
                            <Step3Form />
                        </StepForm>
                    </MultiStepForm>

                )}
            </Formik>

        </div>
    );
};

export default CreatePage;

// <>
//     {step === 0
//         && (
//             <Step1Form
//                 onPrevStep={() => {
//                     handleOnPrevStep(values);
//                     navigate(RoutePath.main);
//                 }}
//                 onNextStep={() => handleOnNextStep(values)}
//                 isValid={isValid}
//             />
//         )}
//     {step === 1
//         && (
//             <Step2Form
//                 advantagesList={values.advantages || []}
//                 levelList={itRadio}
//                 skillsList={itSkills}
//                 isValid={isValid}
//                 onPrevStep={() => handleOnPrevStep(values)}
//                 onNextStep={() => handleOnNextStep(values)}
//             />
//         )}
//     {step === 2
//         && (
//             <Step3Form
//                 isValid={isValid}
//                 onPrevStep={() => handleOnPrevStep(values)}
//             />
//         )}
//
// </>
