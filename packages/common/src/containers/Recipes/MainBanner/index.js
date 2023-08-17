import React from 'react';
import Wrapper from './style';

const DomainSection = ({ post }) => {
  return (
    <Wrapper>
      <div className="gradient" />
      <div className="content-container">
        <div className="inner">
          <ol className="breadcrumb">
            <li>
              <a href="/recipes">All recipes</a>
            </li>
          </ol>
          <h1 className="stitle">Cookbook</h1>
          <div className="recipe-search-form">
            <form action="/search" role="Search">
              <div className="form-group">
                <input
                  type="text"
                  name="q"
                  className="recipe"
                  placeholder="Search hundreds of products"
                ></input>
              </div>
              <button type="submit" className="btn-search">
                <span className="sr-only">Search</span>
                <span className="glyphicon" title="Search"></span>
              </button>
            </form>
          </div>
          <ul className="nav nav-pills">
            <li>
              <a>Good leftover food</a>
            </li>
            <li>
              <a>Quick dinners</a>
            </li>
            <li>
              <a>Fish</a>
            </li>
            <li>
              <a>Beans</a>
            </li>
            <li>
              <a>Chicken</a>
            </li>
            <li>
              <a>Vegetarian</a>
            </li>
            <li>
              <a>Kid friendly</a>
            </li>
            <li>
              <a>Nyama choma</a>
            </li>
            <li>
              <a>Lunchbox</a>
            </li>
            <li>
              <a>Cakes</a>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Seafood</a>
            </li>
            <li>
              <a>Family meal</a>
            </li>
            <li>
              <a>Affordable hacks</a>
            </li>
            <li>
              <a>Pasta</a>
            </li>
            <li>
              <a>Breakfast</a>
            </li>
            <li>
              <a>Warm dishes</a>
            </li>
            <li>
              <a>Quick hacks</a>
            </li>
            <li>
              <a>Dessert</a>
            </li>
            <li>
              <a>Grill</a>
            </li>
            <li>
              <a>Ugali</a>
            </li>
            <li>
              <a>Burger</a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default DomainSection;
