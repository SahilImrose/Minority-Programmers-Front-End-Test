import Card from './Card';
import './CardTiles.css';


const CardTiles = (props) => {
  let h=1;
  let v=0;

  const mapping = (card) => {
    let component = (<Card key={card.id} id={card.id} title={card.title} text={card.text} percent={card.percent} 
          raised={card.raised} goal={card.goal} idh={h} idv={v}/>);
    if (h===2){
      h=0;
      v=v+1;
    }
    else {
      h=h+1;
    }
    return component;
  }
  return (
    <div className='tile-container'>
      {props.cards.map((card) => mapping(card))}
    </div>
  );
}

export default CardTiles;