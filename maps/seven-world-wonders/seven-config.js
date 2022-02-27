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
        //Overview
        {
            id: "48d352fe5c88b29680f9ce8d7a233191",
            title: "Introduction",
            description:
                "Our world is filled with the most unique structures that are both man-made and natural. Some of the man-made creations include churches, tombs, temples, monuments, mosques, buildings and even cities. These structures have withstood the test of time and they continue to leave many awestruck with their brilliance. There are many in the world, but here are the 7 World Wonders as voted by 10 million people.",
            location: {
                center: [-35.016, 3.026],
                zoom: 1.87,
                pitch: 0,
                bearing: 0,
            },
        },

        //1. Taj Mahal           The start of           "THE 7 WORLD WONDERS"
        {
            id: "5c76ad75992aaac989465955479e2fb4",
            title: "1. The Taj Mahal",
            description:
                "The Taj Mahal is known the world over for its beautiful architecture, history and the tale of love that led to its creation. ",
            location: {
                center: [74.1, 26.286],
                zoom: 5.18,
                pitch: 0,
                bearing: 0,
            },
        },

        //2. The Colosseum
        {
            id: "7ba8dfb2d8196a463676254236476581",
            title: "2. The Colosseum",
            description:
                "Also known as the Flavian Amphitheatre, the Colosseum is an oval-shaped amphitheater located in the centre of Rome in Italy. It is the largest amphitheater in the world, and had the capacity to host about 80,000 spectators. In ancient times, it was used for gladiatorial contests and public spectacles such as mock sea battles.",
            location: {
                center: [12.47, 41.891],
                zoom: 12.49,
                pitch: 0,
                bearing: 0,
            },
        },
        //3. Chichen Itza
        {
            id: "9e34f44c4e4aa2afecbf0e85c16e72af",
            title: "3. Chichen Itza",
            description:
                "Chichen Itza is an archaeological site located in Tinum Municipality of Yucatan State in Mexico. It was a large pre-Columbian city built by the Maya people, and was likely to have been one of the mythical great cities. It is one of the most visited archaeological sites in Mexico, and consists of buildings like the El Caracol or observatory of Chichen Itza, Temple of the Warriors, Grand Ballcourt, Venus Platform, and others.",
            location: {
                center: [-90.66, 20.288],
                zoom: 5.48,
                pitch: 0,
                bearing: 0,
            },
        },
        //4. Machu Picchu
        {
            id: "qatbspsiyczc7r1pu4zqkrgru08du0g7",
            title: "4. Machu Picchu",
            description:
                "Located in the Eastern Cordillera of southern Peru on a 7,970 ft mountain ridge, Machu Picchu is a 15th-century Inca citadel. It is the most familiar icon of Inca civilization, and is often mistaken for the ‘Lost City of the Incas’.",
            location: {
                center: [-74.881, -13.203],
                zoom: 5.31,
                pitch: 0,
                bearing: 0,
            },
        },
        //5. Christ the Redeemer
        {
            id: "ra7514ik8muffrpz80l1rl839291e1pi",
            title: "5. Christ the Redeemer",
            description:
                "A very well known work of art in Brazil, Christ the Redeemer is an Art Deco statue of Jesus Christ. Made of reinforced concrete and soapstone, it weighs 635 metric tons and is located at the peak of the 700-metre Corcovado mountain in the Tijuca Forest National Park overlooking the city of Rio de Janeiro. Construction began in 1922 and it was completed in 1931.",
            location: {
                center: [15.712, 39.988],
                zoom: 13.29,
                pitch: 0,
                bearing: 0,
            },
        },
        //6. Petra, Jordan
        {
            id: "bo1lysqbm6r8wu60e2e86nvmt1n5q8cl",
            title: "6. Petra, Jordan",
            description: "Add text here",
            location: {
                center: [36.101, 51.216],
                zoom: 7,
                pitch: 0,
                bearing: 0,
            },
        },
        //7. the Great Wall of China
        {
            id: "qkvjpfpvj7d2e9uzvbxla01c5vp1k1g5",
            title: "7. the Great Wall of China",
            description: "Add text here",
            location: {
                center: [110.78, 40.198],
                zoom: 5.63,
                pitch: 0,
                bearing: 0,
            },
        },
        //Summary
        {
            id: "t8prwxafovqw4ieem0w1ymfmsqxazpav",
            title: "Summary",
            description: "Add text here",
            location: {
                center: [-35.016, 3.026],
                zoom: 1.87,
                pitch: 0,
                bearing: 0,
            },
        },
        //Credit
        {
            id: "nq6v66f45ow16xzfgo46zdo5o3a7lgo6",
            title: "Credit",
            description: "Add text here",
            location: {
                center: [-35.016, 3.026],
                zoom: 1.87,
                pitch: 0,
                bearing: 0,
            },
        },
    ],
};
