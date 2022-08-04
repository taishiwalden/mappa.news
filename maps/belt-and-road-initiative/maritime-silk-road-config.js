// this is for the Belt And Road Initiative scrollytelling map
// Maritime Silk road

var config = {
  style: "mapbox://styles/taishiwalden/ckzovzbqj000714qnd5m3cdcm", //TODO
  accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
  title: "The Belt and Road Initiative", //TODO
  subtitle: "The Maritime Silk Road", //TODO
  byline: "By Taishi Walden", //TODO
  footer: "©2022 Taishi Walden",
  showMarkers: false,
  theme: "light",
  alignment: "left",
  chapters: [
    //Afro-Eurasia Overview
    {
      id: "48d352fe5c88b29680f9ce8d7a233191",
      title: "What is the Maritime Silk Road?",
      description:
        "The Maritime Silk Road is a global infrastructure development strategy initiated by the People's Republic of China (PRC) in 2013 to invest in nearly 70 countries and international organizations.",
      location: {
        center: [116.5369, 19.68178],
        zoom: 3.73,
        pitch: 50,
        bearing: -13,
      },
    },

    //THE MARITIME SILK ROAD: Zoom into
    {
      id: "5c76ad75992aaac989465955479e2fb4",
      title: "Beijing",
      description:
        "A number of BRI projects are in strategic locations that suggest a geopolitical calculation. The Strait of Malacca, a high-traffic trade route that has been a source of tension between Malaysia and neighboring Singapore, has three BRI ports planned that will provide direct access to the route.",
      location: {
        center: [108.48802, 15.17283],
        zoom: 4.4,
        pitch: 53.0,
        bearing: 30,
      },
    },

    //THE MARITIME SILK ROAD:           The start of           "THE MARITIME SILK ROAD"
    {
      id: "7ba8dfb2d8196a463676254236476581",
      title: "Xian, China",
      description:
        "Although all ports are planned for commercial rather than military uses, the strategic implications of Chinese-funded ports in all of these disputed locations is enough to worry some that China’s presence in the region will grow beyond commercial ports alone.",
      location: {
        center: [104.02953, 2.20523],
        zoom: 5.1,
        pitch: 52.0,
        bearing: -28,
      },
    },
    //THE MARITIME SILK ROAD: Dhaka, Banglades
    {
      id: "9e34f44c4e4aa2afecbf0e85c16e72af",
      title: "Dhaka, Bangladesh",
      description:
        "In an environment of increasing tensions between the United States and China, it is not surprising that the more skeptical observers in Washington assume the BRI to be a strategy aimed at displacing the United States as the world’s dominant power and cementing China’s rise.",
      location: {
        center: [85.09811, 12.39397],
        zoom: 3.9,
        pitch: 0,
        bearing: 0,
      },
    },
    //THE MARITIME SILK ROAD: Sri Jayawardenepura Kotte, Sri Lanka
    {
      id: "qatbspsiyczc7r1pu4zqkrgru08du0g7",
      title: "Sri Jayawardenepura Kotte, Sri Lanka",
      description: "Add text here",
      location: {
        center: [73.77713, 8.49294],
        zoom: 4.75,
        pitch: 52,
        bearing: -25,
      },
    },
    //THE MARITIME SILK ROAD: Nairobi, Kenya
    {
      id: "ra7514ik8muffrpz80l1rl839291e1pi",
      title: "Nairobi, Kenya",
      description: "Add text here",
      location: {
        center: [33.27971, 5.40602],
        zoom: 3,
        pitch: 37,
        bearing: 21,
      },
    },
    //THE MARITIME SILK ROAD: Tehran, Iran
    {
      id: "bo1lysqbm6r8wu60e2e86nvmt1n5q8cl",
      title: "Tehran, Iran",
      description: "Add text here",
      location: {
        center: [34.43173, 22.82774],
        zoom: 4.45,
        pitch: 50,
        bearing: 60,
      },
    },
    //THE NEW SILK ROAD:        END OF THE       MAP SUMMARY
    {
      id: "qkvjpfpvj7d2e9uzvbxla01c5vp1k1g5",
      title: "Istanbul, Turkey",
      description: "Add text here",
      location: {
        center: [63.10605, 16.62753],
        zoom: 2.35,
        pitch: 0,
        bearing: 0,
      },
    },
  ],
};
