import './Activity.css';
import CourseSidebar from './CourseSidebar';
import ClassImg from './vid.PNG';
import Arrow from './arrow.svg';

const Activity = (props) => {
  let loremipsum='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus' +
    'curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, ' +
    'tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas ' +
    'quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ' +
    'ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus ' +
    'tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis ' +
    'mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et ' +
    'non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus ' +
    'arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue ' +
    'at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus ' +
    'euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ' +
    'ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.';

    const { id } = props.match.params;
    const { mod } = props.match.params;
    const { act } = props.match.params;

    let currclass = props.data.courses.filter(comp => comp.id === id)[0];
    let currmod = currclass.classes.filter(comp => comp.id===mod)[0];
    let curract = currmod.modules.filter(comp => comp.id === act)[0];

  return (
    <div className='whole-page-container'>
      <div className='activity-container'>
        <CourseSidebar coursename={currclass.title}/>
        <div className='content-container'>
          <img src={ClassImg} alt='class material' className='material-img'></img>
        </div>

        <div className='info-container'>
          <img src={Arrow} alt='class material' className='activity-arrow'></img>
          <img src={Arrow} alt='class material' className='activity-arrow-right'></img>
          <div className='info-content'>
            <div className='activity-header'>Activity {curract.id} - {curract.title}</div>
            <div className='activity-time'>{curract.time}</div>
            <div className='activity-header' style={{top:'220px'}}>Header</div>
            <div className='info-txt'>{loremipsum}</div>
            <div className='activity-header' style={{top:'540px'}}>Header</div>
            <div className='info-txt' style={{top:'600px'}}>{loremipsum}</div>
          </div>

        </div>
      </div>
    </div>
    
  );
}

export default Activity