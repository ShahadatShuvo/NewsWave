import Image from "next/image";

function Author() {
  return (
    <main id="content" className="text-gray-800">
      <div className="bg-gray-50 py-4 hidden">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="mx-auto table text-center text-sm">
            <a className="uppercase" href="#">
              Advertisement
            </a>
            <a href="#">
              <img src="/img/ads/ads_728.jpg" alt="advertisement area" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-6">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{" "}
                  Author Profile
                </h2>
              </div>

              <div className="flex flex-row flex-wrap -mx-3">
                <div className="flex-shrink max-w-full w-full px-3 pb-5">
                  <div className="p-4 border border-gray-100 bg-white mb-4">
                    <div className="flex flex-row items-center">
                      <div className="rounded-full overflow-hidden">
                        <a href="#">
                          <img
                            className="border max-w-full w-20 sm:w-32"
                            src="/img/dummy/avatar.jpg"
                            alt="author"
                          />
                        </a>
                      </div>
                      <div className="ml-8">
                        <h4 className="text-2xl">
                          <span className="font-bold">Ari budin</span>
                        </h4>
                        <p>
                          <a
                            target="_blank"
                            className="hover:text-blue-500"
                            rel="noopener"
                            href="https://aribudin.com"
                          >
                            https://aribudin.com
                          </a>
                        </p>
                        <p className="hidden sm:block">
                          Programmer, Father, Husband, I design and develop
                          Tailwind template, founder of Tailnet
                        </p>
                        <div className="mt-2">
                          <ul className="space-x-3">
                            <li className="inline-block">
                              <a
                                target="_blank"
                                className="hover:text-gray-900"
                                rel="noopener noreferrer"
                                href="https://facebook.com"
                                title="Facebook"
                              >
                                <i className="fab fa-facebook fa-2x"></i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="2rem"
                                  height="2rem"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                                  ></path>
                                </svg>
                              </a>
                            </li>
                            <li className="inline-block">
                              <a
                                target="_blank"
                                className="hover:text-gray-900"
                                rel="noopener noreferrer"
                                href="https://twitter.com"
                                title="Twitter"
                              >
                                <i className="fab fa-twitter fa-2x"></i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="2rem"
                                  height="2rem"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                                  ></path>
                                </svg>
                              </a>
                            </li>
                            <li className="inline-block">
                              <a
                                target="_blank"
                                className="hover:text-gray-900"
                                rel="noopener noreferrer"
                                href="https://youtube.com"
                                title="Youtube"
                              >
                                <i className="fab fa-youtube fa-2x"></i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="2rem"
                                  height="2rem"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
                                  ></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink max-w-full w-full px-3">
                  <div className="w-full py-3">
                    <h2 className="text-gray-800 text-2xl font-bold">
                      <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{" "}
                      Post by Ari Budin
                    </h2>
                  </div>
                </div>

                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <Image
                        layout="responsive"
                        height={100}
                        width={100}
                        className="max-w-full w-full mx-auto h-auto"
                        src="/img/dummy/img6.jpg"
                        alt="advertisement area"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <Image
                        layout="responsive"
                        height={100}
                        width={100}
                        className="max-w-full w-full mx-auto h-auto"
                        src="/img/dummy/img7.jpg"
                        alt="advertisement area"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <Image
                        layout="responsive"
                        height={100}
                        width={100}
                        className="max-w-full w-full mx-auto h-auto"
                        src="/img/dummy/img8.jpg"
                        alt="advertisement area"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <Image
                        layout="responsive"
                        height={100}
                        width={100}
                        className="max-w-full w-full mx-auto h-auto"
                        src="/img/dummy/img9.jpg"
                        alt="advertisement area"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <Image
                        layout="responsive"
                        height={100}
                        width={100}
                        className="max-w-full w-full mx-auto h-auto"
                        src="/img/dummy/img11.jpg"
                        alt="advertisement area"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <a href="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="/img/dummy/img11.jpg"
                        alt="alt title"
                      />
                    </a>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <a href="#">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </a>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <a className="text-gray-500" href="#">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                        Europe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <nav aria-label="Page navigation">
                  <ul className="flex justify-center space-x-0">
                    <li>
                      <a
                        className="block relative py-3 px-4 bg-white border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-l   text-gray-100"
                        href="#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5"
                        href="#"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5"
                        href="#"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5"
                        href="#"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r"
                        href="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div className="w-full bg-white">
                <div className="mb-6">
                  <div className="p-4 bg-gray-100">
                    <h2 className="text-lg font-bold">Most Popular</h2>
                  </div>
                  <ul className="post-number">
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a
                        className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                        href="#"
                      >
                        Why the world would end without political polls
                      </a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a
                        className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                        href="#"
                      >
                        Meet The Man Who Designed The Ducati Monster
                      </a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a
                        className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                        href="#"
                      >
                        2020 Audi R8 Spyder spy shots release
                      </a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a
                        className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                        href="#"
                      >
                        Lamborghini makes Huracán GT3 racer faster for 2019
                      </a>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <a
                        className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                        href="#"
                      >
                        ZF plans $14 billion autonomous vehicle push, concept
                        van
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-sm py-6 sticky">
                <div className="w-full text-center">
                  <a className="uppercase" href="#">
                    Advertisements
                  </a>
                  <a href="#">
                    <Image
                      layout="responsive"
                      height={100}
                      width={100}
                      className="max-w-full w-full mx-auto h-auto"
                      src="/img/ads/250.jpg"
                      alt="advertisement area"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Author;
