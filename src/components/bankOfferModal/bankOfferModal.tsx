import React from 'react';
import Modal from 'react-modal';

import './bankOfferModal.css';

interface BankOfferModalProps {
    isOpen: boolean,
    isGameFinish: boolean,
    calcBankSum: string,
    handleCloseModal: () => void,
    handleEndGame: () => void
}

const BankOfferModal: React.FC<BankOfferModalProps> = ({isOpen, isGameFinish, calcBankSum, handleCloseModal, handleEndGame}) => {
    return (
        <Modal
            isOpen={isOpen}
            style={modalStyles}
            closeTimeoutMS={300}
        >
            <div className="text-center text-5xl">
                {isGameFinish ? 'CONGRATULATIONS!' : 'BANK\'S OFFER'}
            </div>
            <div className="text-center text-5xl font-bold">
                {isGameFinish ? 'YOU WON' : calcBankSum}
            </div>
            <div className={`flex flex-row flex-nowrap ${isGameFinish ? 'justify-center' : 'justify-between'}`}>
                {
                    isGameFinish ?
                        <div className="font-bold text-8xl">
                            {calcBankSum}
                        </div> :
                        <>
                            <div onClick={handleEndGame}
                                 className="w-[40%] border-none rounded px-8 py-4 font-bold text-xl text-boxValPr
                                 bg-gradient-to-b from-buttonPr to-buttonSec hover:bg-gradient-to-b hover:from-buttonSec
                                 hover:to-buttonPr text-center cursor-pointer">
                                DEAL
                            </div>
                            <div onClick={handleCloseModal}
                                 className="w-[40%] border-none rounded px-8 py-4 font-bold text-xl text-boxValPr
                                 bg-gradient-to-b from-buttonPr to-buttonSec hover:bg-gradient-to-b hover:from-buttonSec
                                 hover:to-buttonPr text-center cursor-pointer">
                                NO DEAL
                            </div>
                        </>
                }
            </div>
        </Modal>
    );
};

export default BankOfferModal;

const modalStyles: Modal.Styles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: '50'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '550px',
        width: '100%',
        maxHeight: '360px',
        height: '100%',
        padding: '16px',
        paddingBottom: '16px',
        background: 'linear-gradient(#ffd700,#b8860b)',
        border: 'none',
        borderRadius: '8px'
    }
};
