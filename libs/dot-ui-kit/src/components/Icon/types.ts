import React from 'react';

import * as ICONS from '../../assets/icons';

export type IconTypes = keyof typeof ICONS;

export type IconProps = {
  iconSrc: IconTypes;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  viewBox?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
};
