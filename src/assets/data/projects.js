import { v4 as uuidv4 } from 'uuid';
import RobotImg from '../images/robot.jpg';
import LocationImg from '../images/location.png';
import Lymphoblast from '../images/lymphoblast.jpg';
import CovidImg from '../images/covid.jpg';
import DictImg from '../images/dictionary.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Wi-Fi Positioning',
    desc: 'Framework Optimization of Fingerprint Method For Wi-Fi Indoor Positioning.',
    img: LocationImg,
  },
  {
    id: uuidv4(),
    name: 'Lymphoblast Counter',
    desc: 'API Development for Lymphoblast Server (Image Classification).',
    img: Lymphoblast,
  },
  {
    id: uuidv4(),
    name: 'Covid Monitoring',
    desc: 'Access Public API for Covid Monitoring Purposes. Tracking amount of cases.',
    img: CovidImg,
  },
  {
    id: uuidv4(),
    name: 'Dictionary Apps',
    desc: 'Help me find out synonyms and definition of a word. Single page web app.',
    img: DictImg,
  },
  {
    id: uuidv4(),
    name: 'ROS Noetic',
    desc: 'Turtlebot3 and mobile robot development run in ROS noetic 3.',
    img: RobotImg,
  },
];

export default projects;
