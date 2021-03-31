export const createStudent = (student) => {
    return (dispach, getState, {getFirebase, getFirestore}) => {
    //    make async call to the the db
        const firestore = getFirestore();
        dispach({
            type: 'ADD_STUDENT',
            student: student
        })
    }
}