/**
 * 이벤트 핸들러를 받아서 새로운 이벤트 함수로 변경하는 함수
 * 기존 이벤트 핸들러는 유지하고 새로운 이벤트를 preventDefaultHandler 를 통해서 제어
 */

export function composeEventHandlers<EventT>(
  userEventHandler: (event: EventT) => void,
  defaultEventHandler?: (event: EventT) => void,
  { preventDefaultHandler = true } = {},
) {
  return (event: EventT) => {
    userEventHandler(event);

    if (!preventDefaultHandler || !(event as Event).defaultPrevented) {
      return defaultEventHandler?.(event);
    }
  };
}
