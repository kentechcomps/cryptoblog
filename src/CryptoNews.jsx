import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation , Autoplay } from "swiper/modules";
import Topnavigationbar from "./topNavigationbar";

const CryptoNews = () => {
  const blogPosts = [
    {
      title: "Bitcoin Halving Inches Closer",
      description:
        "As the next Bitcoin halving event approaches, fewer than 3,000 blocks remain until the block reward for miners is cut in half, sparking speculation about its potential impact on the market.",
      date: "March 2024",
      imageUrl:
        "https://static.news.bitcoin.com/wp-content/uploads/2024/03/bitcoin-halving-inches-closer-with-fewer-than-3000-blocks-remaining.jpg",
    },
    {
      title: "Crypto Exec Sentenced to Prison",
      description:
        "Prominent crypto executive CZ has been sentenced to four months in prison, marking a significant turn of events in the ongoing regulatory crackdown.",
      date: "September 2024",
      imageUrl:
        "https://external-preview.redd.it/the-verdict-is-in-cz-to-do-4-months-in-prison-v0-JcLAtdsnrkzInqnbhJdY3el5_EpPNTads2-4tdCjcx0.jpg?width=1080&crop=smart&auto=webp&s=719a76f56bc8f1691fdbed4968be4f9905a39576",
    },
    {
      title: "What to Know About Crypto Airdrops",
      description:
        "Crypto airdrops have become a popular way to distribute tokens and reward loyal users. Here's everything you need to know about the latest airdrop trends.",
      date: "August 2024",
      imageUrl:
        "https://images.ctfassets.net/6kz06gcm2189/5u0FPUMrq55TZYiu7ix3Sv/e195f2c75633e146bbcc118f7a69f3b3/crypto-airdrops-v2.png",
    },
    {
      title: "NFTs: Current Trends and the Future",
      description:
        "The NFT market is experiencing a renaissance. Here's a breakdown of current trends and what experts predict for the future of digital collectibles.",
      date: "September 2024",
      imageUrl:
        "https://nftevening.com/wp-content/uploads/2024/09/feature-image.jpg",
    } ,
    {
      title: "Crypto Regulatory Changes in Turkey",
      description:
        "Turkey introduces sweeping changes in cryptocurrency regulations, signaling a significant shift in its approach to digital currencies.",
      date: "September 2024",
      imageUrl:
        "https://i.turkiyetoday.com/image/resize/1024x682/wp-content/uploads/2024/09/GXy6xDMXsAAsY0v.jpg",
    }
  ];

  return (
    <>
      <Topnavigationbar />

      {/* Hero Carousel */}
      <div className="w-full h-[40vh] relative">
        <Swiper
          modules={[Pagination, Navigation ,Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay = {{delay: 3000 , disableOnInteraction: false}}
          loop={true}
          className="h-full"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full relative">
                <img
                  className="object-cover w-full h-full"
                  src={post.imageUrl}
                  alt={post.title}
                />
                <div className="absolute bottom-8 left-10 text-left text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                  <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Crypto News Section */}
      <div className="container mx-auto px-5 py-8 lg:px-32 lg:pt-12">
        <h1 className="text-4xl font-bold text-center mb-8">Crypto News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <img
                alt={post.title}
                className="w-full h-64 object-cover object-center"
                src={post.imageUrl}
              />
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                <p className="text-gray-700 text-base">{post.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="text-sm text-gray-600">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="py-10 bg-gray-800 sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />

                <p className="text-base leading-relaxed text-gray-400 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <ul className="flex items-center space-x-3 mt-9">
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

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Company</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-gray-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-gray-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-gray-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-gray-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400"> Career </a>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-base text-gray-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-gray-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-gray-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-base text-gray-300 transition-all duration-200 hover:text-blue-400 focus:text-blue-400"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Subscribe to newsletter</p>

                <form action="#" method="POST" className="mt-6">
                    <div>
                        <label for="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-gray-900 placeholder-gray-400 transition-all duration-200 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 caret-blue-500" />
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600">Subscribe</button>
                </form>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-600" />

        <p className="text-sm text-center text-gray-400">© Copyright 2021, All Rights Reserved by Postcraft</p>
    </div>
</section>
    </>
  );
};

export default CryptoNews;
