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
      margin-top: 5em;
      width: 600px;
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start ;
    `;
    export default PotionsShelf;
    