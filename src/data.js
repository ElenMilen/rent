import house from './assets/images/house.png';
import house2 from './assets/images/house2.jpeg';
import house3 from './assets/images/house3.jpeg';
import house4 from './assets/images/house4.jpeg';
import house5 from './assets/images/house5.jpeg';

const data = [
    {
        id: 0,
        productImage: house,
        productTitle: 'Dreamsville Villa',
        productSubTitle: 'Jl. Sultan Iskandar Muda, Jakarta selatan',
        productRoomInfo: {bedroom:6, bathroom:4},
        type: "Villa",
        description: 'The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars',
        // ownerInfo: {image:url(), name: text, phone: number},
        // gallery: [image1, image2, image3, image4],
        // map: url(),
        price: 25000000000000,
    },
    {
        id: 1,
        productImage: house2,
        productTitle: 'Morning Glory Hotel',
        productSubTitle: 'Jl. Sultan Iskandar Muda, Jakarta selatan',
        productRoomInfo: {bedroom:6, bathroom:4},
        type: "Hotel",
        description: "This hotel has modern design, and a public pool for many customers",
        // ownerInfo: {image:url(), name: text, phone: number},
        // gallery: [image1, image2, image3, image4],
        // map: url(),
        price: 500000000000,
    },
    {
        id: 2,
        productImage: house3,
        productTitle: 'Bogg View Home',
        productSubTitle: 'Jl. Sultan Iskandar Muda, Jakarta selatan',
        productRoomInfo: {bedroom:6, bathroom:4},
        type: "House",
        description: 'This 2 story house has a modern design, with a walkway down to the main door',
        // ownerInfo: {image:url(), name: text, phone: number},
        // gallery: [image1, image2, image3, image4],
        // map: url(),
        price: 30000000000,
    },
    {
        id: 3,
        productImage: house4,
        productTitle: 'Wonderland House',
        productSubTitle: 'Jl. Sultan Iskandar Muda, Jakarta selatan',
        productRoomInfo: {bedroom:6, bathroom:4},
        type: "House",
        description: 'This 2 story has takes on a modern yet colorful design, embodying the nature around it, with a concrete path around.',
        // ownerInfo: {image:url(), name: text, phone: number},
        // gallery: [image1, image2, image3, image4],
        // map: url(),
        price: 1,
    },
    {
        id: 4,
        productImage: house5,
        productTitle: 'The Last Resort',
        productSubTitle: 'Jl. Sultan Iskandar Muda, Jakarta selatan',
        productRoomInfo: {bedroom:6, bathroom:4},
        type: "Hotel",
        description: 'This spacious hotel majors in modern design, and is large and small enough to fit a group of any number. ',
        // ownerInfo: {image:url(), name: text, phone: number},
        // gallery: [image1, image2, image3, image4],
        // map: url(),
        price: 5000000000000000000.25,
    },
]

export default data;