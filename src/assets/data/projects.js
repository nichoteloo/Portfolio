import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Wi-Fi Positioning',
    desc: 'Framework Optimization of Fingerprint Method For Wi-Fi Indoor Positioning.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Lymphoblast Counter',
    desc: 'API Development for Lymphoblast Server (Image Classification).',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Covid Monitoring',
    desc: 'Access Public API for Covid Monitoring Purposes.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Dictionary Apps',
    desc: 'Help me find out synonyms of a word.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'ROS Noetic',
    desc: 'Turtlebot3 and mobile robot development run in ROS noetic 3.',
    img: ProjectImg,
  },
];

export default projects;
