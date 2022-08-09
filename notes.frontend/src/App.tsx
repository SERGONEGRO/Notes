// import ReactDOM from "react-dom/client";
import { FC, ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import userManager, { loadUser, signinRedirect } from './auth/user-service';
import AuthProvider from './auth/auth-provider';
import SignInOidc from './auth/SigninOidc';
import SignOutOidc from './auth/SignoutOidc';
import NoteList from './notes/NoteList';

const App: FC<{}> = (): ReactElement => {
    loadUser();
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => signinRedirect()}>Login</button>
                <AuthProvider userManager={userManager}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<NoteList/>} />
                            <Route path="/signout-oidc" element={<SignOutOidc/>}/>
                            <Route path="/signin-oidc" element={<SignInOidc/>} />
                        </Routes>
                    </BrowserRouter> 
                </AuthProvider>
            </header>
        </div>
    );
};

export default App;



