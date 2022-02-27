// this is for the 7 World Wonders scrollytelling map

var config = {
    style: "mapbox://styles/taishiwalden/cl05rca5l005i14p5nyakwibb", //TODO
    accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
    title: "The New 7 World Wonders", //TODO
    subtitle: "Here are the most unique structures in the world (2022)", //TODO
    byline: "By Taishi Walden", //TODO
    footer: "©2022 Taishi Walden",
    showMarkers: false,
    theme: "light",
    alignment: "left",
    chapters: [
        //Afro-Eurasia Overview
        {
            id: "48d352fe5c88b29680f9ce8d7a233191",
            title: "1. The Taj Mahal",
            description:
                "The Taj Mahal is known the world over for its beautiful architecture, history and the tale of love that led to its creation. ",
            location: {
                center: [78.042191, 27.173169],
                zoom: 2.26,
                pitch: 0,
                bearing: 0,
            },
        },

        //THE NEW SILK ROAD: Zoom into Beijing, China
        {
            id: "5c76ad75992aaac989465955479e2fb4",
            title: "2. The Colosseum",
            description:
                "Also known as the Flavian Amphitheatre, the Colosseum is an oval-shaped amphitheater located in the centre of Rome in Italy. It is the largest amphitheater in the world, and had the capacity to host about 80,000 spectators. In ancient times, it was used for gladiatorial contests and public spectacles such as mock sea battles.",
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
            description: "Add text here about Xian",
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
            description: "Add text here",
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
            description: "Add text here",
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
            description: "Add text here",
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
