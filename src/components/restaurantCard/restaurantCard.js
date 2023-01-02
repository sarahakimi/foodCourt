import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import {useCookies} from "react-cookie";

function RestaurantCard({restaurant}) {
    const {title, logo, id} = restaurant
    const [cookies, setCookie, removeCookie] = useCookies(['favorites']);
    const onClickBookmark = () => {
        if (Object.keys(cookies).length === 0) {
            setCookie("favorites", id)
        } else {
            const prevValue = cookies.favorites
            if (!prevValue.split(" ").includes(id.toString())) {
                removeCookie(cookies.favorites)
                setCookie("favorites", `${prevValue} ${id}`)
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

};

export default RestaurantCard;