import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

const App = () => (
    <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
            <AppRouter />
        </Suspense>
    </div>
);

export default App;
