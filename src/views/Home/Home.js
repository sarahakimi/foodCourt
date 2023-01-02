import React, {useEffect, useState} from 'react';
import http from "services/http";
import "./style.scss"
import RestaurantCard from "../../components/restaurantCard/restaurantCard";

function Home() {
    const [data, setData] = useState([]);
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        http.get("/foodcourt/url_title/ArgTajrish/").then(response => {
            setData(response.data)
            http.get("/foodcourtrests/", {"food_court": response.data.id}).then(res => {
                // setData({...data, ...{restaurants: res.data.results}})
                setRestaurants(res.data.results.map(element => element.restaurant))
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    }, [setData]);

    return <div className="feeds">
        <div className="feeds--header">
            <img src={data.image} alt={data.title} className="feeds--image"/>
            <div className="feeds--header-text">
                <h1> {data.title}</h1>
                <p>{data.address}</p>
            </div>

        </div>
        <div className="feeds--content">
            {restaurants.length > 0 && restaurants.map(restaurant => <RestaurantCard restaurant={restaurant}
                                                                                     key={restaurant.id}/>)}
        </div>


    </div>;
}

export default Home;