const initState = {
    schools: [
        {id: 34637, name: 'Tusome School', population: 200, payments: 30 },
        {id: 43453, name: 'Neema School', population: 500, payments: 100 },
    ]

}
const schoolsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_SCHOOL':
            console.log('Added school', action.school);
            return state
        case 'ADD_SCHOOL_ERROR':
            console.log('add school error', action.err)
            return state
        default:
            return state
    }
}

export default schoolsReducer