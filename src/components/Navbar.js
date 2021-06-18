import { InstagramFill, LinkedInFill, FacebookFill, TwitterFill } from 'akar-icons';
import './Navbar.css';
import MPLogo from './logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
      <img src={MPLogo} alt='logo' className='logo-pos' /> 
      </Link>
      <InstagramFill className='icon-size insta-pos' />
      <LinkedInFill className='icon-size linked-pos' />
      <TwitterFill className='icon-size twitter-pos' />
      {/* Figure out how to get the dashicon one, maybe just do an svg */}
      <FacebookFill className='icon-size fb-pos' />
      <div className='navs'>
        <Link to='/incubator'>Incubator</Link>
        <Link to='/' className='navs-margin'>Events</Link>
        <Link to='/learn' className='navs-margin'>Learn</Link>
        <Link to='/' className='navs-margin'>Join</Link>
      </div>
    </div>

  );
}

export default Navbar;