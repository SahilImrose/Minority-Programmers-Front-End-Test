import Cards from './Cards';
import CardTiles from './CardTiles';
import AdviseImg from './advice_a_startup.svg';
import CohortImg from './join_cohort.svg';
import HelpCodeImg from './help_code.svg';
import InvestImg from './Invest.svg';
import './Incubator.css';

const Incubator = (props) => {

  let helpcode="Help <Code/>"
  return(
    <div className='gradient'>
      <div>
        <img src={InvestImg} className='invest-img' alt='invest img' />
        <div className='invest-box'>
          <p className='invest-txt'>Invest directly into minority innovations.</p>
          <button className='invest-btn'><p className='invest-btn-txt'>View Startups</p></button>
        </div>
      </div>
      <div className='startup-container featured'>
        <p className='startup-head'>Featured Startups</p>
        <p className='startup-txt'>Invest in the next billion dollar company today</p>
      </div>
      <Cards card={props.data.cards}/>
      <div className='ad_a_start-container'>
        <img src={AdviseImg} className='ad-a-start-img' alt='advice a startup img' />
        <div className='ad-a-start-border'>
          <p className='ad-a-start-txt'>Advice a startup</p>
        </div>
      </div>
      <div className='join-cohort-container'>
        <img src={CohortImg} className='join-cohort-img' alt='join minority ventures cohort img' />
        <div className='join-cohort-border'>
          <p className='join-cohort-txt'>Join Minority Ventures Cohort</p>
        </div>
      </div>
      <div className='help-code-container'>
        <img src={HelpCodeImg} className='help-code-img' alt='help code img' />
        <div className='help-code-border'>
          <p className='help-code-txt'>{helpcode}</p>
        </div>
      </div>
      <div className='startup-container upcoming'>
        <p className='startup-head' style={{width:'347px',margin: '0px 0px'}}>Upcoming Startups</p>
        <p className='upcoming-startup-txt'>These visionary companies and disruptors are on their journey to change the world.</p>
      </div>
      
      <CardTiles cards={props.data.tiles}/>
      <button className='load-btn'><p className='load-txt'>Load More</p></button>
    </div>

  );
}

export default Incubator;