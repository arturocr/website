import Head from 'next/head';
import Image from 'next/image';

export default function Index() {
  return (
    <>
      <Head>
        <title>React Costa Rica - Inicio</title>
      </Head>
      <main className='container px-5 py-8 mx-auto'>
        <h1 className='flex flex-col items-center text-3xl font-medium text-center'>
          Bienvenido a React Costa Rica
          <Image
            height={270}
            layout='fixed'
            src='/mstile-150x150.png'
            width={270}
          />
        </h1>
      </main>
    </>
  );
}
