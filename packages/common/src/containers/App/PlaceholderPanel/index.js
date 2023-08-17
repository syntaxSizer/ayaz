import React from 'react';
import PropTypes from 'prop-types';
 import { EssentialsWrapper } from './searchPanel.style';
import Button from '../../../layout/elements/Button';
import styled from 'styled-components';

import a from '../../../assets/image/app/a.png';
import b from '../../../assets/image/app/b.png';
import c from '../../../assets/image/app/c.png';
import d from '../../../assets/image/app/d.png';
import e from '../../../assets/image/app/e.png';
import f from '../../../assets/image/app/f.png';
import g from '../../../assets/image/app/g.png';
import h from '../../../assets/image/app/h.png';
import i from '../../../assets/image/app/i.png';
import j from '../../../assets/image/app/j.png';
import k from '../../../assets/image/app/k.png';
import l from '../../../assets/image/app/l.png';

const TextMe = styled(Button)`
  background: #002524;
  margin: 20px 0 20px 0;
  color: #fff;
  padding: 16px 36px;
  cursor: pointer;
  border-radius: 30px;
  font-size: 12px;
  letter-spacing: 0.72px;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  text-align: center;
`;

const SearchPanel = () => {
  return (
    <div>
      <EssentialsWrapper>
        <div className="groceries">
          <div className="groceriesInner">
            <ul className="sample">
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${e})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${b})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${d})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${c})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${f})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${a})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="sample">
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${g})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${h})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${i})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${j})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${k})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
              <li>
                <a >
                  <div className="top">
                    <div className="item" style={{backgroundImage: `url(${l})`}}/>
                    <div className="extra"/>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </EssentialsWrapper>
    </div>
  );
};

// SearchPanel style props
SearchPanel.propTypes = {
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  textStyle: PropTypes.object,
  btnStyle: PropTypes.object,
};

// SearchPanel default style
SearchPanel.defaultProps = {
  // Title default style
  titleStyle: {
    fontSize: '48px',
    fontWeight: '600',
    color: '#000000',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // hint default style
  hintStyle: {
    fontSize: '15px',
    fontWeight: '400',
    color: 'rgba(32, 32, 29, 0.55)',
    letterSpacing: '-0.025em',
    mt: '17px',
    ml: ['15px', '30px'],
    mb: '0',
  },
  textStyle: {
    margin: '16px 0 24px',
    color: '#8F95A3',
    fontSize: '16px',
    marginBottom: '0px',
    letterSpacing: '0.14px',
    lineHeight: '26px',
  },
  btnStyle: {
    background: '#002524',
    border: 'none',
    padding: '11px 20px',
    cursor: 'pointer',
    borderRadius: '8px',
    fontSize: '14px',
    letterSpacing: '.72px',
    fontWeight: '600',
    transition: 'background-color .2s ease-in-out,color .2s ease-in-out',
    textAlign: 'center',
  },
};

export default SearchPanel;
