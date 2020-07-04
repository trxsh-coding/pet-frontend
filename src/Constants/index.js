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
       FEED:'Лента',
       SUBSCRIBERS:'Подписки',
       SEARCH:'Поиск',
       NOTIFICATIONS:'Уведомления'
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

    CREATE_PET : `api/v1/pet/`,
    /**
     * @description get current user status, POST request
     * @param none
     * @returns {object}
     */

    GET_STATUS: `api/v1/user/status`,
    /**
     * @description update current user avatar, PATCH request
     * @param none
     * @returns {string}
     */
    UPDATE_AVATAR: `api/v1/user/updateAvatar`,

    /**
     * @description update current user background, PATCH request
     * @param none
     * @returns {string}
     */
    UPDATE_BACKGROUND: `api/v1/user/updateBackground`,

    /**
     * @description get pet by ID, GET request
     * @param id
     * @returns {string}
     */
    GET_PET_BY_ID: (id) => `api/v1/pet/${id}`,

})
