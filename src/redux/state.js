import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer';


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'It`s my first post!', likesCount: 3}
            ],
            newPostText: 'text'
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Sergey'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Katya'},
                {id: 6, name: 'Valera'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText : ''
        }
    },
    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)

        this._callSubscriber(this._state)
    }
}



export default store