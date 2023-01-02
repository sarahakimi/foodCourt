import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

function RestaurantCard({restaurant}) {
    const {title, logo, id} = restaurant
    const onClickBookmark=()=>{
        console.log(id)
    }
    return (
        <div className="restaurant-card">
            <img src={logo} alt={title} className="restaurant-card--image"/>
            <button onClick={onClickBookmark} type="button"><p>&hearts;</p></button><p><b>{title}</b></p>
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