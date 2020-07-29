import React, {useReducer} from 'react';

import SimulatorContext from "./simulator.context";
import simulatorReducer from './simulator.reducer';

import {
    SET_HERO_LIFE,
    SET_HERO_POINTS,
    SET_VILLAIN_LIFE,
    SET_VILLAIN_POINTS,
    SET_MESSAGE
} from '../types';

// roll a dice function
const rollDice = (min, max) => {
    return (min - 1) + Math.ceil(Math.random() * (max - min + 1))
}

const SimulatorState = ({children}) => {
    const initialState = {
        heroLife: 100,
        villainLife: 100,
        heroPoints: {
            dice1: 0,
            dice2: 0
        },
        villainPoints: {
            dice1: 0,
            dice2: 0
        },
        message: ''
    }

    const [state, dispatch] = useReducer(simulatorReducer, initialState);

    const onBattle = () => {
        const heroPoint1 = rollDice(1, 6);
        const heroPoint2 = rollDice(1, 6);
        const villainPoint1 = rollDice(1, 6);
        const villainPoint2 = rollDice(1, 6);

        if (heroPoint1 + heroPoint2 === villainPoint1 + villainPoint2) {
            dispatch({
                type: SET_MESSAGE,
                payload: `Even!`
            });
        } else if (heroPoint1 + heroPoint2 > villainPoint1 + villainPoint2) {
            dispatch({
                type: SET_MESSAGE,
                payload: `You hit villain by ${heroPoint1 + heroPoint2 - villainPoint1 - villainPoint2} points!`
            });

            dispatch({
                type: SET_VILLAIN_LIFE,
                payload: state.villainLife - (heroPoint1 + heroPoint2 - villainPoint1 - villainPoint2) > 0 ?
                    state.villainLife - (heroPoint1 + heroPoint2 - villainPoint1 - villainPoint2) : 0
            });
        } else if (heroPoint1 + heroPoint2 < villainPoint1 + villainPoint2) {
            dispatch({
                type: SET_MESSAGE,
                payload: `Villain hit you by ${villainPoint1 + villainPoint2 - heroPoint1 - heroPoint2} points!`
            });

            dispatch({
                type: SET_HERO_LIFE,
                payload: state.heroLife - (villainPoint1 + villainPoint2 - heroPoint1 - heroPoint2) > 0 ?
                    state.heroLife - (villainPoint1 + villainPoint2 - heroPoint1 - heroPoint2) : 0
            });
        }

        dispatch({
            type: SET_HERO_POINTS,
            payload: {
                dice1: heroPoint1,
                dice2: heroPoint2
            }
        });

        dispatch({
            type: SET_VILLAIN_POINTS,
            payload: {
                dice1: villainPoint1,
                dice2: villainPoint2
            }
        });
    }

    return (
        <SimulatorContext.Provider
            value={{
                heroLife: state.heroLife,
                villainLife: state.villainLife,
                heroPoints: state.heroPoints,
                villainPoints: state.villainPoints,
                message: state.message,
                onBattle
            }}>
            {children}
        </SimulatorContext.Provider>
    );
}

export default SimulatorState;