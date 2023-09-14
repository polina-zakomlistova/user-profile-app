import { object, string, InferType } from 'yup';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import { useNavigate } from 'react-router-dom';
import AboutPage from 'entities/User/ui/AboutPage/AboutPage';

const CreateStep3Page = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2 className="visually-hidden">Create Step3 Page</h2>
            <AboutPage />
            <div className="btn-wrapper">
                <Button
                    className="btn-margin"
                    type="submit"
                    name="back"
                    onClick={() => {
                        navigate('/step2');
                    }}
                >
                    Назад
                </Button>
                <Button
                    className="btn-margin"
                    type="submit"
                    name="send"
                    theme={ThemeButton.COLOR}
                    onClick={() => {}}
                >
                    Отправить
                </Button>
            </div>
        </div>
    );
};

export default CreateStep3Page;
