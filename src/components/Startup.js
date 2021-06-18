import './Startup.css';
import BackArrow from './back_arrow.svg';
import MGLogo from './mangoswap_logo.svg';
import BArrow from './black-arrow.svg';
import MiniCard from './MiniCard';
import { Link } from 'react-router-dom';


const Startup = (props) => {
  const { id } = props.match.params;
  let data=props.data;
  let startup = props.data.tiles.filter(comp => comp.id === id)[0];
  let pb_width = startup.percent * 250/100;

  let miniId=0;
  const minimapping = (card) => {
    let link = '/startup/' + card.id;
    let mini = (
      <Link to={link}>
      <MiniCard id={miniId} title={card.title} percent={card.percent} goal={card.goal} raised={card.raised}/>
      </Link>);
    miniId=miniId+1;
    return mini;
  }

  // makes sure the minicards arent a repeat of the current startup
  let minicards = data.cards.filter((card) => card.id !== id);
  return (
    <div className='gradient'>
      <div className='startup-header'>
        <div className='startup-header-title'>
          <Link to='/incubator'>
            <img src={BackArrow} alt='backarrow' className='startup-header-arrow'/>
          </Link>
          <div className='startup-header-icon'><img src={MGLogo} alt='mangoswap logo' className='startup-header-img'/></div>
          <div className='startup-header-txt'>{startup.title}</div>
        </div>
        <div className='startup-funds'>
          <div className='startup-funds-head'>Funds raised</div>
          <div className='startup-funds-complete'>{startup.percent}% complete</div>
          <div className='startup-funds-raised'>${startup.raised}/${startup.goal}</div>
        </div>
        <div className='startup-bar'>
          <div className='startup-bar-left'></div>
          <div className='startup-bar-progress' style={{width:pb_width}}></div>
        </div>
        <button className='startup-header-btn'><div className='startup-header-btn-txt'>Fund Startup</div></button>
      </div>
      <div className='left-info-box'>
        <div className='left-heading-founding'>Founded {startup.founded}</div>
        <div className='startup-line'></div>
        <div className='left-info-subheading'>Website</div>
        <a href={startup.website} className='left-info-website'>{startup.website}</a>
        <div className='left-info-subheading' style={{top:'175px'}}>Location</div>
        <div className='left-info-txt'>{startup.location}</div>
        <div className='left-info-subheading' style={{top:'260px'}}>Team Size</div>
        <div className='left-info-txt' style={{top:'285px'}}>{startup.size} people</div>
        <div className='startup-line' style={{top:'350px'}}></div>
        <div className='left-info-heading'>Meet the team</div>

        <div className='startup-line'></div>
        {/* <div className='left-info-heading'>Tags</div> */}
      </div>
      <div className='startup-info-box'>
        <div className='left-info-heading' style={{top:'20px'}}>About startup</div>
        <div className='startup-info-txt'>{data.Amet}</div>
        <div className='startup-line' style={{top:'290px'}}></div>
        <div className='left-info-heading' style={{top:'310px'}}>Vision</div>
        <div className='startup-info-txt' style={{top:'370px'}}>{data.Amet}</div>

      </div>
      <div className='startup-info-box' style={{top:'840px', height:'300px'}}>
        <img src={BArrow} className='left-black-arrow' alt='arrow'/>
        <img src={BArrow} className='right-black-arrow' alt='arrow'/>
        <div className='left-info-heading' style={{top:'20px'}}>Related startups</div>
        {minicards.map((card)=>minimapping(card))}
      </div>
    </div>
  );
}

export default Startup