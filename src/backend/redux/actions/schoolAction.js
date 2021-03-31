export const createSchool = (school) => {
    return (dispach, getState, {getFirebase, getFirestore}) => {
        //    make async call to the the db
        const firestore = getFirestore();
        firestore.collection('schools').add(
            {
                ...school,
                userName: 'Namianya',
                email: 'wekesa350@gmail.com',
                firstName: 'Paul',
                lastName: 'Wekesa',
                schoolName: 'Neema School',
                schoolAddress: 'Misihku',
                county: 'Bungoma',
                country: 'Kenya',
                postalAddress: '50207',
            }).then(() => {
            dispach({
                type: 'ADD_SCHOOL',
                school: school
            })
        }).catch((err) => {
            dispach({
                type: 'ADD_SCHOOL_ERR',
                err
            })
        })

    }
}