import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState('open');
  const [title, setTitle] = useState('Home');
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPos = useRef(0);

  const homeRef = useRef();
  const aboutRef = useRef();
  const technologiesRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const telephoneRef = useRef();
  const topRef = useRef()

  function handleHomeClick() {
    setTitle('Home');
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleAboutClick() {
    setTitle('About Me');
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleTechnologiesClick() {
    setTitle('Technologies');
    technologiesRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleProjectsClick() {
    setTitle('Projects');
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleContactClick() {
    setTitle('Contact');
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleTopClick() {
    setTitle('Home');
    topRef.current.scrollIntoView({top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;

      // Button is displayed after scrolling for 50 pixels
      if (currentScrollPos > 50 && currentScrollPos > prevScrollPos.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'portfolio',
        'template_tht78dj',
        e.target,
        'user_efAXMVQb81YkkbYWM5gEv'
      )
      .then(
        (result) => {
          toast.success(
            'Message received!!! I will respond to you via your mail as soon as possible.',
            {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            }
          );
          e.target.reset();
        },
        (error) => {
          toast.error('There was an error in your form', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          e.target.reset();
        }
      );
  }
  

  return (
    <main ref={topRef} className={`bg-secondary ${inter.className}`}>
      {/* head */}
      <Head>
        <title>{title + ' | Olurombi Anuoluwapo'}</title>
        <meta name="description" content="Portfolio Website" />
      </Head>

      {/* menu bar */}
      <div className="w-full overlay px-4 md:px-10 grid z-50 grid-cols-2 h-auto md:h-16 pt-5 md:pt-0 justify-between items-center bg-secondary text-secondary-light fixed top-0">
        <div className="flex space-x-2 pb-5 font-bold md:pb-0">
          <h1>ANU</h1>
          <div className="h-2 w-2 rounded-full bg-secondary-light"></div>
        </div>

        <ul className="hidden md:flex space-x-6 justify-self-end items-center">
          <li onClick={handleHomeClick} className="menu">
            Home
          </li>
          <li onClick={handleAboutClick} className="menu">
            About
          </li>
          <li onClick={handleProjectsClick} className="menu">
            Projects
          </li>
          <li onClick={handleContactClick} className="menu">
            Contact
          </li>
        </ul>
        {menu === 'open' ? (
          <Image
            src="/menu.png"
            alt="Open Menu Logo"
            className="bg-icon pb-5 md:pb-0 flex justify-self-end md:hidden cursor-pointer"
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
            className="bg-icon pb-5 md:pb-0 flex justify-self-end md:hidden cursor-pointer"
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
          <ul className="absolute overlay px-4 md:px-10 text-base mt-16 top-0 left-0 bg-secondary md:hidden w-full col-span-2">
            <li
              onClick={handleHomeClick}
              className="menu-block focus:text-primary-dark w-full"
            >
              Home
            </li>
            <li
              onClick={handleAboutClick}
              className="menu-block focus:text-primary-dark w-full"
            >
              About
            </li>
            <li
              onClick={handleProjectsClick}
              className="menu-block focus:text-primary-dark w-full"
            >
              Projects
            </li>
            <li
              onClick={handleContactClick}
              className="focus:text-primary-dark w-full hover:text-primary-dark transition delay-200 ease-in-out duration-1000 border-b-none border-b-gray-800 pb-2 pt-2 hover:cursor-pointer flex hover:font-extrabold hover:scale-95"
            >
              Contact
            </li>
          </ul>
        )}
      </div>

      {/* front view */}
      <div
        ref={homeRef}
        className="text-secondary-light px-4 md:px-10 py-44 space-y-5 md:space-y-7 xl:space-y-10 text-xl md:text-large xl:text-extra mt-16"
      >
        <div className="flex items-center font-medium space-x-4">
          <h1>HELLO</h1>
          <div className="border-b-2 border-b-secondary-light w-56 md:w-80 lg:w-96"></div>
        </div>
        <div className="flex flex-wrap font-extrabold">
          <h1 className="mr-2">I AM</h1>
          <h1 className="text-primary-dark mr-2"> OLUROMBI</h1>
          <h1 className="text-primary-dark"> ANUOLUWAPO</h1>
        </div>
        <h2 className="font-medium">FRONT-END DEVELOPER</h2>
        <div className="flex space-x-3 items-center font-normal text-xs">
          <div
            onClick={handleContactClick}
            className="border-2 rounded py-2 px-5 bg-primary-dark border-primary-dark hover:bg-transparent transition delay-200 ease-in-out duration-1000 hover:cursor-pointer"
          >
            HIRE ME
          </div>
          <Link
            href="https://drive.google.com/file/d/1k_52vq_7K_4Fo61mXxE2hiyWnAbTUj3T/view?usp=drive_link"
            target="_blank"
            className="border-2 rounded py-2 px-5 bg-transparent border-primary-dark hover:bg-primary-dark transition delay-200 ease-in-out duration-1000"
          >
            GET CV
          </Link>
        </div>
      </div>

      {/* about view */}
      <div ref={aboutRef} className="text-secondary-light px-4 md:px-10 py-20">
        <h1 className="text-large font-semibold text-primary pb-6">ABOUT ME</h1>
        <div className="grid grid-cols-6 gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/no_1.jpg"
            alt="Profile picture Logo"
            className="col-span-6 md:col-span-2 rounded-xl w-auto h-auto border-transparent hover:border-4"
          />
          <div className="col-span-6 md:col-span-4 text-base space-y-5 leading-9 tracking-wide text-gray-200 font-thin">
            <p>
              Hi there 😀, my name is Olurombi Anuoluwapo, and I am constantly
              evolving. I am a front-end developer with a passion for building
              and optimizing user-friendly websites for users with various
              business objectives. I am a graduate of the University of Lagos
              with a Bachelor of Science degree in Systems Engineering. Through
              my journey as a font-end developer, I have gained knowledge in
              various{' '}
              <span
                onClick={handleTechnologiesClick}
                className="rounded p-1 bg-primary-dark font-thin text-gray-200 hover:border border-transparent hover:cursor-pointer"
              >
                Skills
              </span>
              .
            </p>

            <p>
              When I’m not keeping busy with coding, I enjoy listening to music,
              athletics, or watching movies.
            </p>
            <p>
              If you&apos;re just here to check out some of the{' '}
              <span
                onClick={handleProjectsClick}
                className="rounded p-1 bg-primary-dark font-thin text-gray-200 hover:border border-transparent hover:cursor-pointer"
              >
                Projects
              </span>{' '}
              I&apos;ve worked on, or you want to view my{' '}
              <Link
                href="https://drive.google.com/file/d/1-aMilqRBTIzMY13rfP7o9w0KstdJFLrS/view?usp=sharing"
                target="_blank"
                className="rounded p-1 bg-primary-dark hover:border border-transparent"
              >
                Resumé
              </Link>
              , or perhaps you have a question or feedback or you simply wanna
              say hi, you can{' '}
              <span
                onClick={handleContactClick}
                className="rounded p-1 bg-primary-dark font-thin text-gray-200 hover:border border-transparent hover:cursor-pointer"
              >
                Get{'\u00A0'}in{'\u00A0'}Touch
              </span>{' '}
              with me.
            </p>
          </div>
        </div>
      </div>

      {/* technologies view */}
      <div
        ref={technologiesRef}
        className="text-secondary-light px-4 md:px-10 py-20"
      >
        <h1 className="text-large font-semibold text-primary pb-6">
          TECHNOLOGIES
        </h1>
        <p className="text-base leading-9 tracking-wide text-gray-200 font-thin">
          I&apos;ve worked with a range of technologies in the 📱 front-end
          development world.
        </p>
        <div className="flex flex-wrap">
          <div className="skill">
            <Image
              src="/html.png"
              width={25}
              height={25}
              alt="html5 logo"
              className="bg-icon"
            />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <Image
              src="/css3.png"
              width={25}
              height={25}
              alt="css3 logo"
              className="bg-icon"
            />
            <p>CSS3</p>
          </div>
          <div className="skill">
            <Image src="/js.png" width={25} height={25} alt="javascript logo" />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill">
            <Image
              src="/reactjs.png"
              width={25}
              height={25}
              alt="reactjs logo"
              className="bg-icon"
            />
            <p>REACT JS</p>
          </div>
          <div className="skill">
            <Image
              src="/github.png"
              width={25}
              height={25}
              alt="github logo"
              className="bg-icon"
            />
            <p>GITHUB</p>
          </div>
          <div className="skill">
            <Image
              src="/nextjs.png"
              width={25}
              height={25}
              alt="nextjs logo"
              className="bg-icon"
            />
            <p>NEXT JS</p>
          </div>
          <div className="skill">
            <Image
              src="/typescript.png"
              width={25}
              height={25}
              alt="typescript logo"
              className="bg-icon"
            />
            <p>TYPESCRIPT</p>
          </div>
          <div className="skill">
            <Image
              src="/redux.png"
              width={25}
              height={25}
              alt="redux logo"
              className="bg-icon"
            />
            <p>REDUX</p>
          </div>
          <div className="skill">
            <Image
              src="/tailwind.png"
              width={25}
              height={25}
              alt="tailwindcss logo"
              className="bg-icon"
            />
            <p>TAILWIND CSS</p>
          </div>
          <div className="skill">
            <Image
              src="/bootstrap.png"
              width={25}
              height={25}
              alt="bootstrap logo"
              className="bg-icon"
            />
            <p>BOOTSTRAP</p>
          </div>
        </div>
      </div>

      {/* projects view */}
      <div
        ref={projectsRef}
        className="text-secondary-light px-4 md:px-10 py-20"
      >
        <h1 className="text-large font-semibold text-primary pb-6">PROJECTS</h1>
        <div className="grid grid-cols-1 w-full gap-10">
          <div className="showcase">
            <div className="justify-items-center lg:justify-items-start grid">
              <h1 className="text-base font-semibold text-secondary-light">
                ELECTION CHUM
              </h1>
              <p className="leading-9 tracking-wide text-gray-200 font-thin text-xs text-center lg:text-left">
                An Online Voting System using OTP and face recognition.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap space-x-5 items-center justify-center">
                <Link
                  href="https://github.com/Hannah-28/election-chum"
                  target="_blank"
                >
                  <Image
                    src="/github.png"
                    width={25}
                    height={25}
                    alt="github logo"
                    className="bg-icon icon"
                  />
                </Link>
                <Link
                  href="https://election-chum-final.vercel.app/"
                  target="_blank"
                >
                  <Image
                    src="/arrow.png"
                    width={30}
                    height={30}
                    alt="arrow logo"
                    className="bg-icon icon"
                  />
                </Link>
              </div>
              <ul className="flex flex-wrap gap-x-3 text-xs leading-9 tracking-wide text-gray-200 font-thin">
                <li>React</li>
                <li>Nextjs</li>
                <li>CSS</li>
                <li>Tailwind css</li>
                <li>Emailjs</li>
                <li>REST API</li>
              </ul>
            </div>
          </div>

          <div className="showcase">
            <div className="justify-items-center lg:justify-items-start grid">
              <h1 className="text-base font-semibold text-secondary-light">
                PORTFOLIO WEBSITE
              </h1>
              <p className="leading-9 tracking-wide text-gray-200 font-thin text-xs text-center lg:text-left">
                My portfolio website, the site you are currently browsing, was
                designed and coded with ❤️ by me.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap space-x-5 items-center justify-center">
                <Link
                  href="https://github.com/Hannah-28/anu-portfolio"
                  target="_blank"
                >
                  <Image
                    src="/github.png"
                    width={25}
                    height={25}
                    alt="github logo"
                    className="bg-icon icon"
                  />
                </Link>
                <Link
                  href="https://anu-portfolio-steel.vercel.app/"
                  target="_blank"
                >
                  <Image
                    src="/arrow.png"
                    width={30}
                    height={30}
                    alt="arrow logo"
                    className="bg-icon icon"
                  />
                </Link>
              </div>
              <ul className="flex flex-wrap gap-x-3 text-xs leading-9 tracking-wide text-gray-200 font-thin">
                <li>Nextjs</li>
                <li>React</li>
                <li>CSS</li>
                <li>Tailwind css</li>
                <li>Emailjs</li>
              </ul>
            </div>
          </div>

          <div className="showcase">
            <div className="justify-items-center lg:justify-items-start grid">
              <h1 className="text-base font-semibold text-secondary-light">
                RETAIN
              </h1>
              <p className="leading-9 tracking-wide text-gray-200 font-thin text-xs text-center lg:text-left">
                Retain is a web application built for business owners to deliver
                targeted messages to customers via SMS, Email, or WhatsApp.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap space-x-5 items-center justify-center">
                <Link href="/">
                  <Image
                    src="/github.png"
                    width={25}
                    height={25}
                    alt="github logo"
                    className="bg-icon icon"
                  />
                </Link>
                <Link href="https://retain.dochase.co/" target="_blank">
                  <Image
                    src="/arrow.png"
                    width={30}
                    height={30}
                    alt="arrow logo"
                    className="bg-icon icon"
                  />
                </Link>
              </div>
              <ul className="flex flex-wrap gap-x-3 text-xs leading-9 tracking-wide text-gray-200 font-thin">
                <li>Nextjs</li>
                <li>React</li>
                <li>REST API</li>
                <li>Tailwind css</li>
                <p>Typescript</p>
              </ul>
            </div>
          </div>

          <div className="showcase">
            <div className="justify-items-center lg:justify-items-start grid">
              <h1 className="text-base font-semibold text-secondary-light">
                KOREE CULTURE
              </h1>
              <p className="leading-9 tracking-wide text-gray-200 font-thin text-xs text-center lg:text-left">
                An E-commerce website for clothes shopping.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap space-x-5 items-center justify-center">
                <Link href="https://github.com/Hannah-28/koree-kulture">
                  <Image
                    src="/github.png"
                    width={25}
                    height={25}
                    alt="github logo"
                    className="bg-icon icon"
                  />
                </Link>
                <Link href="https://koree-kulture.vercel.app/" target="_blank">
                  <Image
                    src="/arrow.png"
                    width={30}
                    height={30}
                    alt="arrow logo"
                    className="bg-icon icon"
                  />
                </Link>
              </div>
              <ul className="flex flex-wrap gap-x-3 text-xs leading-9 tracking-wide text-gray-200 font-thin">
                <li>Nextjs</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>CSS</li>
                <li>Tailwind css</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-7">
          <Link
            href="https://github.com/Hannah-28?tab=repositories"
            target="_blank"
            className="border-b border-b-primary pb-3 text-sm hover:text-base transition delay-200 ease-in-out duration-1000"
          >
            View more
          </Link>
        </div>
      </div>

      {/* contact view */}
      <div
        ref={contactRef}
        className="text-secondary-light px-4 md:px-10 py-20"
      >
        <h1 className="text-large font-semibold text-primary pb-6">
          CONTACT ME
        </h1>
        <p className="text-base leading-9 tracking-wide text-gray-200 font-thin">
          Contact me if you want to hire me, or you have website development
          gigs, collaborations, give feedback, or just want to say hello 👋.
        </p>
        <p className="text-xs text-center">
          {' '}
          You can send an{' '}
          <Link
            href="mailto:oluronbianu@gmail.com"
            className="text-primary border-b border-primary hover:text-primary-dark hover:border-primary-dark"
          >
            email
          </Link>{' '}
          if contact forms aren&apos;t your thing.
        </p>
        <form
          onSubmit={sendEmail}
          className="space-y-5 w-11/12 md:w-9/12 lg:w-6/12 mx-auto mt-10"
        >
          <input
            type="text"
            placeholder="Name"
            className="input"
            ref={nameRef}
            name="name"
            id="name"
            required
            autoComplete="off"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="input"
            ref={emailRef}
            name="email"
            id="email"
            required
            autoComplete="off"
          ></input>
          <input
            type="tel"
            placeholder="Phone Number"
            className="input"
            ref={telephoneRef}
            name="phone"
            id="phone"
            required
            autoComplete="off"
          ></input>
          <textarea
            rows={5}
            placeholder="Message"
            className="input"
            name="message"
            id="message"
            required
            autoComplete="off"
          />
          <button className="text-xs border-2 rounded py-2 px-5 bg-transparent border-primary-dark hover:bg-primary-dark transition delay-200 ease-in-out duration-1000">
            SEND
          </button>
        </form>
      </div>

      {/* footer view */}
      <div className="w-full overlay grid z-50 py-4 h-auto justify-items-center items-center bg-secondary text-secondary-light bottom-0">
        <div className="flex space-x-6">
          <Link href="https://github.com/Hannah-28/" target="_blank">
            <Image
              src="/github.png"
              width={25}
              height={25}
              alt="github logo"
              className="bg-icon icon"
            />
          </Link>
          <Link href="mailto:oluronbianu@gmail.com">
            <Image
              src="/mail.png"
              width={25}
              height={25}
              alt="mail logo"
              className="bg-icon icon"
            />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=%2B2347055625874&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image
              src="/whatsapp.png"
              width={25}
              height={25}
              alt="whatsapp logo"
              className="bg-icon icon"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anuoluwapo-olurombi-633478173/"
            target="_blank"
          >
            <Image
              src="/linkedin.png"
              width={25}
              height={25}
              alt="linkedin logo"
              className="bg-icon icon"
            />
          </Link>
          <Link
            href="https://instagram.com/anu__oh?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
          >
            <Image
              src="/instagram.png"
              width={25}
              height={25}
              alt="instagram logo"
              className="bg-icon icon"
            />
          </Link>
          <Link
            href="https://twitter.com/anu__oh?t=rTiPknuyDKemZdMF6x6_UQ&s=09"
            target="_blank"
          >
            <Image
              src="/twitter.png"
              width={25}
              height={25}
              alt="twitter logo"
              className="bg-icon icon"
            />
          </Link>
        </div>
        <p className="text-xs leading-9 tracking-wide text-gray-200 font-thin">
          &copy; {new Date().toLocaleDateString('en-us', { year: 'numeric' })}{' '}
          OLUROMBI ANUOLUWAPO.
        </p>
      </div>

      {/* react toast */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isVisible && (
      <div 
      id="back-to-top"
      className={isVisible ? "back-to-top-visible" : null} onClick={handleTopClick}>
<Image
                    src="/up-arrow.png"
                    width={30}
                    height={30}
                    alt="arrow logo"
                    className="bg-icon"
                  />
      </div>)}
    </main>
  );
}
