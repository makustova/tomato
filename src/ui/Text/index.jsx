import React from 'react';
import cx from 'classnames';
import './index.css';

const Text = ({tagName: TagName = 'p', size = 's', bold, children}) => {
  return (
    <TagName className={cx('UI-text', `UI-text_size-${size}`, bold && 'UI-text_bold')}>
      {children}
    </TagName>
  )
};

export default Text;
