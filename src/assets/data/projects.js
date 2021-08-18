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
    long_desc:
      'Framework optimization with use of hybrid clustering in offline stage and improved wknn algorithm in online stage fingerprint method wi-fi indoor positioning.',
    img: LocationImg,
    link: 'https://github.com/nichoteloo/Undergraduate-Thesis',
    prod: true,
  },
  {
    id: uuidv4(),
    name: 'Lymphoblast Counter',
    desc: 'API Development for Lymphoblast Server (Image Classification).',
    long_desc:
      'Create simplified API routing for retrieving images, build routing API for web app clients as well, deployed with docker. Use swagger UI as API documentation.',
    img: Lymphoblast,
    link: 'https://github.com/nichoteloo/API-Lymphoblast-Counter',
    prod: true,
  },
  {
    id: uuidv4(),
    name: 'Covid Monitoring',
    desc: 'Access Public API for Covid Monitoring Purposes. Tracking amount of cases.',
    long_desc:
      'Access Public API for Covid Monitoring Purposes. Searching total covid cases based on country. Display total number along with graph are visualized as well.',
    img: CovidImg,
    link: 'https://github.com/nichoteloo/Covid-Monitoring',
    prod: false,
  },
  {
    id: uuidv4(),
    name: 'Dictionary Apps',
    desc: 'Help me find out synonyms and definition of a word. Single page web app.',
    long_desc:
      'Initially was built because of the needs to find similiar word along with example of the sentence accompanies with it. For scientific paraphrasing tools.',
    img: DictImg,
    link: 'https://github.com/nichoteloo/Dictionary-Apps',
    prod: true,
  },
  {
    id: uuidv4(),
    name: 'ROS Noetic',
    desc: 'Turtlebot3 and mobile robot development run in ROS noetic 3.',
    long_desc:
      'ROS Noetic development. Building a robot from scratch. Run with Ubuntu 20.04 and ROS Noetic ecosystem. Already supported by Python 3 and Turtlebot 3 stack.',
    img: RobotImg,
    link: 'https://github.com/nichoteloo/ROS-Noetic-devel',
    prod: false,
  },
];

export default projects;
