import React, { useState } from 'react';
import './MenuComponent.css';
import DishDetails from './DishdetailComponent';

const Menu = ({ dishes }) => {
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dish) => {
        setSelectedDish(dish);
    };

    const menu = dishes.map((dish) => {
        return (
            <div className="menu-item" key={dish.id} onClick={() => onDishSelect(dish)}>
                <img src={dish.image} alt={dish.name} className="menu-item-img" />
                <div className="menu-item-overlay">
                    <h3 className="menu-item-title">{dish.name}</h3>
                </div>
            </div>
        );
    });

    return (
        <div className="menu-container">
            <div className="menu-row">
                {menu}
            </div>
            {selectedDish && <DishDetails dish={selectedDish} />}
        </div>
    );
};

export default Menu;
