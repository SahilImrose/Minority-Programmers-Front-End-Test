import './ClassContent.css';
import ClassImg from './vid.PNG';

const ClassContent = (props) => {
  let vpos=props.idv * 170 + 50;
  return (
    <div className='class-content-container' style={{top:vpos}}>
      <img src={ClassImg} alt='class materials' className='class-img'/>
      {props.percent===100 ? 
        <div className='class-earn-btn'>
          <div className='class-earn-txt'>Complete</div>
        </div> : 
        props.percent===0 ? 
        <div className='class-earn-btn' style={{background:"#FFFFFF"}}>
          <div className='class-earn-txt' style={{color:'#676565', left:'56px'}}>Start</div> 
        </div> : 
        <div className='class-earn-btn' style={{background:"#FF655B"}}>
          <div className='class-earn-txt'>In Progress</div>
        </div>}
      <div className='class-content-title'>{props.title}</div>
    </div>
  );
}

export default ClassContent