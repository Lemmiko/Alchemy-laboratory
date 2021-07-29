import styled from 'styled-components'
import img from './img/bigpeper.png'
        const Wrapper = styled.div`
 
        display: ${props => props.isToggle ? 'flex' : 'none'};
        width: 800px;
        height: 400px;
        font-size: 25px;
        background: url(${img}) no-repeat;
        background-size: 100% 100%;
        font-weight: 600;
        position: absolute;
        text-align: center;
        align-items: center;
        justify-content: space-evenly;
        z-index: 1000;
        top: 40%;
        left: -15%;
        p{
            margin: 100px;
        }
        @media screen and (max-width: 1200px) {
        width: 600px;
        height: 300px;
        font-size: 20px;
        top: 50%;
        left: 0%;
    }
        @media screen and (max-width: 850px) {
        width: 400px;
        height: 200px;
        font-size: 20px;
        top: 50%;
        left: 20%;
    }

    @media screen and (max-width: 600px) {
        width: 400px;
        height: 200px;
        font-size: 20px;
        top: 50%;
        left: 5%;
    }
        `
const Modal = (props) => {
    const modal = props.modal
    let createdText
    if (modal.isCreated) { 
        createdText = `Поздравляем, вы создали ${modal.potion.name}.`

    } else if(modal.isFull) {
        createdText = `На полке кончалось место, вы можете перезагрузить страницу и попробовать еще раз!`
    } else {
        createdText = `Вы просто перевели ингредиенты, попробуйте еще раз.`
    }
    return (
    <Wrapper isToggle={modal.isToggle} onClick={()=>{props.changeToggle()}}>
        {/* <button >X</button> */}
        <p>{createdText}</p>
    </Wrapper>
)
}

export default Modal