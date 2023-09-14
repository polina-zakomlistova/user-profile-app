import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

import AdvantagesFields from 'entities/User/ui/AdvantagesFields/AdvantagesFields';
import CheckboxGroup from 'entities/User/ui/CheckboxGroup/CheckboxGroup';
import RadioGroup from 'entities/User/ui/RadioGroup/RadioGroup';

const CreateStep2Page = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2 className="visually-hidden">Step 2</h2>

            <AdvantagesFields />
            <CheckboxGroup />
            <RadioGroup />
            <div className="btn-wrapper">
                <Button
                    className="btn-margin"
                    type="submit"
                    name="back"
                    onClick={() => {
                        //submitForm();
                        navigate('/step1');
                    }}
                >
                    Назад
                </Button>
                <Button
                    className="btn-margin"
                    type="submit"
                    name="next"
                    theme={ThemeButton.COLOR}
                    onClick={() => {
                        //submitForm();
                        navigate('/step3');
                    }}
                    //disabled={!isValid}
                >
                    Далее
                </Button>
            </div>
        </div>
    );
};

export default CreateStep2Page;
