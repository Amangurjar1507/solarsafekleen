import imageIndex from '../../../../assets/imageIndex';
import svgIndex from '../../../../assets/svgIndex';

const UserProfileList = [
  {
    id: 1,
    name: 'Regitestion as a parther',
    icon: svgIndex.back,
    navigateTo: '',
    image: imageIndex.partener,
  },
  {
    id: 2,
    name: 'My Bokking',
    icon: svgIndex.back,
    navigateTo: '',
    image: imageIndex.booking,
  },
  {
    id: 3,
    name: 'Help Center',
    icon: svgIndex.back,
    navigateTo: '',
    image: imageIndex.question,
  },
  {
    id: 4,
    name: 'Share & Earn',
    icon: svgIndex.back,
    navigateTo: 'ShareFriend',
    image: imageIndex.shareUser,
  },
  {
    id: 5,
    name: 'Rate us',
    icon: svgIndex.back,
    navigateTo: '',
    image: imageIndex.star,
  },
  // {
  //   id: 6,
  //   name: 'FAQ us',
  //   icon: svgIndex.back,
  //   navigateTo: 'FaQ',
  //   image:imageIndex.star

  // },
  {
    id: 6,
    name: 'Prives us',
    icon: svgIndex.back,
    navigateTo: 'PrivacyPolicy',
    image: imageIndex.favourite,
  },
  {
    id: 7,
    name: 'Logout',
    icon: svgIndex.back,
    navigateTo: '',
    image: imageIndex.logout,
  },
];

export {UserProfileList};
