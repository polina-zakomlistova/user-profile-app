import React, {
    ReactElement, useCallback, useEffect, useState,
} from 'react';
import { Form, useFormikContext } from 'formik';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HorizontalStepper } from 'shared/ui/HorizontalStepper/HorizontalStepper';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { StepFormProps } from 'shared/ui/StepForm/StepForm';
import cls from './MultiStepForm.module.scss';

type StepFormType = ReactElement<StepFormProps>;

interface MultiStepFormProps {
    className?: string;
    children: StepFormType[];
    onSetStep?: (step:number)=>void;
}

export const MultiStepForm = (props: MultiStepFormProps) => {
    const { className, children: stepsArray, onSetStep } = props;
    const { t } = useTranslation();

    const mods:Mods = {};

    const [step, setStep] = useState(0);
    const currentStep = stepsArray[step];
    const lastStepNum = stepsArray.length - 1;

    const labelSteps = stepsArray.map((step) => step.props?.label);

    useEffect(() => { onSetStep?.(step); }, [step, onSetStep]);

    const handleNextStep = useCallback(() => {
        if (step < lastStepNum) {
            setStep(step + 1);
        }
        currentStep?.props?.onNext?.();
    }, [step, currentStep, lastStepNum]);

    const handlePrevStep = useCallback(() => {
        if (step > 0) {
            setStep(step - 1);
        }
        currentStep?.props?.onBack?.();
    }, [step, currentStep]);

    const { isValid } = useFormikContext();

    return (
        <div className={classNames(cls.MultyStepForm, mods, [className])}>
            <Form>
                <HorizontalStepper steps={labelSteps} activeStep={step} />
                {currentStep}
                <div className={classNames('btn-wrapper', {}, [cls.buttonWrapper])}>
                    <Button
                        className="btn-margin"
                        type="button"
                        name="back"
                        onClick={handlePrevStep}
                    >
                        {t('Назад')}
                    </Button>
                    {step === lastStepNum
                        ? (
                            <Button
                                className="btn-margin"
                                type="submit"
                                name="submit"
                                theme={ButtonTheme.COLOR}
                                disabled={!isValid}
                                onClick={handleNextStep}
                            >
                                {t('Отправить')}
                            </Button>
                        )
                        : (
                            <Button
                                className="btn-margin"
                                type="button"
                                name="next"
                                theme={ButtonTheme.COLOR}
                                onClick={handleNextStep}
                                disabled={!isValid}
                            >
                                {t('Далее')}
                            </Button>
                        )}

                </div>
            </Form>
        </div>
    );
};
