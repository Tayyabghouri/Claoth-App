import Directory from "../../directory/directory.component";

import hats from "../../../assets/hats.png";
import jackets from "../../../assets/jackets.png";
import sneakers from "../../../assets/sneakers.png";
import womens from "../../../assets/womens.png";
import mens from "../../../assets/men.png";


const Home = () => {
    const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl: hats,
        },
        {
            id: 2,
            title: "jackets",
            imageUrl: jackets,
        },
        {
            id: 3,
            title: "sneakers",
            imageUrl: sneakers,
        },
        {
            id: 4,
            title: "womens",
            imageUrl: womens,
        },
        {
            id: 5,
            title: "mens",
            imageUrl: mens,
        },
    ];
    return <Directory categories={categories} />

}
//testjf
export default Home;
