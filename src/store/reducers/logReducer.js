import {ADD_LOG, DELETE_LOG, GET_LOG, UPDATE_LOG} from "../../utils/actionTypes";

const logReducer = (state = [], action) => {
    switch (action.type) {
        case GET_LOG:
            return state

        case ADD_LOG:
            return [...state, action.payload ]

        case UPDATE_LOG:

            const index = state.findIndex(el=>el.user_id==action.payload.user_id)
            state[index] = action.payload
            return [...state]

        case DELETE_LOG:
            const logId2 = action.payload.user_id


            return [...state.filter((el) => el.user_id !== logId2)]

        default:
            return state
    }
}

export default logReducer
