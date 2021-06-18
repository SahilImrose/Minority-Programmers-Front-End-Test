import './CourseSidebar.css';
import CloseArrow from './close-sidebar.svg';
import { Link } from 'react-router-dom';

const CourseSidebar = ( { coursename } ) => {
  return (
    <div className='my-courses-sidebar'>
      <Link to='/learn'>
        <img src={CloseArrow} alt='close sidebar' className='close-sb-btn'></img>
      </Link>
      <div className='my-courses-sb-courses'>Courses</div>
      <div className='sb-current-course'>{coursename}</div>
      <div className='sb-week-header'>Week 1</div>
      <div className='circle-comp'><div className='checkmark'></div></div>
      <div className='sb-course-name'>Class</div>
      <div className='circle-comp' style={{top:'300px', backgroundColor:'#FFFFFF'}}><div className='checkmark' style={{borderBottom:'3.5px solid #676565', borderRight:'3.5px solid #676565'}}></div></div>
      <div className='sb-course-name' style={{top:'305px'}}>Class</div>
    </div>
  );
}

export default CourseSidebar