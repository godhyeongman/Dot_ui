import { Test2 } from '../components/Test';
function Home() {
  const a = 1;

  return (
    <div>
      테스트
      {/* <Test></Test> */}
    </div>
  );
}
export default Home;

export function Test({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Test2></Test2>
    </>
  );
}
