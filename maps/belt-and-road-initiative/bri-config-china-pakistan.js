// this is for the Belt And Road Initiative scrollytelling map
// The China Pakistan Corridor

var config = {
  style: "mapbox://styles/taishiwalden/ckzovzbqj000714qnd5m3cdcm", //TODO
  accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
  title: "The Belt and Road Initiative", //TODO
  subtitle: "China–Pakistan Economic Corridor (CPEC)", //TODO
  byline: "By Taishi Walden", //TODO
  footer: "©2022 Taishi Walden",
  showMarkers: false,
  theme: "light",
  alignment: "left",
  chapters: [
    //Afro-Eurasia Overview
    {
      id: "48d352fe5c88b29680f9ce8d7a233191",
      title: "What is the China Pakistan Corridor?",
      description:
        "Beginning in 2013, CPEC is a collection of infrastructure projects that are under construction through out the China-Pakistan region.  The value of CPEC projects is worth $62 billion as of 2020.",
      location: {
        center: [55.38174, 33.5322],
        zoom: 4,
        pitch: 38,
        bearing: 0,
      },
    },

    //CHINA PAKISTAN CORRIDOR: begin
    {
      id: "5c76ad75992aaac989465955479e2fb4",
      title: "Its Purpose",
      description:
        "The mission of this project is to upgrade Pakistan's required infrastructure and strengthen its economy. By expanding motorways, facilitating mass transit, and establishing special economic zones and energy production areas.",
      location: {
        center: [74.79029, 36.39985],
        zoom: 6,
        pitch: 43,
        bearing: 0,
      },
    },
    //THE NEW SILK ROAD: Islamabad, Pakistan
    {
      id: "t8prwxafovqw4ieem0w1ymfmsqxazpav",
      title: "Islamabad, Pakistan",
      description: "Add text here",
      location: {
        center: [68.10577, 27.22365],
        zoom: 6.3,
        pitch: 60,
        bearing: -12,
      },
    },
  ],
};
