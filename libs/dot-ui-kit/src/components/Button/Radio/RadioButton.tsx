import { ElementType } from 'react';

import { Button } from '../Core/Button';
import { ButtonProps } from '../Core/types';

export function RadioButton<incomeElement extends ElementType = 'button'>(
  props: ButtonProps<incomeElement>,
) {
  return (
    <Button
      {...props}
      styles={{ borderRadius: '50%', width: '15px', height: '15px' }}
    >
      {props.children}
    </Button>
  );
}
