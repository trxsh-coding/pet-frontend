export default class Reducer {
    constructor(name, initialState = {}){
        this.name = name;
        this.initialState = {
            data:[],
            loading:false,
            ...initialState
        }
    }

    static get _ActionTypes(){
        return {
            SET: 'SET',
            SET_BY_ID: 'SET_BY_ID',
            DELETE: 'DELETE',
            UPDATE: 'UPDATE',
            APPEND: 'APPEND',
            SET_LOADING: 'SET_LOADING',
            UPDATE_FIELD: 'UPDATE_FIELD',
            APPEND_TO_CHILD: 'APPEND_TO_CHILD',
            CHANGE_QUANTITY: 'CHANGE_QUANTITY',
            UPDATE_NESTED_FIELD:'UPDATE_NESTED_FIELD',
            RESET_STATE:'RESET_STATE'
        }
    }
    _setActionPrefix(prefix, action) {
        return `@${prefix}/${action}`;
    }

    get actionTypes() {
        const types = {};
        for (const key in Reducer._ActionTypes) {
            types[key] = this._setActionPrefix(this.name, key);
        }
        return types
    }

    _actionVerifier(state, action){

        const {
            SET,
            DELETE,
            UPDATE,
            APPEND,
            SET_BY_ID,
            SET_LOADING,
            UPDATE_FIELD,
            APPEND_TO_CHILD,
            CHANGE_QUANTITY,
            UPDATE_NESTED_FIELD,
            RESET_STATE
        } = this.actionTypes;

        const {type, payload, key} = action;

        switch (type) {
            case SET: {
                return {
                    ...state,
                    [key]:payload
                }
            }
            case SET_BY_ID: {
                let newMap = {};
                for (let item of payload ){
                    newMap = {...newMap, ...{[item._id]:item} }
                }
                return  {
                    ...state,
                    [key]:newMap
                }
            }
            case DELETE: {
                delete state[key][payload];
                return  {
                    ...state
                }
            }
            case SET_LOADING: {
                return {
                    ...state,
                    loading : payload
                }
            }
            case APPEND_TO_CHILD: {
                const {id, value, key} = payload;
                return  {
                    ...state,
                    data: {
                        ...state.data,
                        [id]:{
                            ...state.data[id],
                            [key]:[
                                ...state.data[id][key],
                                ...value
                            ]
                        }
                    }
                }
            }
            case RESET_STATE: {
                return {
                    ...this.initialState
                }
            }
            case UPDATE: {
                const {_id, value, key} = payload;
                state.data[_id] = {...state.data[_id], ...{[key]:value}};
                return  {
                    ...state,

                }
            }

            case UPDATE_FIELD: {
                const {key, value, map, field} = payload;
                return  {
                    ...state,
                    [map]: {
                        ...state[map],
                        [key]:{
                            ...state[map][key],
                            [field]:value
                        }
                    }
                }
            }
            case UPDATE_NESTED_FIELD: {
                const {key, value, map, field, nested_field} = payload;
                return  {
                    ...state,
                    [map]: {
                        ...state[map],
                        [key]:{
                            ...state[map][key],
                            [field]:{
                                ...state[map][key][field],
                                [nested_field]:value
                            }
                        }
                    }
                }
            }
            case CHANGE_QUANTITY: {
                const {key, map, field, type} = payload;
                console.log(state[map][key][field])
                return  {
                    ...state,
                    [map]: {
                        ...state[map],
                        [key]:{
                            ...state[map][key],
                            [field]:type === 'increase' ?
                                state[map][key][field] + 1 : state[map][key][field] - 1
                        }
                    }
                }
            }
            case APPEND: {
                state.data = {...state.data, ...payload};
                return  {
                    ...state
                }
            }
            default:
                return state
        }

    }

    create(){
        return (state = this.initialState, action) =>  {
            return this._actionVerifier(state, action)
        }
    }

}
