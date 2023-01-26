import { RadioButton } from 'dot-ui-kit';
import { check } from 'prettier';
import { forwardRef, useState } from 'react';

import { composeEventHandlers } from '@/core/composeEventHandlers';
import { createContext } from '@/core/context';
import { composeRefs, useCompsedRef } from '@/hooks/useComposedRef';

type RadioProps = {
  checked?: boolean;
  required?: boolean;
  onClick(): void;
  onCheck?(): void;
};

type RadioElement = React.ElementRef<'button'>;

const DEFAULT_CONTEXT_STATE = { checked: false };
const radioContext = createContext(DEFAULT_CONTEXT_STATE);
const { Provider, contextDispatch } = radioContext;

const Radio = forwardRef<RadioElement, RadioProps>(
  (props: RadioProps, forwardRef) => {
    const { checked, required, onClick, onCheck } = props;
    const [button, setButton] = useState<HTMLButtonElement | null>(null);
    const composeRefs = useCompsedRef(forwardRef, node => setButton(node));

    return (
      <Provider>
        <RadioButton
          onClick={composeEventHandlers(onClick, event => {
            if (!checked) onCheck?.();
          })}
        ></RadioButton>
      </Provider>
    );
  },
);

/*
 * ----------------------
 * 라디오 인디 케이터
 * ----------------------
 */

type RadioIndicatorElementT = React.ElementRef<'span'>;
type RadioIndicatorProps = { forceMount?: true };

const RadioIndicator = forwardRef<RadioIndicatorElementT, RadioIndicatorProps>(
  (props: RadioIndicatorProps, forwardRef) => {
    const { forceMount } = props;
    const context = contextDispatch();
    const { checked } = context;

    return <>{checked && <div>여기 인디케이터</div>}</>;
  },
);

export { Radio, RadioIndicator };
