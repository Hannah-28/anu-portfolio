import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState('open');

  return (
    <main className={`min-h-screen bg-secondary-dark ${inter.className}`}>
      {/* menu bar */}
      <div className="w-full px-4 md:px-10 grid z-50 grid-cols-2 h-auto md:h-16 pt-5 md:pt-0 justify-between items-center bg-secondary-dark text-secondary-light fixed top-0">
        <div className="flex space-x-2 pb-5 font-bold md:pb-0">
          <h1>ANU</h1>
          <div className="h-2 w-2 rounded-full bg-secondary-light"></div>
        </div>

        <ul className="hidden md:flex space-x-6 justify-self-end items-center">
          <li>
            <Link href="/" className="menu">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="menu">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="menu">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/" className="menu">
              Contact
            </Link>
          </li>
        </ul>
        {menu === 'open' ? (
          <Image
            src="/menu.png"
            alt="Open Menu Logo"
            className="dark:invert pb-5 md:pb-0 flex justify-self-end md:hidden cursor-pointer"
            width={30}
            height={30}
            priority
            onClick={() => {
              setShow(true);
              setMenu('close');
            }}
          />
        ) : (
          <Image
            src="/close.png"
            alt="Close Menu Logo"
            className="dark:invert pb-5 md:pb-0 flex justify-self-end md:hidden cursor-pointer"
            width={20}
            height={20}
            priority
            onClick={() => {
              setShow(false);
              setMenu('open');
            }}
          />
        )}

        {show === true && (
          <ul className="absolute px-4 md:px-10 text-base mt-16 top-0 left-0 bg-secondary-dark md:hidden w-full col-span-2">
            <li className="menu-block">
              <Link href="/" className='focus:text-primary-dark w-full'>Home</Link>
            </li>
            <li className="menu-block">
              <Link href="/" className='focus:text-primary-dark w-full'>About</Link>
            </li>
            <li className="menu-block">
              <Link href="/" className='focus:text-primary-dark w-full'>Portfolio</Link>
            </li>
            <li className="menu-block border-none">
              <Link href="/" className='focus:text-primary-dark w-full'>Contact</Link>
            </li>
          </ul>
        )}
      </div>
      {/* front view */}
      <div className="text-secondary-light px-4 md:px-10 h-screen pt-20 space-y-5 md:space-y-7 xl:space-y-10 text-xl md:text-large xl:text-extra mt-16">
        <div className="flex items-center font-medium space-x-4">
          <h1>HELLO</h1>
          <div className="border-b-2 w-56 md:w-80 lg:w-96"></div>
        </div>
        <div className="flex flex-wrap font-extrabold">
          <h1 className='mr-2'>I AM</h1>
          <h1 className="text-primary-dark mr-2"> OLUROMBI</h1>
          <h1 className="text-primary-dark"> ANUOLUWAPO</h1>
        </div>
        <h2 className='font-medium'>FRONT-END DEVELOPER</h2>
        <div className="flex space-x-3 items-center font-normal text-xs">
          <Link
            href="/"
            className="border-2 rounded py-2 px-5 bg-primary-dark border-primary-dark hover:bg-transparent transition delay-200 ease-in-out duration-500"
          >
            HIRE ME
          </Link>
          <Link
            href="/"
            className="border-2 rounded py-2 px-5 bg-transparent border-primary-dark hover:bg-primary-dark transition delay-200 ease-in-out duration-500"
          >
            GET CV
          </Link>
        </div>
      </div>
    </main>
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">pages/index.js</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Discover and deploy boilerplate example Next.js&nbsp;projects.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
