import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './HorizontalStepper.module.scss';

interface StepperProps {
    className?: string;
    steps: string[];
    activeStep: number;
}

export const HorizontalStepper = (props: StepperProps) => {
    const { className, activeStep, steps } = props;

    const mods:Mods = {};

    return (
        <div className={classNames(cls.Stepper, mods, [className])}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};
