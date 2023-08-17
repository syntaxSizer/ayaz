import React from 'react';
import ContainerWrapper from './style.js';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { setPageParams } from 'common/src/data/store/reducers/cart/actions';

export default ({ cuisines, header, baseUrl, controlledNavigation }) => {
  const dispatch = useDispatch();
  const reference = React.useRef(null);

  const handleClick = c => {
    let url = `${
      baseUrl ? baseUrl + '/' + c.link.split('/')[2] : c.link + '/'
    }`;
    url = Array.from(new Set(url.split('/'))).join('/');
    if (controlledNavigation) {
      dispatch(setPageParams({ page: 'feed', params: { cuisine: c } }));
      return;
    }
    Router.push(url);
  };
  return (
    <ContainerWrapper>
      <div className="main">
        <ul>
          {cuisines.map(c => (
            <li onClick={() => handleClick(c)}>
              <a>
                <span className="image">
                  <img className="img" src={c.cuisine_image} />
                </span>
                <span className="info">{c.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ContainerWrapper>
  );
};
