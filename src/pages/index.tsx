import React from 'react';
import Game from './game';
import { NUMBERS } from '../constants/constants';

let numbers = (function() {
    let array = [...NUMBERS];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
})();

export default function Pages() {
    return (
        <Game numbers={numbers} />
    );
}
