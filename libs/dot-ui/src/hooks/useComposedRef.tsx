import React, { MutableRefObject } from 'react';

type PossibleRef<T> = React.Ref<T> | undefined;

/**
 * ref에 value 값을 set
 * callbackRef 에 대한 관리와 기본 ref에 대한 처리 둘다 가능하다.
 */
function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as MutableRefObject<T>).current = value;
  }
}

/**
 * ref들을 한번에 새로운 값으로 update하기 위한 callback함수를 return
 * setRef를 이용하여 callbackRef를 함께 케어
 */
function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (newValue: T) => refs.forEach(ref => setRef(ref, newValue));
}

/**
 * ref들을 합성하는 custom hook
 * ref들의  update마다, composeRef 의 return된 함수가 update됨
 * 여러 ref들을 관리할때 전부 callbackref로 지정하는것을 util화
 */
function useCompsedRef<T>(...refs: PossibleRef<T>[]) {
  return React.useCallback(composeRefs(...refs), refs);
}

export { composeRefs, useCompsedRef };
