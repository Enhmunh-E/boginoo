import React from 'react';
import { HomeDefault, LoginPage, SignUpPage, Shortener } from './pages';
import { AuthProvider } from './Providers/auth-user-provider';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Provider } from './Providers/provider'
import './style/main.scss';

const App = () => {

    return (
        <AuthProvider>
            <Router>
                <Provider>
                    <Switch>
                        <Route path="/" exact>
                            <HomeDefault />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/signup">
                            <SignUpPage />
                        </Route>
                        <Route path="*">
                            <Shortener />
                        </Route>
                    </Switch>
                </Provider>
            </Router>
        </AuthProvider>
    )
}

export default App;