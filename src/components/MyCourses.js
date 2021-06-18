import './MyCourses.css';
import Module from './Module';
import CourseSidebar from './CourseSidebar';
import ShotChar from './shot.svg';
import CircleBorder from './circle.svg';
import { Link } from 'react-router-dom';

const MyCourses = (props) => {
  const { id } = props.match.params;

  const mappingmodule = (mod) => {
    let modlink = '/class/'+id+'/'+mod.id;
    let component = (
      <Link to={modlink} key={mod.id}>
        <Module id={mod.id} title={mod.name} percent={mod.percent}/>
      </Link>
    );
    return component;
  }

  let currclass = props.data.courses.filter(comp => comp.id === id)[0];
  let unfinishedmod = currclass.classes.filter(comp=>comp.percent !== 100)[0];
  let link='/class/'+ id+'/'+ unfinishedmod.id;
  
  return(
    <div className='my-courses'>
      <CourseSidebar coursename={currclass.title}/>      

      <div className='my-courses-icon-container'>
        <img src={CircleBorder} alt='border' className='circle-border'></img>
        <img src={ShotChar} alt='character' className='char-icon'></img>
      </div>
      <div className='welcome-txt'>Welcome back, Shot</div>
      <div className='total-progress-txt'>75% Completed</div>
      <Link to={link}>
        <button className='resume-btn'><div className='resume-txt'>Resume</div></button>
      </Link>
      <div className='my-courses-container'>
        <div className='my-courses-header'>Modules</div>
        <div className='active-tab'></div>
        <div className='my-courses-header' style={{left:'300px', fontWeight:'500'}}>Calendar</div>
        <div className='my-courses-header' style={{left:'550px', fontWeight:'500'}}>Messages</div>
        {currclass.classes.map((modul) => mappingmodule(modul))}
      </div>
    </div>
  );
}

export default MyCourses