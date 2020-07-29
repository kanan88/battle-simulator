import React, {useContext, useEffect, useState} from 'react';
import SimulatorContext from "../../context/simulator/simulator.context";

import villain from "../../assets/devil.svg";
import d1 from "../../assets/1.svg";
import d2 from "../../assets/2.svg";
import d3 from "../../assets/3.svg";
import d4 from "../../assets/4.svg";
import d5 from "../../assets/5.svg";
import d6 from "../../assets/6.svg";

import './villain.styles.scss';

const Villain = () => {
    const simulatorContext = useContext(SimulatorContext);
    const {villainLife, villainPoints} = simulatorContext;

    const [D1, setD1] = useState(null);
    const [D2, setD2] = useState(null);

    useEffect(() => {
        switch (villainPoints.dice1) {
            case 1: setD1(d1); break;
            case 2: setD1(d2); break;
            case 3: setD1(d3); break;
            case 4: setD1(d4); break;
            case 5: setD1(d5); break;
            case 6: setD1(d6); break;
            default: setD1(null); break;
        }

        switch (villainPoints.dice2) {
            case 1: setD2(d1); break;
            case 2: setD2(d2); break;
            case 3: setD2(d3); break;
            case 4: setD2(d4); break;
            case 5: setD2(d5); break;
            case 6: setD2(d6); break;
            default: setD2(null); break;
        }
    }, [villainPoints]);

    return (
        <div className="villain">
            <div className="villain__points">
                {villainPoints.dice1 > 0 && <img src={D1} alt="" className="villain__point villain__point--1"/>}
                {villainPoints.dice2 > 0 && <img src={D2} alt="" className="villain__point villain__point--2"/>}
            </div>
            <div className="villain__life">{villainLife}</div>
            <img src={villain} alt="" className="villain__img"/>
        </div>
    );
};

export default Villain;