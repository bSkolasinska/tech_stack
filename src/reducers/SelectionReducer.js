export default (state, row) => {
    switch (action.type){
        case 'select_library':
            return action.payload;
        case 'default':
            return state;
    }
}