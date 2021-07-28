import styled from 'styled-components'
import Potion from './Potion';



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
      height: 200px;
      display: flex;
      position: absolute;
      left: -300px;
      top: 557px;
      flex-wrap: wrap; 
    `;
    export default PotionsShelf;
    