import './Card.css';
import MSwapLogo from './mangoswap_logo.svg';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // get the width of the progress bar
  const pb_width = props.percent * 249.33 / 100;
  // get the position for the next card
  const pos_h = props.idh * 350;
  const pos_v = props.idv * 400;

  let link = '/startup/' + props.id;

  return (
    <div className='card' style={{left:pos_h, top:pos_v}}>
      <div className='card-container'>
        <div className='card-icon'>
          <img className='card-img' src={MSwapLogo} alt='mangoswap logo'></img>
        </div>
        <p className='card-title'>{props.title}</p>
        <p className='card-text'>{props.text}</p>
        <div className='card-funds'>
          <div className='card-funds-header'>
            <p className='card-funds-raised'>Fund raise</p>
            <p className='card-funds-percent'>{props.percent}% complete</p>
          </div>
          <p className='card-funds-amnt'>${props.raised}/${props.goal}</p>
          <div className='card-funds-bar'>
            <div className='card-funds-left'></div>
            <div className='card-funds-progress' style={{width:pb_width}}></div>
          </div>
        </div>
        <button className='card-fund-btn'><div className='card-fund-text'>Fund Startup</div></button>
        <div className='btn-placement'>
          <Link to={link} className='learn-btn-placement'>
            <button className='card-learn-btn'>
              <div className='card-learn-text'>Learn more</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;