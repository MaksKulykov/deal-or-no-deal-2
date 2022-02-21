import React, { Component } from 'react';
import Layout from '../components/layout';
import { STEPS_AMOUNT } from '../constants/constants';
import Box from '../components/box';

interface GameProps {
    numbers: string[]
}

interface GameState {
    firstBoxNumber: number,
    firstBoxValue: string,
    selectedValues: string[],
    showModal: boolean,
    isGameFinish: boolean
}

export class Game extends Component<GameProps, GameState> {

    state: GameState = {
        firstBoxNumber: 0,
        firstBoxValue: '',
        selectedValues: [],
        showModal: false,
        isGameFinish: false
    }

    handleClick = (boxNumber: number, value: string) => {
        if (!this.state.firstBoxNumber) {
            this.setState({firstBoxNumber: boxNumber, firstBoxValue: value});
        } else {
            this.setState({selectedValues: [...this.state.selectedValues, value]}, () => {
                if (STEPS_AMOUNT.includes(this.state.selectedValues.length)) {
                    this.setState({showModal: true});
                }
            });
        }
    };

    renderBoxes = () => {
        const { numbers } = this.props;
        return numbers.map((value, index) => <Box key={value}
                                                                onClick={this.handleClick}
                                                                value={value}
                                                                boxNumber={++index}
                                                                isGameFinish={false}
                                                                disabled={this.state.showModal || this.state.isGameFinish} />);
    };

    render() {
        return (
            <>
                <Layout>
                    {this.renderBoxes()}
                </Layout>
            </>
        )
    }
}
