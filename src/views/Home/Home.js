import React, {useEffect, useState} from 'react';
import http from "services/http";
import "./style.scss"
import {useCookies} from "react-cookie";
import RestaurantCard from "components/restaurantCard/restaurantCard";


function Home() {
    const [data, setData] = useState([]);
    const [restaurants, setRestaurants] = useState([])
    const [cookies] = useCookies(['favorites'])
    const [, setCookieChange]=useState(false)
    useEffect(() => {
        const cookie=Object.keys(cookies).length === 0? []: cookies.favorites.split(" ")
        setCookieChange(false)
        http.get("/foodcourt/url_title/ArgTajrish/").then(response => {
            setData(response.data)
            http.get("/foodcourtrests/", {"food_court": response.data.id}).then(res => {
                setRestaurants(res.data.results.map(element => {
                    const bookmark = cookie.includes(element.restaurant.id.toString()) ? 1 : 0
                    return {...element.restaurant, ...{"favorite": bookmark}}
                }))
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
            {/* eslint-disable-next-line no-nested-ternary */}
            {restaurants.length > 0 && restaurants.sort((a, b) => (a.favorite > b.favorite) ? 1 : ((b.favorite > a.favorite) ? -1 : 0)).map(restaurant =>
                <RestaurantCard restaurant={restaurant}
                                key={restaurant.id} setCookieChange={setCookieChange}/>)}
        </div>


    </div>;
}

export default Home;