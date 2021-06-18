import './Home.css';
import { Link } from 'react-router-dom';

const Home = ( {courses}) => {
  return (
    <div className='home-container'>
      <div className='home-header'>Minority Programmers Association</div>
      <div className='home-incu-container'>
        <div className='incu-gradient'>
          <div className='home-subheader' style={{left:'80px'}}>Interested in startups?</div>
          <div className='home-txt' style={{left:'80px'}}>We have several <span className='gradient-font'>amazing</span> startup opportunities posted on our incubator page!</div>
          <Link to='/incubator'>
            <button className='home-learn-btn' style={{left:'80px'}}><div className='home-learn-btn-txt'>Learn More</div></button>
          </Link>
        </div>
      </div>
      <div className='home-class-container'>
        <div className='class-gradient'>
          <div className='home-subheader' style={{right:'80px'}}>Interested in taking a class?</div>
          <div className='home-txt' style={{right:'80px', textAlign:'right'}}>We have several <span className='gradient-font'>amazing</span> programming classes available on our learning page!</div>
          <Link to='/learn'>
            <button className='home-learn-btn' style={{right:'80px'}}><div className='home-learn-btn-txt'>Learn More</div></button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;