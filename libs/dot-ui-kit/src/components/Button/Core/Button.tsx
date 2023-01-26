import { ElementType, forwardRef, Ref } from 'react';

import { StyledButton } from './style';
import { ButtonProps } from './types';

function Button<imcomeElement extends ElementType = 'button'>(
  { className, ...props }: ButtonProps<imcomeElement>,
  ref: Ref<any>,
) {
  return (
    <StyledButton {...props} ref={ref} className={className}>
      {props.children}
    </StyledButton>
  );
}

const forwardedButton = forwardRef(Button);

export { forwardedButton as Button };
