import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: () => void; 
}

export function NewTransactionModal({ isOpen,onRequestClose } : NewTransactionModalProps) {
    //create state from each input from form
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');    

    //create state for type transaction for control button click
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log({
            title,
            value,
            category,
            type
        })
    }

    return (
        <Modal isOpen={isOpen} 
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content">

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>  
                <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))} />
                <TransactionTypeContainer>

                    <RadioBox 
                        type='button'
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                        activeColor="green">
                        
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                    </RadioBox>

                    <RadioBox 
                        type='button'
                        onClick={() => {setType('witdraw');}}
                        isActive={type === 'witdraw'}
                        activeColor="red">
                            <img src={outcomeImg} alt="Saida" />
                            <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}