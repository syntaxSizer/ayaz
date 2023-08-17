import React from 'react';
import ContainerWrapper from './banner.style';
import newUpdate from 'common/src/assets/image/app/new-updated@3x-4efef5877e9e2010c63bf1a07446ae901bfbd829e47374911a5bce088a849ba3.png';
import grocery from 'common/src/assets/image/app/grocery-updated@3x-b6acc0a1dfd855ccdc4c861502daeea80278ff18458c84926d16e2ef09891506.png';
import convinience from 'common/src/assets/image/app/convenience30min-updated-2449c56d605be9c968150df0e604c27c1e0513b21bf5481776754a48967bf09f.png';
import snacks from 'common/src/assets/image/app/snap-cb9a13d44153a25db4f98f1769a593fed3e3456bc0d326a4ff115213f0bc7908.png';
import pharmacy from 'common/src/assets/image/app/pharmacy-updated@3x-5f80cb004a50b775e88a98820cda135ff2f2edf7951d96a3d9061e3c576a7b5a.png';
import pets from 'common/src/assets/image/app/pets-updated@3x-468cc1646eabd7bcfac6344689f9d8626030e55c227cbea64d1fd2689d182fc1.png';
import meat from 'common/src/assets/image/app/L2_Meat-9cefbf2bf62f7f3b3dc0b1db7624df12eb027d497170022e724bc076480a2860.png';
import pantry from 'common/src/assets/image/app/L2_Pantry-40aa7656dd1e3f5be161e0641c9b3f1f367ff06d68015815e902b6a6fe39008b.png';
import dairy from 'common/src/assets/image/app/L2_Dairy-23abd0f63d878b9a534f04c957d0134a55d3751af36d22c023ad6eb1d586e2ee.png';
import bakery from 'common/src/assets/image/app/L2_BakedGoods-22d4ff89748a5942b62c31b853bdfbf9d142aafc31ba9499eb4257c895a9ced1.png';

const StoreBanner = ({ title }) => {
  return (
    <ContainerWrapper>
      <h1 className="header">{title}</h1>
      <div className="main">
        <ul>
          <li>
            <a href="/categories/new">
              <span className="image">
                <img className="img" src={newUpdate} />
              </span>
              <span className="info">New</span>
            </a>
          </li>
          <li>
            <a href="/categories/cupboard-food">
              <span className="image">
                <img className="img" src={convinience} />
              </span>
              <span className="info">Convinience</span>
            </a>
          </li>
          <li>
            <a href="/categories/fruits-vegetables">
              <span className="image">
                <img className="img" src={grocery} />
              </span>
              <span className="info">Grocery</span>
            </a>
          </li>
          <li>
            <a href="/categories/meat-fish">
              <span className="image">
                <img className="img" src={meat} />
              </span>
              <span className="info">Meat</span>
            </a>
          </li>
          <li>
            <a href="/categories/sweet-snacks-chocolate">
              <span className="image">
                <img className="img" src={snacks} />
              </span>
              <span className="info">Snacks</span>
            </a>
          </li>
          <li>
            <a href="/categories/dairy">
              <span className="image">
                <img className="img" src={dairy} />
              </span>
              <span className="info">Dairy</span>
            </a>
          </li>
          <li>
            <a href="/categories/bakery-cereals">
              <span className="image">
                <img className="img" src={bakery} />
              </span>
              <span className="info">Bakery</span>
            </a>
          </li>
          <li>
            <a href="/categories/cupboard-food">
              <span className="image">
                <img className="img" src={pantry} />
              </span>
              <span className="info">Pantry</span>
            </a>
          </li>
          <li>
            <a href="/categories/pharmacy">
              <span className="image">
                <img className="img" src={pharmacy} />
              </span>
              <span className="info">Pharmacy</span>
            </a>
          </li>
          <li>
            <a href="/categories/pets">
              <span className="image">
                <img className="img" src={pets} />
              </span>
              <span className="info">Pets</span>
            </a>
          </li>
        </ul>
      </div>
    </ContainerWrapper>
  );
};

export default StoreBanner;
