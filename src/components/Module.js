import './Module.css';

const Module = (props) => {
  let bar_width=props.percent * 450 / 100;
  let pos_v=props.id* 170-20;
  return (
    <div className='module' style={{top:pos_v}}>
      <div className='module-background'>
        <div className='module-earn-btn'>
          {/* checks to see if the module is completed or not */}
          {props.percent === 100 ? <div className='module-earn-btn-style'>
            <div className='module-earn-btn-txt'>Completed</div>
          </div> : <div className='module-earn-btn-style' style={{background:'#FF655B'}}>
            <div className='module-earn-btn-txt'>In Progress</div>
          </div>}
        </div>
        <div className='module-title'>{props.title}</div>
        <div className='module-bar'>
          <div className='module-bar-left'></div>
          <div className='module-bar-completed' style={{width:bar_width}}></div>
        </div>
        <div className='module-bar-txt'>{props.percent}% Completed</div>
      </div>
    </div>
  );
}

export default Module