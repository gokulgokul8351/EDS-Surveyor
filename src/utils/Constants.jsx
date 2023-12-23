import { FaLaptop } from 'react-icons/fa'
import landSurveyImg from '../assets/bgimg/sur07.png'
import roadSurveyImg from '../assets/bgimg/road.png'
import infraSurveyImg from '../assets/bgimg/alignment-verification-survey-1024x755.png'
import buildSurveyImg from '../assets/bgimg/topo.png'
import topographySurveyImg from '../assets/bgimg/toponew.png'
import boundSurveyImg from '../assets/bgimg/boundary-survey.png'
import viewSurveyImg from '../assets/bgimg/virtual-mapping-1320x925.png'
import levlImg from '../assets/bgimg/leveling-survey-1024x683.png'
import modelSurveyImg from '../assets/bgimg/planingnew.png'
import docImg from '../assets/bgimg/document-verification-survey-1024x703.png'
import droneImg from '../assets/bgimg/drone-mapping-1024x896.png'
import geoImg from '../assets/bgimg/geotechnicalinvestigation-1024x769.png'

export const work = [
  {
    id: 1,
    title: 'Land Survey',
    icon: landSurveyImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '220px',
  },
  {
    id: 2,
    title: 'Road Survey',
    icon: roadSurveyImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '190px',
  },
  {
    id: 3,
    title: 'Infrastructure Survey',
    icon: infraSurveyImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '200px',
    height: '180px',
  },
  {
    id: 4,
    title: 'Building & Plot Marking',
    icon: buildSurveyImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '160px',
  },
  {
    id: 5,
    title: 'Topographical Survey',
    icon: topographySurveyImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '180px',
  },
  {
    id: 6,
    title: 'Boundary Survey',
    icon: boundSurveyImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '220px',
  },

  {
    id: 7,
    title: '360 Survey',
    icon: viewSurveyImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '200px',
  },

  {
    id: 8,
    title: 'Leveling Survey',
    icon: levlImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '200px',
  },
  {
    id: 9,
    title: 'Planing',
    icon: modelSurveyImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '180px',
  },
  {
    id: 10,
    title: 'Document Verification',
    icon: docImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '200px',
  },
  {
    id: 11,
    title: 'Drone Mapping',
    icon: droneImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '180px',
  },
  {
    id: 12,
    title: 'Geo Investigation',
    icon: geoImg,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia architecto nam sint voluptatum beatae.',
    width: '200px',
  },
]

// work flow
import Heart from './Heart'
import { IoIosArrowForward } from 'react-icons/io'

export const workFlowChat = [
  {
    id: 1,
    title: 'Ideation',
    content: `Let's start work flow stages on discussion with clint`,
    bg: ' bg-red-400 ',
    arrow: <IoIosArrowForward />,
  },
  {
    id: 2,
    title: 'Explanation',
    content: `Let's start work flow stages on discussion with clint`,
    bg: ' bg-blue-400 ',
    arrow: <IoIosArrowForward />,
  },
  {
    id: 3,
    title: 'Field Work',
    content: `Let's start work flow stages on discussion with clint`,
    bg: ' bg-yellow-400 ',
    arrow: <IoIosArrowForward />,
  },
  {
    id: 4,
    title: 'Complete',
    content: `Successfully work finish   `,
    heart: <Heart />,
    bg: ' bg-green-400 ',
  },
]
