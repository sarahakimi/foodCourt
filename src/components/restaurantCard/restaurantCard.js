import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import {useCookies} from "react-cookie";

function RestaurantCard({restaurant, setCookieChange}) {
    const {title, logo, id} = restaurant
    const [cookies, setCookie, removeCookie] = useCookies(['favorites']);
    const onClickBookmark = () => {
        if (Object.keys(cookies).length === 0) {
            setCookie("favorites", id)
            setCookieChange(true)
        } else {
            const prevValue = cookies.favorites.split(" ")
            if (!prevValue.includes(id.toString())) {
                removeCookie(cookies.favorites)
                setCookie("favorites", `${prevValue} ${id}`)
                setCookieChange(true)
            } else {
                removeCookie(cookies.favorites)
                const cookieValue = prevValue.filter((item) =>
                    item !== id.toString()
                ).join(" ")
                setCookie("favorites", cookieValue)
            }
        }


    }
    return (
        <div className="restaurant-card">
            <img src={logo} alt={title} className="restaurant-card--image"/>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button onClick={onClickBookmark} type="button" className="restaurant-card--bookmark"><FontAwesomeIcon
                icon={faBookmark}/></button>
            <p><b>{title}</b></p>
        </div>


    );
}

RestaurantCard.propTypes = {
    restaurant: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
    ]).isRequired,
    setCookieChange: PropTypes.func.isRequired

};

export default RestaurantCard;