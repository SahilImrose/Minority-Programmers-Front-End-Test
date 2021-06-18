import Card from './Card'
import './Cards.css';

const Cards = (props) => {
  let v=0;
  let h=0;

  const cardmapping = (card) => {
    let component = (<Card key={card.id} id={card.id} title={card.title} text={card.text} percent={card.percent} raised={card.raised} 
      goal={card.goal} idh={h} idv={v} />);
    h=h+1;
    return component;
  }

  return (
    <div className='frame'>
      <div className='cards'>
        {props.card.map((card) => cardmapping(card))}
      </div>
    </div>
  );
}

export default Cards