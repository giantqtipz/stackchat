import {createStore} from 'redux';

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const CREATE_MESSAGE = 'CREATE_MESSAGE';

const initialState = {
    messages: [],
    newMessage: ''
};

export const gotMessagesFromServer = function(messages){
    return {
        type: GOT_MESSAGES_FROM_SERVER,
        messages: messages
    }
}

export const createMessage = function(message){
    return {
        type: CREATE_MESSAGE,
        newMessage: message
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GOT_MESSAGES_FROM_SERVER:
            return {
                ...state,
                messages: action.messages
            }
        case CREATE_MESSAGE:
            return {
                ...state,
                newMessage: action.newMessage
            }
        default:
            return state
        }
}

const store = createStore(reducer);

export default store;

