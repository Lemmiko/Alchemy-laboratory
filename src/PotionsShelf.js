import styled from 'styled-components'
import Potion from './Potion';
import bg from './img/polka2.jpg'



const PotionsShelf = (props) => {
    const potions = props.potions;
    let i = 0
    return (
          <Wrapper>
            {potions.map((potion) => 
             <Potion id={i++}  
                     key={i++}
                     name={potion.name} 
                     img={potion.img} />
             )}
          </Wrapper>
      );
  
  }
    const Wrapper = styled.div `
      width: 500px;
      height: 150px;
      display: flex;
      align-items: center;
      background-image: url(${bg});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: fixed; 
      left: 0;
      bottom: 0;
      @media screen and (max-width: 450px) {
        width: 350px;
        height: 100px;
        position: fixed; 
        bottom: 0px;
        left: auto;
        right: auto;
  }
    `;
    export default PotionsShelf;
    