
import React from "react";
import './ListItem.css'
import PropTypes from 'prop-types'


function ListItem({ /*restructuring*/
    image, 
    name, 
    text, 
    xLink
}) {
    
    return (
        <li className="list-item__wrapper">
            <img className="list-item__img" src={image} alt="Profile Picture" />
            <div>
                <h2 className="list-item__name">{name}</h2>
                <p className="list-item__text">{text}</p>
                <a href={xLink} className="list-item__btn" target='_blank'>Visit X page</a>
                
            </div>
        </li>
    )
}

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    text: PropTypes.string,
    xLink: PropTypes.string.isRequired,
}

ListItem.defaultProps = {
    name: 'Guest',
    text: 'One of the React creators'
}

export default ListItem