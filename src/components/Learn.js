import './Learn.css';
import Globe from './Globe.svg';
import Arrow from './arrow.svg';
import Courses from './Courses';

const Learn = ( {courses}) => {
  return (
    <div className='learn'>
      <img src={Globe} alt='globe art' className='globe-img' />
      <div className='desc'>
        <p className='desc-txt'>Learn high in demand IT Skills & Get Crypto</p>
        <p className='desc-subtext'>powered by <span style={{color:'black'}}>KoinStreet</span></p>
      </div>
      <div className='blue-bkg'>
        <div className='search'>
          <input className='search-bar' placeholder='What event are you looking for?'/>
          <button className= 'filter-btn'><p className='filter-btn-txt'>Filter search</p></button>
        </div>
        <p className='my-courses-txt'>My Courses</p>
        <div className='learn-course-bar'>
          <div className='course-line'></div>
          <img src={Arrow} className='course-arrow-left' alt='left arrow'/>
          <img src={Arrow} className='course-arrow-right' alt='right arrow'/>
        </div>
        <Courses courses={courses} vpos={225}/>
        <p className='my-courses-txt' style={{top:500}}>Featured Courses</p>
        <div className='learn-course-bar' style={{top:575}}>
          <div className='course-line' style={{left:80, width:720}}></div>
          <img src={Arrow} className='course-arrow-left' alt='left arrow'/>
          <img src={Arrow} className='course-arrow-right' alt='right arrow'/>
        </div>
        <Courses courses={courses} vpos={635}/>
        <button className='load-more'><div className='load-more-txt'>Load more</div></button>
      </div>
    </div>
  );
}

export default Learn;