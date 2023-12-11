import { render } from 'react-dom';
import { HashRouter as BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';

import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,

    document.getElementById('root'),
);
