import React, {useContext} from 'react';
import SimulatorContext from "../../context/simulator/simulator.context";
import battle from '../../assets/battle.svg';

import './battle.styles.scss';

const Battle = () => {
    const simulatorContext = useContext(SimulatorContext);
    const {onBattle, message} = simulatorContext;

    return (
        <div className="battle">
            {message.length > 0 && <div className="battle__desc">{message}</div>}
            <button className="battle__button" onClick={onBattle}>
                <img src={battle} alt="" className="battle__img"/>
            </button>
        </div>
    );
};

export default Battle;