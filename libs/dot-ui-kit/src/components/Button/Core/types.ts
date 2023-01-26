import { ElementType } from 'react';
import { CSSObject } from 'styled-components';

import { globalTheme } from '../../../theme/theme';
import { OverRidableProps } from '../../../util/polymorphicComponentT';

export type ButtonBaseProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  color?: keyof typeof globalTheme.pallete;
  styles?: CSSObject;
};

export type ButtonProps<incomeElement extends ElementType> = OverRidableProps<
  incomeElement,
  ButtonBaseProps
>;

export type StyledButtonProps = Pick<
  ButtonBaseProps,
  'size' | 'color' | 'styles'
>;
