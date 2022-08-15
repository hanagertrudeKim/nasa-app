import { Earth3dModel } from '../3dModel/Earth';
import { Jupiter3dModel } from '../3dModel/Jupiter';
import { Mars3dModel } from '../3dModel/Mars';
import { Mercury3dModel } from '../3dModel/Mercury';
import { Neptune3dModel } from '../3dModel/Neptune';
import { Saturn3dModel } from '../3dModel/Saturn';
import { Uranus3dModel } from '../3dModel/Uranus';
import { Venus3dModel } from '../3dModel/Venus';

const planets = [
  {
    name: 'Mercury',
    id: 1,
    image: '../../assets/image/mercury.png',
    explain:
      'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth Moon.',
    fullExplain:
      'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth Moon.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.',
    lengthOfYear: 88,
    planetType: 'Terrestrial',
    model: <Mercury3dModel />,
  },
  {
    name: 'Venus',
    id: 2,
    image: '../../assets/image/venus.png',
    explain:
      'Venus is the second planet from the Sun and is Earth is closest planetary neighbor. It is one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.',
    fullExplain:
      'Venus is the second planet from the Sun and is Earth is closest planetary neighbor. It is one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.',
    lengthOfYear: 225,
    planetType: 'Terrestrial',
    model: <Venus3dModel />,
  },
  {
    name: 'Earth',
    id: 3,
    image: '../../assets/image/earth.png',
    explain:
      'Earth—our home planet—is the only place we know of so far that is inhabited by living things. Its also the only planet in our solar system with liquid water on the surface.',
    fullExplain:
      'Our home planet is the third planet from the Sun, and the only place we know of so far that is inhabited by living things.While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.',
    lengthOfYear: 365,
    planetType: 'Terrestrial',
    model: <Earth3dModel />,
  },
  {
    name: 'Mars',
    id: 4,
    image: '../../assets/image/mars.png',
    explain:
      ' Mars is the fourth planet from the Sun a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.',
    fullExplain:
      ' Mars is the fourth planet from the Sun a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.Mars is one of the most explored bodies in our solar system, and its the only planet where we have sent rovers to roam the alien landscape.',
    lengthOfYear: 687,
    planetType: 'Terrestrial',
    model: <Mars3dModel />,
  },
  {
    name: 'Jupiter',
    id: 5,
    image: '../../assets/image/jupiter.png',
    explain:
      'Jupiter has a long history of surprising scientists all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
    fullExplain:
      'Jupiter has a long history of surprising scientists all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
    lengthOfYear: 4333,
    planetType: 'Gas Gient',
    model: <Jupiter3dModel />,
  },
  {
    name: 'Saturn',
    id: 6,
    image: '../../assets/image/saturn.png',
    explain:
      'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.',
    fullExplain:
      'Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn.',
    lengthOfYear: 10759,
    planetType: 'Gas Gient',
    model: <Saturn3dModel />,
  },
  {
    name: 'Uranus',
    id: 7,
    image: '../../assets/image/uranus.png',
    explain:
      'Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
    fullExplain:
      'Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
    lengthOfYear: 30687,
    planetType: 'Ice Gient',
    model: <Uranus3dModel />,
  },
  {
    name: 'Neptune',
    id: 8,
    image: '../../assets/image/neptune.png',
    explain:
      'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
    fullExplain:
      'Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.',
    lengthOfYear: 60190,
    planetType: 'Ice Gient',
    model: <Neptune3dModel />,
  },
];

export default planets;
