import React, { Component } from 'react';
import Layout from '../components/layout';
import { NUMBERS, STEPS_AMOUNT } from '../constants/constants';
import Box from '../components/box';
import SideBar from '../components/sideBar';
import MoneyBox from '../components/moneyBox';

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

    renderLeftMoneyList = () => {
        let leftNumbers = [...NUMBERS].slice(0, 12);
        return leftNumbers.map(value => <MoneyBox key={value}
                                                  value={value}
                                                  animate={this.state.selectedValues.includes(value)}
                                                  reverse={true} />);
    };

    renderRightMoneyList = () => {
        let rightNumbers = [...NUMBERS].slice(12);
        return rightNumbers.map(value => <MoneyBox key={value}
                                                   value={value}
                                                   animate={this.state.selectedValues.includes(value)}
                                                   reverse={false} />);
    };

    render() {
        return (
            <>
                <div className="flex flex-row justify-center flex-nowrap">
                    <SideBar>
                        {this.renderLeftMoneyList()}
                    </SideBar>
                    <Layout>
                        {this.renderBoxes()}
                    </Layout>
                    <SideBar>
                        {this.renderRightMoneyList()}
                    </SideBar>
                </div>
            </>
        )
    }
}
