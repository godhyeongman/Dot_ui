import Link from 'next/link';

function HomePage() {
  return (
    <>
      <div>테스트 되나요?</div>
      <Link href="/TestPage">이동</Link>
      <div>{process.env.NEXT_PUBLIC_ENV_VARIABLE_TEST}</div>
    </>
  );
}

export default HomePage;
