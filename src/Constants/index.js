export const translateKeyword = key => {
    switch (key) {
        case 'email' :
            return 'Электронная почта';
        case 'username' :
            return 'Имя пользователя';
        case 'password' :
            return 'Пароль';
        case 'type' :
            return 'Тип';
        case 'name' :
            return 'Имя';
        case 'ages' :
            return 'Возраст';
        case 'gender' :
            return 'Пол';
        case 'breed' :
            return 'Порода';
        default:
            return key
    }
};

export const ROUTE_NAMES = Object.freeze({

   AUTH: {
       LOGIN:'login',
       REGISTRATION:'registration',
   },
   MAIN: {
       '/':'Лента',
       MISSINGS:'Объявления',
       SUBSCRIPTIONS:'Подписки',
       SEARCH:'Поиск',
       NOTIFICATIONS:'Уведомления',
       CHAT:'Сообщения',
   }
});


export const API_ROUTES = Object.freeze({
    /**
     * @description user login in, POST request
     * @returns {object}
     * @param none
     */

    SIGN_UP: `api/v1/user/signup`,
    /**
     * @description user login in, POST request
     * @returns {object}
     * @param none
     */

    FIND_CHAT_ROOM : (id) => `api/v1/chat/findRoom/${id}`,
    /**
     * @description user login in, POST request
     * @returns {object}
     * @param id
     */


    CREATE_CHAT_ROOM : `api/v1/chat/create`,
    /**
     * @description user login in, POST request
     * @returns {object}
     * @param none
     */

    SIGN_IN: `api/v1/user/signin`,
    /**
     * @description get current user api, GET request
     * @param none
     * @returns {string}
     */

    GET_CURRENT_USER :  `api/v1/user/current`,
    /**
     * @description get user by id, GET request
     * @param id
     * @returns {string}
     */

    GET_USER : (id) =>  `api/v1/user/${id}`,
    /**
     * @description get current user status, GET request
     * @param none
     * @returns {boolean}
     */


    UPDATE_USER : `api/v1/user/updateCurrentUser`,
    /**
     * @description get current user, PATCH request
     * @param id
     * @returns {boolean}
     */


    UPDATE_PET:  (id) =>  `api/v1/pet/${id}`,
    /**
     * @description update pet, PATCH request
     * @param none
     * @returns {boolean}
     */

    CREATE_PET : `api/v1/pet/`,

    /**
     * @description get current user status, GET request
     * @param none
     * @returns {boolean}
     */

    CREATE_POST : `api/v1/post/`,
    /**
     * @description create post, POST request
     * @param none
     * @returns {object}
     */
    CREATE_VIDEO_POST : `api/v1/post/video`,
    /**
     * @description create post, POST request
     * @param none
     * @returns {object}
     */

    GET_STATUS: `api/v1/user/status`,
    /**
     * @description update current user avatar, PATCH request
     * @param model
     * @returns {string}
     */
    UPDATE_AVATAR: (model) => `api/v1/${model}/updateAvatar`,

    /**
     * @description update current user background, PATCH request
     * @param model
     * @returns {string}
     */
    UPDATE_BACKGROUND: (model) => `api/v1/${model}/updateBackground`,
    /**
     * @description get pet by ID, GET request
     * @param id
     * @returns {string}
     */
    GET_PET_BY_ID: (id) => `api/v1/pet/${id}`,

    /**
     * @description follow pet by Id, POST request
     * @param id
     * @returns {string}
     */
    FOLLOW_PET: (id) => `api/v1/pet/follow/${id}`,
    /**
     * @description follow pet by Id, POST request
     * @param id
     * @returns {string}
     */
    UNFOLLOW_PET: (id) => `api/v1/pet/unfollow/${id}`,
    /**
     * @description follow pet by Id, POST request
     * @param id
     * @returns {string}
     */
    GET_SUBSCRIPTIONS:  `api/v1/user/subscriptions/`,

    /**
     * @description follow pet by Id, POST request
     * @param id
     * @returns {string}
     */
    GET_PET_FEED: (id) =>  `api/v1/pet/feed/${id}`,

    /**
     * @description follow pet by Id, POST request
     * @param id
     * @returns {string}
     */
    SEARCH_PETS_BY_QUERY: `api/v1/pet/search`,

    /**
     * @description save post comment, POST request
     * @param none
     * @returns {string}
     */
    CREATE_COMMENT:`api/v1/post/comment`,

    /**
     * @description send message action, POST request
     * @returns {object}
     * @param none
     */
    SEND_MESSAGE : `api/v1/message`,

    /**
     * @description send message with room action, POST request
     * @returns {object}
     * @param none
     */
    SEND_MESSAGE_WITH_ROOM : `api/v1/message/room`,

    /**
     * @description send message with room action, POST request
     * @returns {object}
     * @param none
     */
    LOGOUT : `api/v1/user/logout`,

    /**
     * @description user login in, POST request
     * @returns {object}
     * @param id
     */


    GET_NOTIFICATIONS_COUNT : `api/v1/notification/count`,

    /**
     * @description user login in, POST request
     * @returns {object}
     * @param id
     */


    READ_NOTIFICATIONS : `api/v1/notification/read`,


    /**
     * @description create like, POST request
     * @returns {object}
     * @param id
     */


    CREATE_LIKE : (id) => `api/v1/like/${id}`,

    /**
     * @description delete like, DELETE request
     * @returns {string}
     * @param id
     */


    DELETE_LIKE : (id) => `api/v1/like/${id}`,

    /**
     * @description create missing adv, POST request
     * @returns {object}
     * @param none
     */

    CREATE_MISSING : `api/v1/missing/`,
})
