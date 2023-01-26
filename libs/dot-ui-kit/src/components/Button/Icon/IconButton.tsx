import { ElementType, forwardRef, Ref } from 'react';

import { Icon } from '@/components/Icon';
import { IconTypes } from '@/components/Icon/types';
import { Combine } from '@/util/polymorphicComponentT';

import { ButtonLayout } from './style';

import { Button } from '../Core';
import { ButtonProps } from '../Core/types';

type IconButtonBaseProps = { iconSrc: IconTypes };

type IconButtonProps<incomeElements extends ElementType = 'button'> = Combine<
  IconButtonBaseProps,
  ButtonProps<incomeElements>
>;

const ICON_SIZE = {
  height: { small: 15, medium: 20, large: 25 },
  width: { small: 15, medium: 20, large: 25 },
};

function IconButton<incomeElements extends ElementType = 'button'>(
  { iconSrc, children, ...props }: IconButtonProps<incomeElements>,
  ref: Ref<HTMLButtonElement>,
) {
  const { size } = props;

  const IconWidth = ICON_SIZE.width[size];
  const IconHeight = ICON_SIZE.height[size];
  return (
    <Button {...props} ref={ref}>
      <ButtonLayout>
        <Icon
          iconSrc={iconSrc}
          width={IconWidth}
          height={IconHeight}
          fill="black"
        />
        {children}
      </ButtonLayout>
    </Button>
  );
}

const forwardedIconButton = forwardRef(IconButton);

export { forwardedIconButton as IconButton };
