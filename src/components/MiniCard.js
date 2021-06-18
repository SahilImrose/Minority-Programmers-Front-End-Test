import './MiniCard.css';
import MSwapLogo from './mangoswap_logo.svg';

const MiniCard = (props) => {
  let pos_h=35 + props.id*350;

  let pb_width=props.percent * 280.5 / 100;

  return (
    <div className='minicard' style={{left:pos_h}}>
      <div className='minicard-container'>
        <div className='minicard-header'>
          <div className='minicard-icon'>
            <img src={MSwapLogo} alt='mangoswap logo' className='minicard-img' />
          </div>
          <div className='minicard-header-txt'>{props.title}</div>
        </div>
        <div className='minicard-funds-container'>
          <div className='minicard-funds'>
            <div className='minicard-fund-head'>Funds raise</div>
            <div className='minicard-funds-complete'>{props.percent}% complete</div>
          </div>
          <div className='minicard-fund-amnt'>${props.raised}/${props.goal}</div>
          <div className='minicard-bar'>
            <div className='minicard-bar-left'></div>
            <div className='minicard-bar-progress' style={{width:pb_width}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniCard