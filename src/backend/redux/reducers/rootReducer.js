import {combineReducers} from "redux";
import authReducer from "./authReducer";
import schoolsReducer from "./schoolsReducer";
import studentsReducer from "./studentsReducer";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    auth: authReducer,
    school: schoolsReducer,
    student: studentsReducer,
    firestore: firestoreReducer
})

export  default rootReducer