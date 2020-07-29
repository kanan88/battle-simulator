import React, {useContext, useEffect, useState} from 'react';
import SimulatorContext from "../../context/simulator/simulator.context";

import hero from '../../assets/hero.svg';
import d1 from '../../assets/1.svg';
import d2 from '../../assets/2.svg';
import d3 from '../../assets/3.svg';
import d4 from '../../assets/4.svg';
import d5 from '../../assets/5.svg';
import d6 from '../../assets/6.svg';

import './hero.styles.scss';

const Hero = () => {
    const simulatorContext = useContext(SimulatorContext);
    const {heroLife, heroPoints} = simulatorContext;

    const [D1, setD1] = useState(null);
    const [D2, setD2] = useState(null);

    useEffect(() => {
        switch (heroPoints.dice1) {
            case 1: setD1(d1); break;
            case 2: setD1(d2); break;
            case 3: setD1(d3); break;
            case 4: setD1(d4); break;
            case 5: setD1(d5); break;
            case 6: setD1(d6); break;
            default: setD1(d1); break;
        }

        switch (heroPoints.dice2) {
            case 1: setD2(d1); break;
            case 2: setD2(d2); break;
            case 3: setD2(d3); break;
            case 4: setD2(d4); break;
            case 5: setD2(d5); break;
            case 6: setD2(d6); break;
            default: setD2(null); break;
        }
    }, [heroPoints]);

    return (
        <div className="hero">
            <img src={hero} alt="" className="hero__img"/>
            <div className="hero__life">{heroLife}</div>
            <div className="hero__points">
                {heroPoints.dice1 > 0 && <img src={D1} alt="" className="hero__point hero__point--1"/>}
                {heroPoints.dice2 > 0 && <img src={D2} alt="" className="hero__point hero__point--2"/>}
            </div>
        </div>
    );
};

export default Hero;