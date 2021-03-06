import React from 'react';
import classnames from 'classnames';
import { getLink } from '../../../utils';
import './index.scss';

const Button = (props) => {
  return (
    <a
      className={
        classnames({
          button: true,
          [`button-${props.type}`]: true,
        })
      }
      target={props.target || '_self'}
      href={getLink(props.link)}
    >
      {props.children}
    </a>
  );
};

export default Button;
