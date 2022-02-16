import React from 'react';

interface GameProps {
    numbers: string[];
}

const Game: React.FC<GameProps> = ({numbers}) => {
    return (
        <>
            { numbers }
        </>
    );
};

export default Game;
