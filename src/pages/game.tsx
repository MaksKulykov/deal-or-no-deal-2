import React, { Component } from 'react';
import Modal from 'react-modal';
import Layout from '../components/layout';
import { COEFFICIENTS, NUMBERS, STEPS_AMOUNT } from '../constants/constants';
import Box from '../components/box';
import SideBar from '../components/sideBar';
import MoneyBox from '../components/moneyBox';
import Footer from '../components/footer';
import BankOfferModal from '../components/bankOfferModal/bankOfferModal';

interface GameProps {
    numbers: string[]
}

interface GameState {
    firstBoxNumber: number,
    firstBoxValue: string,
    selectedValues: string[],
    showModal: boolean,
    counter: number,
    isGameFinish: boolean
}

export class Game extends Component<GameProps, GameState> {

    state: GameState = {
        firstBoxNumber: 0,
        firstBoxValue: '',
        selectedValues: [],
        showModal: false,
        counter: 0,
        isGameFinish: false
    }

    componentDidMount() {
        Modal.setAppElement('body');
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

    renderMainBox = () => {
        return this.state.firstBoxNumber ?
            <Box key={'200001'}
                 value={this.state.firstBoxValue}
                 boxNumber={this.state.firstBoxNumber}
                 isGameFinish={this.state.isGameFinish}
                 disabled={true}/> : null;
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

    calcBankSum = () => {
        let sum = 0;
        let values = [...NUMBERS];
        values.forEach(value => {
            if (!this.state.selectedValues.includes(value)) {
                sum = sum + parseInt(value);
            }
        });
        let value = Math.round(sum / (NUMBERS.length - this.state.selectedValues.length) / COEFFICIENTS[this.state.counter]);
        return this.state.isGameFinish && this.state.selectedValues.length === 22 && this.state.counter === 7 ?
            String.fromCharCode(8364) + ' ' + this.state.firstBoxValue
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") :
            String.fromCharCode(8364) + ' ' + value.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    };

    calcBoxCounter = (arr: string[]) => {
        let x = arr.length;
        switch(x) {
            case 0:
                return 6;
            case 1:
                return 5;
            case 2:
                return 4;
            case 3:
                return 3;
            case 4:
                return 2;
            case 5:
                return 1;
            case 6:
                return 4;
            case 7:
                return 3;
            case 8:
                return 2;
            case 9:
                return 1;
            case 10:
                return 3;
            case 11:
                return 2;
            case 12:
                return 1;
            case 13:
                return 3;
            case 14:
                return 2;
            case 15:
                return 1;
            case 16:
                return 3;
            case 17:
                return 2;
            case 18:
                return 1;
            case 19:
                return 2;
            case 20:
                return 1;
            case 21:
                return 1;
            default:
                return 0
        }
    };

    handleCloseModal = () => {
        this.setState({showModal: false});
        this.setState({counter: this.state.counter + 1});
        if (this.state.selectedValues.length === 22) {
            this.openEndGameModal();
        }
    };

    handleEndGame = () => {
        this.setState({showModal: false});
        this.openEndGameModal();
    };

    openEndGameModal = () => {
        this.setState({isGameFinish: true});
        setTimeout(() => this.setState({showModal: true}), 2000);
    };

    render() {
        return (
            <>
                <div className="flex flex-row justify-center flex-nowrap overflow-hidden bg-gamePageBack"
                     data-testid="game-component">
                    <SideBar>
                        {this.renderLeftMoneyList()}
                    </SideBar>
                    <Layout>
                        {this.renderBoxes()}
                        <Footer disabled={this.state.showModal || this.state.isGameFinish}
                                boxCounter={this.state.firstBoxNumber ? this.calcBoxCounter(this.state.selectedValues) : 1}>
                            {this.renderMainBox()}
                        </Footer>
                    </Layout>
                    <SideBar>
                        {this.renderRightMoneyList()}
                    </SideBar>
                </div>
                <BankOfferModal isOpen={this.state.showModal}
                                isGameFinish={this.state.isGameFinish}
                                calcBankSum={this.calcBankSum()}
                                handleCloseModal={this.handleCloseModal}
                                handleEndGame={this.handleEndGame} />
            </>
        )
    }
}
