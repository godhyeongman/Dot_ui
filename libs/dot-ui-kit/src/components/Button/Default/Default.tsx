import { ElementType, forwardRef, Ref } from 'react';

import { Button } from '../Core';
import { ButtonProps } from '../Core/types';

function DefaultButton<imcomeElement extends ElementType = 'button'>(
  { size, color, styles, ...props }: ButtonProps<imcomeElement>,
  ref: Ref<any>,
) {
  return (
    <Button {...props} ref={ref} size={size} color={color} styles={styles}>
      {props.children}
    </Button>
  );
}

const forwardedButton = forwardRef(DefaultButton);

export { forwardedButton as DefaultButton };
