import React, { useContext } from 'react'
import styles from './FoodCategoriesPage.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextDemo } from './Contexts';


export default function FoodCategoriesPage(props) {
  const contextValue = useContext(ContextDemo)

  return (

    
        <div>
        {/* <div class={styles.heading}><b>Foods under this category</b></div> */}
        {/* <button class={styles.button}>Show restaurants under this category</button> */}
        <div>{contextValue}</div>
        
      {props.restaurants.map(restaurant =>
      <div>
        <br/>
        <Link to= {restaurant.restaurant_id.toString()}> 
                <div>Choose Restaurant {restaurant.restaurant_id}</div>
        </Link>
                <ul>ID: {restaurant.restaurant_id}</ul>
                <ul>Name: {restaurant.restaurant_name}</ul>
                <ul>Type: {restaurant.restaurant_type}</ul>
                <ul>Hours: {restaurant.open_hours}</ul>
                <ul>PriceLevel: {restaurant.price_level}</ul>
                <ul>Location: {restaurant.location}</ul>
                <br/>
      </div>
       )} 
 {/*        <div key={props.restaurant_id} >
                <ul>ID: {props.restaurant_id}</ul>
                <ul>Name: {props.restaurant_name}</ul>
                <ul>Type: {props.restaurant_type}</ul>
                <ul>Hours: {props.open_hours}</ul>
                <ul>PriceLevel: {props.price_level}</ul>
                <ul>Location: {props.location}</ul>
                <button onClick={() => setRestButton()}>Choose restaurant {props.restaurant_id}</button>
               
                </div> */}

        
       
            {/* <div className={styles.InfoContainer}>
              <div className={styles.scrolldiv}>
                <div className={styles.detailContainer}>
                <div>
                  <p>Food Name:<span>{props.dName}</span></p>
                  <p>Food gategory:<span>{props.dCategory}</span></p>
                  <p>Price:<span>{props.dPrice}</span></p>
                  <p>Restaurant:<span>{props.dRestaurant}</span></p>
                </div>
                <div>
                  <img className={styles.placeholder} src='restaurantPlaceHolderIcon.jpg' alt='picture'/>
                </div>
                </div>
              </div>
            </div> */}
 
        </div>
       
    )
}
