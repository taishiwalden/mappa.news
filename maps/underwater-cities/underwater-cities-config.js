// this is for the 7 World Wonders scrollytelling map

var config = {
    style: "mapbox://styles/taishiwalden/cl0h4z6dg004u15m6i0j5jkh6", //TODO
    accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
    title: "The First 12 Major Cities to go Underwater", //TODO
    subtitle: "Cities Ranked by Population", //TODO
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
                "There is little doubt our oceans are rising and cities will go under. It is no longer an issue of if but when. No one can predict exactly when, however, based on simple elevation maps, we can predict which major world cities are most likely to be underwater first.",
            location: {
                center: [2.65, 9.22],
                zoom: 1.08,
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
            description:
                "Originally known to its inhabitants as Raqmu, Petra is a historical and archaeological city in southern Jordan. It is believed that the area around Petra was inhabited as early as 7,000 BC, and the access to the city is through a 1.2-kilometre-long gorge called the Siq, which leads directly to the Khazneh. Petra is also called as ‘Rose City’ due to the colour of the stone from which it is carved.",
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
            description:
                "As the name suggests, it is located in China and the Great Wall is the collective name given to a series of fortification systems built across the borders of the country. The purpose of the Great Wall was to protect as well as mark the territories of the Chinese states and empires.",
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
            description:
                "Given that the original Seven Wonders list was compiled in the 2nd century BCE, it seemed time for an update. And after more than than 100 million votes were cast on the Internet or by text messaging, the final results, were met with cheers as well as some jeers—a number of prominent contenders, such as Kiyomizu Temple, failed to make the cut. What do you think?",
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
            description:
                "https://www.britannica.com/list/new-seven-wonders-of-the-world" +
                "https://www.india.com/travel/articles/all-you-need-to-know-about-the-seven-wonders-of-the-world-4009192/",
            location: {
                center: [-35.016, 3.026],
                zoom: 1.87,
                pitch: 0,
                bearing: 0,
            },
        },
    ],
};
