import React from 'react';
import cx from 'classnames';
import './index.css';

const Button = ({variant='default', size='m', isLink, children}) => {
  const TagName = isLink ? 'a' : 'button';

  return (
    <TagName className={cx('UI-button', `UI-button_${variant}`, `UI-button_size-${size}`)}>{children}</TagName>
  )
}

export default Button;
