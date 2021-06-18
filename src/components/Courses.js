import './Courses.css';
import Course from './Course';

const Courses = (props) => {

  const mapcourses=(course)=> {
    let component= (<Course key={course.id} title={course.title} desc={course.desc} 
      progress={course.progress} modules={course.modules} percent={course.percent} id={course.id}/>)
    return component;
  }
  return (
    <div className='course-layout' style={{top:props.vpos}}>
      {props.courses.map((card) => mapcourses(card))}

    </div>
  );
}

export default Courses