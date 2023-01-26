import { IconProps } from './types';

import * as ICONS from '../../assets/icons';

export const Icon = (props: IconProps) => {
  const {
    iconSrc,
    width = 20,
    height = 20,
    stroke = 'none',
    fill = 'none',
    viewBox = '0 0 32 32',
    onClick,
    className,
  } = props;

  const SVGIcon = ICONS[iconSrc];

  return (
    <SVGIcon
      width={width}
      height={height}
      stroke={stroke}
      fill={fill}
      viewBox={viewBox}
      onClick={onClick}
      className={className}
    />
  );
};
