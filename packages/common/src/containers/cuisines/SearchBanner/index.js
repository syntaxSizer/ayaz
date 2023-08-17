import React from 'react';
import Wrapper from './style';

const DomainSection = () => {
  return (
    <Wrapper>
      <div className="gradient" />
      <div className="content-container">
        <div className="inner">
          <div className="recipe-search-form">
            <form action="/search" role="Search">
              <div className="form-group">
                <input
                  type="text"
                  name="q"
                  className="recipe"
                  placeholder="Search products"
                ></input>
              </div>
            </form>
          </div>
          <ul className="nav nav-pills">
            <li>
              <a href="/search?q=sukuma+wiki">Sukuma Wiki</a>
            </li>
            <li>
              <a href="/search?q=chapati">Chapati</a>
            </li>
            <li>
              <a href="/search?q=banana">Banana</a>
            </li>
            <li>
              <a href="/search?q=fish">Fish</a>
            </li>
            <li>
              <a href="/search?q=beans">Beans</a>
            </li>
            <li>
              <a href="/search?q=chicken">Chicken</a>
            </li>
            <li>
              <a href="/search?q=vegetarian">Vegetarian</a>
            </li>
            <li>
              <a href="/search?q=tea">Tea</a>
            </li>
            <li>
              <a href="/search?q=nbeef">Beef</a>
            </li>
            <li>
              <a href="/search?q=lunchbox">Lunchbox</a>
            </li>
            <li>
              <a href="/search?q=cakes">Cakes</a>
            </li>
            <li>
              <a href="/search?q=salad">Salad</a>
            </li>
            <li>
              <a href="/search?q=seafood">Seafood</a>
            </li>
            <li>
              <a href="/search?q=sausage">Sausage</a>
            </li>
            <li>
              <a href="/search?q=pasta">Pasta</a>
            </li>
            <li>
              <a href="/search?q=cereal">Breakfast</a>
            </li>
            <li>
              <a href="/search?q=snack">Quick bites</a>
            </li>
            <li>
              <a href="/search?q=dessert">Dessert</a>
            </li>
            <li>
              <a href="/search?q=grill">Grill</a>
            </li>
            <li>
              <a href="/search?q=ugali">Ugali</a>
            </li>
            <li>
              <a href="/search?q=burger">Burger</a>
            </li>
            <li>
              <a href="/search?q=tomatoe">Tomatoe</a>
            </li>
            <li>
              <a href="/search?q=spinach">Spinach</a>
            </li>
            <li>
              <a href="/search?q=washing">Washing Detergent</a>
            </li>
            <li>
              <a href="/search?q=baby">Baby</a>
            </li>
            <li>
              <a href="/search?q=toilet+paper">Toilet Paper</a>
            </li>
            <li>
              <a href="/search?q=butter">Butter</a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default DomainSection;
