import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookmark} from "@fortawesome/free-solid-svg-icons";

function RestaurantCard({restaurant}) {
    const {title, logo, id} = restaurant
    const onClickBookmark = () => {
        console.log(id)

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