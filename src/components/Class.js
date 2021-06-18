import './Class.css';
import CourseSidebar from './CourseSidebar';
import ClassContent from './ClassContent';
import { Link } from 'react-router-dom';


const Class = (props) => {
  const { id } = props.match.params;
  const { mod } = props.match.params;
  
  let currclass = props.data.courses.filter(comp => comp.id === id)[0];
  let currmod = currclass.classes.filter(comp => comp.id===mod)[0];

  let prog = currmod.percent*692.66/100;

  let idv=0;

  const mappingclasses = (module) => {
    let activitylink = '/activity/' + id+'/'+mod + '/' + module.id;
    let component = (
    <Link to={activitylink} key={module.id}>
      <ClassContent idv={idv} title={module.title} percent={module.percent}/>
    </Link>
    );
    idv=idv+1;
    return component;
  }

  return (
    <div className='class-container'>
      <CourseSidebar coursename={currclass.title} />
      <div className='week-header'>Week {currmod.week}</div>
      <div className='progress-header'>Progress</div>
      <div className='num-complete'>{currmod.finished}/{currmod.tasks}</div>
      <div className='class-prog-bar'>
        <div className='class-prog-left'></div>
        <div className='class-prog-finished' style={{width:prog}}></div>
      </div>
      <div className='class-percentage'>{currmod.percent}% Complete</div>
      <div className='activities-container'>
        {currmod.modules.map((module) => mappingclasses(module))}
      </div>
    </div>
  );
}

export default Class