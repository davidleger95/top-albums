import { CoverArt, BackgroundImages } from './img';

const albums = [
  {
    id: 'aventine',
    title: 'Aventine',
    artist: 'Agnes Obel',
    coverUrl: CoverArt.Aventine,
    bgUrl: 'https://i.ytimg.com/vi/dw_Kk7M59SA/maxresdefault.jpg',
    albumUrl: 'https://open.spotify.com/embed/album/0T6V4pt9LwYgrYTEQrjISP',
    review: '',
    colors: {
      primary: '#CD4103',
      secondary: '#2A0306',
      text: '#ffffff'
    }
  },
  {
    id: 'eye-of-providence',
    title: 'Eye of Providence',
    artist: 'The Agonist',
    bgUrl: 'https://www.ultimate-guitar.com/static/article/news/5/46365_0_wide_ver0.jpg',
    coverUrl: CoverArt.EyeOfProvidence,
    albumUrl: 'https://open.spotify.com/embed/album/78vhzovWhYjThOUmiW55ZI',
    review: '',
    lyrics: {
      content: `
        From the womb and through life <br />
        We're born and bread to just die<br />
        Can we redeem for our crimes?<br />
        Take all that's frozen in lies
      `,
      song: 'Danse Macabre'
    },
    colors: {
      primary: '#F0B924',
      secondary: '#33303B',
      text: '#D4D1DA'
    }
  },
  {
    id: 'imaginaerum',
    title: 'Imaginaerum',
    artist: 'Nightwish',
    coverUrl: CoverArt.Imaginaerum,
    bgUrl: BackgroundImages.Nightwish,
    albumUrl: 'https://open.spotify.com/embed/album/1yssEiclrpPwxfzpMyHaHb',
    review: '',
    colors: {
      primary: '#D6D6D6',
      secondary: '#29455A',
      text: '#F2F3F8'
    }
  },
  {
    id: 'into-your-lungs',
    title: 'Into Your Lungs (and around in your heart and on through your blood)',
    artist: 'Hey Rosetta!',
    bgUrl: 'http://www.heyrosetta.com/images/open-graph.jpg',
    coverUrl: CoverArt.IntoYourLungs,
    albumUrl: 'https://open.spotify.com/embed/album/3HX991kFppdRlBvKAmejt4',
    review: '',
    colors: {
      primary: '#113657',
      secondary: '#EDEDED',
      text: '#181816'
    }
  },
  {
    id: 'mothership',
    title: 'Mothership',
    artist: 'Dance Gavin Dance',
    bgUrl: 'http://brokeassstuart.com/wp-content/pictsnShit/2017/02/14141995_1160654840657313_2221211444340838659_n.jpg',
    coverUrl: CoverArt.Mothership,
    albumUrl: 'https://open.spotify.com/embed/album/1FSVYIieMIpJCWjucTjrao',
    review: '',
    colors: {
      primary: '#FEDF21',
      secondary: '#4A9B9B',
      text: '#fff'
    }
  },
  {
    id: 'skin-and-earth',
    title: 'Skin & Earth',
    artist: 'Lights',
    coverUrl: CoverArt.SkinAndEarth,
    bgUrl: BackgroundImages.Lights,
    albumUrl: 'https://open.spotify.com/embed/album/6s7WpIWoAG0LiBzQuuPh9o',
    review: '',
    lyrics: {
      content: `
        I was a knife in a gun fight <br />
        And I fought so madly<br />
        You were a wolf in the daylight<br />
        And you almost had me
      `,
      song: 'Almost Had Me'
    },
    colors: {
      primary: '#E85455',
      secondary: '#ECC6B3',
      text: '#4A4A4A'
    }
  },
  {
    id: 'sturm-und-drang',
    title: 'VII: Sturm Und Drang',
    artist: 'Lamb of God',
    bgUrl: 'http://www.metalinjection.net/wp-content/uploads/2014/12/Lamb-Of-God-new-album-2015.jpg',
    coverUrl: CoverArt.SturmUndDrang,
    albumUrl: 'https://open.spotify.com/embed/album/01Lg3FKNxZ0We36Exz8Q9V',
    review: '',
    lyrics: {
      content: `
        The time is slipping by no peace in sight<br />
        But the teeth of time still hold their bite
      `,
      song: '512'
    },
    colors: {
      primary: '#815732',
      secondary: '#E2C69A',
      text: '#575444'
    }
  },
  {
    id: 'thats-the-spirit',
    title: 'That\'s the Spirit',
    artist: 'Bring Me The Horizon',
    bgUrl: 'http://epitaph.com/media/artists/BringMeTheHorizon_MegaImage_D9gUvdy.jpg.1200x630_q90_crop.jpg',
    coverUrl: CoverArt.ThatsTheSpirit,
    albumUrl: 'https://open.spotify.com/embed/album/7FqHuAvmREiIwVXVpZ9ooP',
    review: '',
    colors: {
      primary: '#ffffff',
      secondary: '#000000',
      text: '#ffffff'
    }
  },
  {
    id: 'trouble-will-find-me',
    title: 'Trouble Will Find Me',
    artist: 'The National',
    bgUrl: 'http://2.bp.blogspot.com/-oFLG26c4Lqs/UwGTh9p2_fI/AAAAAAAAKs0/70e3YTbQtHQ/s1600/the-nationallead.jpg',
    coverUrl: CoverArt.TroubleWillFindMe,
    albumUrl: 'https://open.spotify.com/embed/album/2JhR4tjuc3MIKa8v2JaKze',
    review: '',
    colors: {
      primary: '#555555',
      secondary: '#eeeeee',
      text: '#222222'
    }
  },
  {
    id: 'two-parts-viper',
    title: 'Two Parts Viper',
    artist: '`68',
    bgUrl: 'http://metalnexus.net/wp-content/uploads/2017/08/1458634_207950419388109_514796493_n.jpg',
    coverUrl: CoverArt.TwoPartsViper,
    albumUrl: 'https://open.spotify.com/embed/album/5fLNoR3OoIbiNhYlkqxcDD',
    lyrics: {
      content: `
        I could have been anyone from anywhere <br />
        But I chose to be me from right here
      `,
      song: 'Whether Terrified or Unafraid'
    },
    review: '',
    colors: {
      primary: '#E2EC4B',
      secondary: '#F14772',
      text: '#fff'
    }
  },
  {
    id: 'x-infinity',
    title: 'x Infinity',
    artist: 'Watsky',
    bgUrl: 'http://www.themonolith.com/wp-content/uploads/Watsky-2016.jpg',
    coverUrl: CoverArt.xInfinity,
    albumUrl: 'https://open.spotify.com/embed/album/6CcTNttjHJN3WGR5igg4MR',
    review: '',
    colors: {
      primary: '#ED2124',
      secondary: '#C6E0DD',
      text: '#212226'
    }
  }
];

export default albums;
