import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/core/styles";

import theme from "assets/theme/theme.js";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./backend/redux/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {getFirestore} from 'redux-firestore';
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import firebaseConfig from "./backend/config/firebaseConfig";
import firebase from "firebase";

const store = createStore(rootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))
)
const rrfConfig = {
      firebase,
       config: firebaseConfig,
       dispatch: store.dispatch
 }

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfConfig}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/admin" render={(props) => <AdminLayout {...props} />}/>
                        <Route path="/auth" render={(props) => <AuthLayout {...props} />}/>
                        <Redirect from="/" to="/admin/index"/>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.querySelector("#root")
);
