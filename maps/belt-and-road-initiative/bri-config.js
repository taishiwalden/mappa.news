// this is for the Belt And Road Initiative scrollytelling map

var config = {
  style: "mapbox://styles/taishiwalden/ckzovzbqj000714qnd5m3cdcm", //TODO
  accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
  title: "The Belt and Road Initiative", //TODO
  subtitle: "The New Silk Road", //TODO
  byline: "By Taishi Walden", //TODO
  footer: "©2022 Taishi Walden",
  showMarkers: false,
  theme: "light",
  alignment: "left",
  chapters: [
    //Afro-Eurasia Overview
    {
      id: "48d352fe5c88b29680f9ce8d7a233191",
      title: "Introduction",
      description:
        "The Belt and Road Initiative (BRI) is a global infrastructure development strategy initiated by the People's Republic of China (PRC) in 2013 to invest in nearly 70 countries and international organizations.",
      location: {
        center: [72.823, 23.852],
        zoom: 2.26,
        pitch: 0,
        bearing: 0,
      },
    },

    //THE NEW SILK ROAD: Zoom into Beijing, China
    {
      id: "5c76ad75992aaac989465955479e2fb4",
      title: "Beijing",
      description:
        "China’s President Xi Jinping unveiled The Initiative, officially stating that the BRI aims to 'promote the connectivity of Asian, European and African continents and their adjacent seas, establish and strengthen partnerships among the countries along the Belt and Road, set up all-dimensional, multi-tiered and composite connectivity networks, and realize diversified, independent, balanced and sustainable development in these countries.'",
      location: {
        center: [115.443, 40.054],
        zoom: 6.86,
        pitch: 0,
        bearing: 0,
      },
    },

    //THE NEW SILK ROAD: Xian, China            The start of           "THE NEW SILK ROAD"
    {
      id: "7ba8dfb2d8196a463676254236476581",
      title: "Xian, China",
      description:
        "The city of Xi'an has a long history as a crossroads for people from different parts of China, Central Asia, and the Middle East, due to its central location in the Shaanxi Province. Some analysts see the project as a disturbing expansion of Chinese power, and the United States has struggled to offer a competing vision.",
      location: {
        center: [103.706, 36.704],
        zoom: 4.98,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Almaty, Kazakhstan
    {
      id: "9e34f44c4e4aa2afecbf0e85c16e72af",
      title: "Almaty, Kazakhstan",
      description:
        "Kazakhstan is the world’s largest landlocked country, and the ninth largest in the world. It is also rich in mineral and gas deposits. It's geographical features and sheer longitude make it such an important part of the Belt and Road Initiative – it gives access across Eurasia to the Caspian nations and onto Europe via both Russia and Turkey, minimizing national border controls and maximizing rail connectivity.",
      location: {
        center: [72.558, 45.62],
        zoom: 5.19,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Samarkand, Uzekistan
    {
      id: "qatbspsiyczc7r1pu4zqkrgru08du0g7",
      title: "Samarkand, Uzekistan",
      description:
        "Uzbekistan is a resource-rich country with a relatively young population of 33 million, the largest in Central Asia. As a double landlocked country, it is uniquely dependent on these cross-border transport connections and on how well they work. It can also potentially be the largest market in Central Asia and given its sizeable young labor force and substantial agricultural and manufacturing capacity, a major regional exporter.",
      location: {
        center: [64.907, 40.488],
        zoom: 5.78,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Dushanbe, Tajikistan
    {
      id: "ra7514ik8muffrpz80l1rl839291e1pi",
      title: "Dushanbe, Tajikistan",
      description:
        "Tajikistan is the poorest country in the region despite strong growth for nearly two decades; sustaining growth in future will need substantially higher growth in private investment and exports. Its per capita income (GNI) is close to US$1,000 but nearly a third of its population, of around 9 million, live in poverty.",
      location: {
        center: [69.935, 38.483],
        zoom: 6.59,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Tehran, Iran
    {
      id: "bo1lysqbm6r8wu60e2e86nvmt1n5q8cl",
      title: "Tehran, Iran",
      description: "Add text here",
      location: {
        center: [51.216, 36.101],
        zoom: 7,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Istanbul, Turkey
    {
      id: "qkvjpfpvj7d2e9uzvbxla01c5vp1k1g5",
      title: "Istanbul, Turkey",
      description: "Add text here",
      location: {
        center: [29.572, 41.141],
        zoom: 7.19,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Moscow, Russia
    {
      id: "t8prwxafovqw4ieem0w1ymfmsqxazpav",
      title: "Moscow, Russia",
      description: "Add text here",
      location: {
        center: [34.487, 55.418],
        zoom: 4.17,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Dusseldorf, Germany
    {
      id: "nq6v66f45ow16xzfgo46zdo5o3a7lgo6",
      title: "Dusseldorf, Germany",
      description: "Add text here",
      location: {
        center: [3.056, 51.658],
        zoom: 5.02,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Venice, Italy            THE END OF            "THE NEW SILK ROAD"
    {
      id: "c2hd1f3zxj4jyq1lolqvptdblutdmuoh",
      title: "Venice, Italy",
      description: "Add text here",
      location: {
        center: [11.37, 45.634],
        zoom: 7.39,
        pitch: 0,
        bearing: 0,
      },
    },
  ],
};
