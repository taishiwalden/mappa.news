// this is for the UNDERWATER CITIES scrollytelling map

var config = {
    style: "mapbox://styles/taishiwalden/cl0h4z6dg004u15m6i0j5jkh6", //TODO
    accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
    title: "The First 12 Major Cities to go Underwater", //TODO
    subtitle: "Ranked by Population Size", //TODO
    byline: "By Taishi Walden", //TODO
    footer: "©2022 Taishi Walden",
    showMarkers: false,
    theme: "light",
    alignment: "left",
    chapters: [
        //Overview
        {
            id: "48d352fe5c88b29680f9ce8d7a233191", //ID's should be unique
            title: "Overview",
            description:
                "There is little doubt our oceans are rising and cities will go under. It is no longer an issue of if but when. No one can predict exactly when, however, based on simple elevation maps, we can predict which major world cities are most likely to be underwater first. The maps we show depict the impact once sea levels rise 1.5 meters (5 ft) which is likely should global temperatures increase by 3°C (5.4°F).",
            location: {
                center: [2.65, 9.22],
                zoom: 1.08,
                pitch: 0,
                bearing: 0,
            },
        },

        //1. Tokyo, Japan           The start of           "UNDERWATER CITIES"
        {
            id: "5c76ad75992aaac989465955479e2fb4",
            title: "1. Tokyo, Japan",
            description:
                "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. POP SIZE: 37.43 million || ELEVATION: 131 ft",
            location: {
                center: [139.77034, 35.69222],
                zoom: 10.4,
                pitch: 48.0,
                bearing: 11.2,
            },
        },

        //2. Osaka, Japan
        {
            id: "7ba8dfb2d8196a463676254236476581",
            title: "2. Osaka, Japan",
            description:
                "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food. POPULATION SIZE: 19.22 million || ELEVATION: 123 ft",
            location: {
                center: [135.39508, 34.66246],
                zoom: 9.25,
                pitch: 47.0,
                bearing: 18.4,
            },
        },
        //3. New York City, USA
        {
            id: "9e34f44c4e4aa2afecbf0e85c16e72af",
            title: "3. New York City, USA",
            description:
                "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. POPULATION SIZE: 20.15 million || ELEVATION: 33 ft",
            location: {
                center: [-73.98032, 40.70273],
                zoom: 10.2,
                pitch: 43.5,
                bearing: 0,
            },
        },
        //4. Mumbai, India
        {
            id: "qatbspsiyczc7r1pu4zqkrgru08du0g7",
            title: "4. Mumbai, India",
            description:
                "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. The city's also famous as the heart of the Bollywood film industry. POPULATION SIZE: 20.19 million || ELEVATION: 46 ft",
            location: {
                center: [72.85287, 19.02606],
                zoom: 10.47,
                pitch: 49.5,
                bearing: 17.6,
            },
        },
        //5. Kolkata, India
        {
            id: "ra7514ik8muffrpz80l1rl839291e1pi",
            title: "5. Kolkata, India",
            description:
                "Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. POPULATION SIZE: 15 million || ELEVATION: 30 ft",
            location: {
                center: [88.34671, 22.53969],
                zoom: 11.49,
                pitch: 0,
                bearing: 0,
            },
        },
        //6. Istanbul, Turkey
        {
            id: "bo1lysqbm6r8wu60e2e86nvmt1n5q8cl",
            title: "6. Istanbul, Turkey",
            description:
                "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. POPULATION SIZE: 15.2 million || ELEVATION: 131 ft",
            location: {
                center: [28.86177, 41.04056],
                zoom: 7,
                pitch: 0,
                bearing: 0,
            },
        },
        //7. Bangkok, Thailand
        {
            id: "qkvjpfpvj7d2e9uzvbxla01c5vp1k1g5",
            title: "7. Bangkok, Thailand",
            description:
                "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. POPULATION SIZE: 10.7 million || ELEVATION: 4.9 ft",
            location: {
                center: [100.51075, 13.70933],
                zoom: 9.56,
                pitch: 34,
                bearing: -8.81,
            },
        },
        //8. Jakarta, Indonesia
        {
            id: "b8wosQpXwGgGqgLXfPiSNWMWMHjczTGx",
            title: "8. Jakarta, Indonesia",
            description:
                "Jakarta, Indonesia's massive capital, sits on the northwest coast of the island of Java. A historic mix of cultures – Javanese, Malay, Chinese, Arab, Indian and European – has influenced its architecture, language and cuisine. POPULATION SIZE: 10.5 million || ELEVATION: 26 ft",
            location: {
                center: [106.43338, -6.03199],
                zoom: 8.28,
                pitch: 0,
                bearing: 0,
            },
        },
        //9. London, England
        {
            id: "hiF5Bl7YjwetWFZSRL2wchr48o55ubny",
            title: "9. London, England",
            description:
                "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. POPULATION SIZE: 9.5 million || ELEVATION: 36 ft",
            location: {
                center: [-0.13589, 51.51579],
                zoom: 9.47,
                pitch: 41,
                bearing: -30.4,
            },
        },
        //10. Dhaka, Bangladesh
        {
            id: "2Rle7YPkdEypnsQf13iYXn2kPsSGz3wf",
            title: "10. Dhaka, Bangladesh",
            description:
                "Dhaka is the capital city of Bangladesh, in southern Asia. Set beside the Buriganga River, it’s at the center of national government, trade and culture. POPULATION SIZE: 8.9 million || ELEVATION: 13 ft",
            location: {
                center: [90.40139, 23.79385],
                zoom: 5.63,
                pitch: 0,
                bearing: 0,
            },
        },
        //11. Ho Chi Min City, Vietnam
        {
            id: "VLlxVffj2zfwvWQI9nY8LxJq7ffHaIm9",
            title: "11. Ho Chi Min City, Vietnam",
            description:
                "Ho Chi Minh City, formerly known as Saigon, is the largest city in Vietnam, situated in the south. In the southeastern region, the city surrounds the Saigon River and covers about 2,061 km².. POPULATION SIZE: 8.8 million || ELEVATION: 63 ft",
            location: {
                center: [34.73083, 31.54817],
                zoom: 7.53,
                pitch: 25,
                bearing: 0,
            },
        },
        //12. San Francisco, USA
        {
            id: "ghKq6ksx5R7qPcmcpffA5AMPAVIOOKMB",
            title: "12. San Francisco, USA",
            description:
                "San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California.. POPULATION SIZE: 7.8 million || ELEVATION: 52 ft",
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
            description: "Over 185 million people (~3% of the world's population) will be affected by rising sea levels in the next several decades.",
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
