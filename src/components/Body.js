import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData/";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {/*<RestaurentCard resName="Meghna Foods" cuisine="Biriyani, North Indian, Asian"/>
                <RestaurentCard resName="KFC" cuisine="Burger, Fast foods"/>*/}

                {
                    resList.map(restaurent => <RestaurentCard key={restaurent.card.card.info.id} resData={restaurent}/>)
                }
            </div>
        </div>
    )
}

export default Body