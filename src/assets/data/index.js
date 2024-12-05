const data = [
  {
    id: 1,
    avatarLabel: 'JD',
    userName: 'John Doe',
    userHandle: '@johndoe',
    profileImage: require('../profile1.jpg'), // Added profile image

    time: '2h',
    text: 'Arsenal looking strong this season! Top of the league and playing beautiful football ⚽️ #AFC #PremierLeague',
    images: [require('../pic1.jpg')],
    type: 'singleImage',
  },
  {
    id: 2,
    avatarLabel: 'AS',
    userName: 'Alice Smith',
    userHandle: '@alicedev',
    profileImage: require('../profile2.jpg'), // Added profile image

    time: '4h',
    text: 'Breaking: Former President Trump makes headlines again with latest statements at campaign rally',
    images: [require('../pic2.jpg'), require('../pic5.jpg')],
    type: 'twoImages',
  },
  {
    id: 3,
    avatarLabel: 'MJ',
    userName: 'Mike Johnson',
    userHandle: '@mikej',
    profileImage: require('../profile3.jpg'), // Added profile image

    time: '6h',
    text: 'The crypto market is buzzing! XRP showing strong momentum after recent developments 📈 #crypto #XRP',
    images: [require('../pic3.jpg')],
    type: 'singleImage',
  },
  {
    id: 4,
    avatarLabel: 'SK',
    userName: 'Sarah Kim',
    userHandle: '@sarahk',
    time: '12h',
    profileImage: require('../profile4.jpg'), // Added profile image

    text: 'Kanye West spotted at Paris Fashion Week! New album rumors circulating 🎵 #Ye #Fashion',
    images: [require('../pic4.jpg')],
    type: 'singleImage',
  },
  {
    id: 5,
    avatarLabel: 'TP',
    userName: 'Tom Parker',
    userHandle: '@tomp',
    profileImage: require('../profile5.jpg'), // Added profile image

    time: '1d',
    text: 'These Arsenal games are giving me heart attacks! But what a season so far! ⚽️ #COYG',
    reply: {
      avatarLabel: 'RB',
      userName: 'Rachel Brown',
      userHandle: '@rachelb',
      time: '23h',
      text: 'Arteta has really transformed this team! Title contenders for sure 🏆',
      profileImage: require('../profile6.jpg'), // Added profile image
    },
    type: 'reply',
  },
  {
    id: 6,
    avatarLabel: 'EW',
    userName: 'Emma Wilson',
    userHandle: '@emmaw',
    time: '3d',
    profileImage: require('../profile6.jpg'), // Added profile image

    text: 'XRP price predictions for 2024? The charts are looking interesting! 📊 #crypto #XRPArmy',
    images: [require('../pic3.jpg')],
    type: 'singleImage',
  },
];

export default data;
