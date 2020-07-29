import {
    SET_HERO_LIFE,
    SET_HERO_POINTS,
    SET_VILLAIN_LIFE,
    SET_VILLAIN_POINTS,
    SET_MESSAGE, SET_GAME_OVER
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_HERO_LIFE:
            return {
                ...state,
                heroLife: action.payload
            }
        case SET_VILLAIN_LIFE:
            return {
                ...state,
                villainLife: action.payload
            }
        case SET_HERO_POINTS:
            return {
                ...state,
                heroPoints: action.payload
            }
        case SET_VILLAIN_POINTS:
            return {
                ...state,
                villainPoints: action.payload
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case SET_GAME_OVER:
            return {
                ...state,
                gameOver: action.payload
            }
        default:
            return state;
    }
}