import * as actions from '../actions';

const reducer = (state, action) => {
    switch(action.type) {
        case actions.setcontent:
            return {
                ...state,
                content: action.payload.content,
                transformation: action.payload.transformation
            }
        default:
            return {
                ...state,
                content: action.payload
            }
    }
}

export default reducer;