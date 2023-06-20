import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';

//const store = setupStore();
render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,

    document.getElementById('root')
);
