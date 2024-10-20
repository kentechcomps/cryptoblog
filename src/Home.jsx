import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import tradeimage from './assets/trade.jpg'
import { Link } from 'react-router-dom';
import Topnavigationbar from './topNavigationbar';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import emailjs from 'emailjs-com';



function Home() {

    const [blogList, setBlogList] = useState([
        {
          id: 1,
          imageUrl: 'https://image.cnbcfm.com/api/v1/image/107005776-1643087617730-gettyimages-1237955656-20090101220124-99-833573.jpeg?v=1712085347',
          title: 'Bitcoin',
          subtitle: 'A deep dive into the world of cryptocurrency',
          content: 'Bitcoin is the first decentralized digital currency that allows peer-to-peer transactions. It was created in 2009 by an unknown person or group of people using the pseudonym Satoshi Nakamoto. This blog explores Bitcoin’s history and influence on other cryptocurrencies.'
        },
        {
          id: 2,
          imageUrl: 'https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg',
          title: 'Ethereum',
          subtitle: 'How Ethereum is transforming the blockchain landscape',
          content: 'Ethereum is an open-source blockchain that introduces smart contracts. Created by Vitalik Buterin in 2015, Ethereum enables developers to build decentralized applications (dApps) that operate on a global scale.'
        },
        {
          id: 3,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3TDuoNtaGOh9yK5xM2zQlH1nxv31iA8-gyw&s',
          title: 'DeFi',
          subtitle: 'Decentralized finance is disrupting traditional banking',
          content: 'DeFi, or decentralized finance, refers to financial services that are built on blockchain technology, allowing users to trade, lend, and borrow assets without intermediaries. It represents a shift towards greater financial inclusion.'
        },
        {
          id: 4,
          imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max',
          title: 'NFTs',
          subtitle: 'The rise of non-fungible tokens in art and entertainment',
          content: 'NFTs, or non-fungible tokens, are unique digital assets verified using blockchain technology. This blog explores how NFTs are transforming industries like art, music, and gaming by allowing creators to monetize their digital work.'
        }
      ]);
      const [email, setEmail] = useState('');

      const sendEmail = (e) => {
        e.preventDefault();
    
        // EmailJS parameters
        const serviceID = 'your_service_id';
        const templateID = 'your_template_id';
        const userID = 'your_user_id';
    
        const templateParams = {
          email,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessage('Subscription successful! Check your inbox.');
        })
        .catch((err) => {
          console.error('FAILED...', err);
          setMessage('Subscription failed! Please try again.');
        });

      }
      

  return (
    <>
      <header className="pb-6 bg-white lg:pb-0">
       <Topnavigationbar/>
      </header>

      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24"
       style={{
        backgroundColor: 'red',
        
       }}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
            <TypeAnimation
        sequence={[
          'Grow your career fast with the right mentor.',
          1000,
          'We produce unmatched success' ,
          1000,
          'We teach all sort of stuff' ,
          
          // You can add more strings or change the sequence here
        ]}
        speed={50} // Speed of typing in ms
        cursor={true} // Whether to show the cursor
        repeat={Infinity} // Whether to repeat the animation
        style={{
            background: 'white', // Apply gradient text color
            WebkitBackgroundClip: 'text',
            fontStyle: 'bold' ,
            WebkitTextFillColor: 'transparent', // Makes text transparent so gradient is shown
            fontSize: '20px', // Responsive font size
            display: 'inline-block',
          }}
      /> 
             
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Connect & learn from the experts</h1>   
              <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                Join for free
                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
  <img
  className="w-full h-auto object-cover" src={tradeimage} alt="Hero"
  >
  </img>  
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
</div>
          </div>
        </div>
      </section>
      <div style={{ transform: 'rotate(180deg)' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="red"
      fillOpacity="1"
      d="M0,32L20,53.3C40,75,80,117,120,128C160,139,200,117,240,138.7C280,160,320,224,360,213.3C400,203,440,117,480,80C520,43,560,53,600,90.7C640,128,680,192,720,234.7C760,277,800,299,840,272C880,245,920,171,960,149.3C1000,128,1040,160,1080,144C1120,128,1160,64,1200,64C1240,64,1280,128,1320,160C1360,192,1400,192,1420,192L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
    ></path>
  </svg>
</div>
    


      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24"
      style={
        {
            marginTop: '-40px'
        }
      }
      >
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest Crypto&Bitcoin News</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Cryptocurrency values surged above $60,000, reaching its highest point since 2021. Enthusiasts are waiting to see if it can achieve a new record high during the current rally.</p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
                <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
        <div className="container mx-auto mt-8 lg:mt-16">
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
    {blogList.map((blog) => (
      <div key={blog.id} className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <a href="#" title="" className="block">
            <img
              className="object-cover w-full h-48 transition-transform duration-300 transform hover:scale-105"
              src={blog.imageUrl}
              alt={blog.title}
            />
          </a>
          <div className="absolute top-4 left-4 bg-white bg-opacity-75 rounded-full px-4 py-2">
            <span className="text-xs font-semibold tracking-wider text-gray-900 uppercase">{blog.title}</span>
          </div>
        </div>
        <div className="p-6">
          <span className="block text-sm font-semibold text-gray-500 uppercase mb-2">March 21, 2020</span>
          <p className="text-xl font-bold mb-3">
            <a href="#" className="text-gray-900 hover:text-blue-600">{blog.subtitle}</a>
          </p>
          <p className="text-gray-700 mb-5">{blog.content.substring(0, 100)}...</p>
          <Link
                to={`/details/${blog.id}`}  // Link to the blog details page with the blog's id
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
              >
                Continue Reading
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
        </div>
      </div>
    ))}
  </div>
</div>

       

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</section>

<div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32" 
 style={{
  marginBottom: '60px'
 }}
>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>

  
    <section className="py-10 bg-gray-800 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-center items-center flex-col lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="text-center col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img className="w-auto h-9 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Logo" />

                <p className="text-base leading-relaxed text-gray-400 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <ul className="flex justify-center items-center space-x-3 mt-9">
                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-700 rounded-full w-7 h-7 hover:bg-blue-500 focus:bg-blue-500">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-700 rounded-full w-7 h-7 hover:bg-blue-500 focus:bg-blue-500">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-700 rounded-full w-7 h-7 hover:bg-blue-500 focus:bg-blue-500">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-600" />

        <p className="text-sm text-center text-gray-400">© Copyright 2021, All Rights Reserved by Postcraft</p>
    </div>
</section>

  

    


    </>
  );
}

export default Home;
