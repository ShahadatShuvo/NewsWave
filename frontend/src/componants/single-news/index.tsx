import Image from "next/image";
import "../../utils/css/style.css";
import "../../utils/css/theme.css";
import "../../utils/tailwind/tailwindcss.css";

function SingleNews() {
  return (
    <div>
      <div className=" py-4 hidden">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="mx-auto table text-center text-sm">
            <a className="uppercase" href="#">
              Advertisement
            </a>
            <a href="#">
              <Image
                layout="responsive"
                height={100}
                width={100}
                src="/img/ads/ads_728.jpg"
                alt="advertisement area"
              />
            </a>
          </div>
        </div>
      </div>

      <div className=" py-6 text-gray-800">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
              <div className="w-full py-3 mb-3">
                <h2 className="text-gray-800 text-3xl font-bold">
                  <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{" "}
                  5 Tips to Save Money Booking Your Next Hotel Room
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                <div className="max-w-full w-full px-4">
                  <div className="leading-relaxed pb-4">
                    <p className="mb-5">
                      Aenean sodales lacus est, at ultricies augue ele ifend sit
                      amet. <ins>Be yourself</ins> everyone else is already
                      taken, sem mi placerat felis, ac suscip ligula ex id
                      metus. Vivamus aliquet sit amet nisi non faucibus. Orci
                      varius natoque penatibus et magnis dis parturient montes.
                    </p>

                    <h2 className="text-xl leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">
                      Start your Morning with Smiles
                    </h2>
                    <p className="mb-5">
                      Integer egestas ipsum eget metus sodales consectetur.
                      Nullam ultricies posuere cursus. Duis vitae lorem porta,
                      venenatis nibh ac, laoreet massa. Nam risus lacus, porta
                      eu diam id, fringilla porta risus. Aenean sit amet
                      malesuada diam.
                    </p>
                    <figure className="text-center mb-6">
                      <Image
                        layout="responsive"
                        height={100}
                        width={100}
                        className="max-w-full h-auto"
                        src="/img/dummy/img21.jpg"
                        alt="Image description"
                      />
                      <figcaption> Type here your description</figcaption>
                    </figure>
                    <h3 className="text-2xl leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">
                      Ordered and unordered list
                    </h3>
                    <ul className="pl-8 mb-4">
                      <li className="list-disc list-inside">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium
                        <ol className="pl-8 mb-4">
                          <li className="list-decimal list-inside">
                            Itaque earum rerum hic tenetur a sapiente delectus
                          </li>
                          <li className="list-decimal list-inside">
                            which of us ever undertakes laborious physical
                            exercise
                          </li>
                        </ol>
                      </li>
                      <li className="list-disc list-inside">
                        Et harum quidem rerum facilis est et expedita distinctio
                      </li>
                      <li className="list-disc list-inside">
                        Itaque earum rerum hic tenetur a sapiente delectus
                      </li>
                      <li className="list-disc list-inside">
                        which of us ever undertakes laborious physical exercise
                      </li>
                    </ul>
                    <p className="mb-5">
                      Cras justo velit, ultrices vel vehicula eu, viverra in
                      turpis. Donec lobortis at lorem ac semper. Mauris
                      malesuada ligula in interdum pharetra. Interdum et
                      malesuada fames ac ante ipsum primis in faucibus.
                    </p>

                    <p className="mb-5">
                      Integer egestas ipsum eget metus sodales consectetur.
                      Nullam ultricies posuere cursus. Duis vitae lorem porta,
                      venenatis nibh ac, laoreet massa. Nam risus lacus, porta
                      eu diam id, fringilla porta risus. Aenean sit amet
                      malesuada diam.
                    </p>
                    <blockquote className="relative p-4 border-l-4 border-red-700   mb-4 text-xl">
                      <span className="absolute opacity-80 w-8 h-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-red-700"
                          viewBox="0 0 270.000000 270.000000"
                        >
                          <g
                            transform="translate(0.000000,270.000000) scale(0.100000,-0.100000)"
                            fill="currentColor"
                            stroke="none"
                          >
                            <path d="M920 2182 c-290 -124 -482 -341 -540 -610 -30 -140 -40 -296 -40 -644 l0 -328 370 0 370 0 0 370 0 370 -181 0 -181 0 7 63 c26 243 129 387 342 477 35 15 66 29 69 32 7 7 -132 298 -143 298 -4 0 -37 -13 -73 -28z"></path>
                            <path d="M2179 2186 c-249 -103 -442 -295 -520 -516 -50 -142 -61 -247 -66 -677 l-5 -393 371 0 371 0 0 370 0 370 -181 0 -181 0 7 53 c21 170 67 281 150 363 51 49 143 107 215 134 19 7 39 17 44 21 10 9 -124 298 -139 298 -5 0 -35 -10 -66 -23z"></path>
                          </g>
                        </svg>
                      </span>
                      <p className="ml-16 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer className="ml-16 text-base">
                        Quote by <cite title="Source Title">Ari Budin</cite>
                      </footer>
                    </blockquote>
                    <p className="mb-5">
                      Vivamus purus orci, molestie vel erat sed, consectetur
                      posuere ligula. Vestibulum <br /> iaculis dignissim
                      laoreet. Cras tincidunt always have Paris, at lobortis
                      ligula laoreet. Etiam eu sapien sit amet neque aliquam
                      consequat nec in velit. Aliquam sit amet erat sed augue
                      bibendum vehicula non at lacus. Phasellus scelerisque in
                      elit a els.
                    </p>

                    <p className="mb-5">
                      Cras justo velit, ultrices vel vehicula eu, viverra in
                      turpis. Donec lobortis at lorem ac semper. Mauris
                      malesuada ligula in interdum pharetra. Interdum et
                      malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                    <figure className="lg:float-left text-center lg:text-left ml-0 lg:-ml-4 mr-7 mb-7">
                      <Image
                        layout="responsive"
                        height={100}
                        width={100}
                        className="max-w-full h-auto mx-auto"
                        src="/img/dummy/post2.jpg"
                        alt="Image description"
                      />
                      <figcaption>Align left images</figcaption>
                    </figure>

                    <p className="mb-5">
                      Morbi at lacinia risus. Donec vitae justo sed augue
                      sollicitudin dignissim ut vitae ipsum. Proin at imperdiet
                      ante, non blandit mauris. Nullam eu lobortis justo.
                    </p>
                    <p className="mb-5">
                      Fusce vestibulum blandit justo non rhoncus. Maecenas eget
                      felis id orci ultricies frin gilla. Aliquam suscipit enim
                      felis. Praesent arcu dui, rutrum et molestie sed, volutpat
                      auctor lorem. Fusce sit amet libero odio. Integer sed nisl
                      turpis. Integer mollis sed est eget convallis. Interdum et
                      malesuada fames ac ante ipsum primis in faucibus.
                    </p>

                    <p className="mb-5">
                      Fusce elementum placerat tellus id. Nulla sit amet pretium
                      enim, in vehicula ligula. Proin nec malesuada liberoque
                      blandit. Sed condimentum neque ligula, id dapibus enim
                      ornare id. Duis porttitor, risus vehicula convallis
                      sagittis, ligula nisi iaculis libero, sit amet convallis
                      nulla magna non tortor.
                    </p>

                    <h2 className="float-left w-full text-xl leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">
                      Live as if you were to die tomorrow.
                    </h2>

                    <p className="mb-5">
                      Nullam ut tempus mauris. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra, per inceptos
                      himenaeos. Vivamus libero dolor, condimentum eu augue et,
                      placerat tempus risus. Quisque massa purus, ullamcorper
                      eget ipsum et, eleifend suscipit mi. Duis auctor tortor a
                      dui accumsan, sed semper nunc iaculis.
                    </p>

                    <figure className="lg:float-right text-center lg:text-right mr-0 lg:-mr-4 ml-7 mb-7">
                      <Image
                        layout="responsive"
                        height={100}
                        width={100}
                        className="max-w-full h-auto mx-auto"
                        src="/img/dummy/post3.jpg"
                        alt="Image description"
                      />
                      <figcaption>Align right images</figcaption>
                    </figure>

                    <p className="mb-5">
                      Mauris eget lectus et nisi commodo tristique. Aenean eget
                      ornare dui. Maecenas bibendum lacus ante, vitae
                      pellentesque ex elementum convallis.
                    </p>
                    <p className="mb-5">
                      Mauris lobortis leo a neque congue, quis pretium libero
                      efficitur. Sed congue ipsum ac mollis egestas. Sed
                      venenatis nisl nibh, in blandit nisi varius sed.
                      Pellentesque molestie lacus ut justo molestie tristique.
                      Curabitur pretium ipsum ex, a rhoncus arcu tempus ut.
                      Fusce elementum placerat tellus id blandit.
                    </p>

                    <p className="mb-5">
                      Sed condimentum neque ligula, id dapibus enim ornare id.
                      Duis porttitor, risus vehicula convallis sagittis, ligula
                      nisi iaculis libero.
                    </p>

                    <p className="mb-5">
                      Morbi at lacinia risus. Donec vitae justo sed augue
                      sollicitudin dignissim ut vitae ipsum. Proin at imperdiet
                      ante, non blandit mauris. Nullam eu lobortis justo.
                    </p>
                    <p className="mb-5">
                      Fusce vestibulum blandit justo non rhoncus. Maecenas eget
                      felis id orci ultricies frin gilla. Aliquam suscipit enim
                      felis. Praesent arcu dui, rutrum et molestie sed, volutpat
                      auctor lorem. Fusce sit amet libero odio. Integer sed nisl
                      turpis. Integer mollis sed est eget convallis. Interdum et
                      malesuada fames ac ante ipsum primis in faucibus.
                    </p>

                    <div className="relative flex flex-row items-center justify-between overflow-hidden  mt-12 mb-2 px-6 py-2">
                      <div className="my-4 text-sm">
                        <span className="mr-2 md:mr-4">
                          <i className="fas fa-user me-2" />
                          <svg
                            className="bi bi-person mr-2 inline-block"
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>{" "}
                          by{" "}
                          <a className="font-semibold" href="#">
                            Ari Budin
                          </a>
                        </span>

                        <time
                          className="mr-2 md:mr-4"
                          dateTime="2020-10-22 10:00"
                        >
                          <i className="fas fa-calendar me-2"></i>
                          <svg
                            className="bi bi-calendar mr-2 inline-block"
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
                              clip-rule="evenodd"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>{" "}
                          Oct 22, 2020
                        </time>

                        <span className="mr-2 md:mr-4">
                          <i className="fas fa-eye me-2"></i>
                          <svg
                            className="bi bi-eye mr-2 inline-block"
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z"
                              clip-rule="evenodd"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>{" "}
                          1.230x view
                        </span>
                      </div>

                      <div className="hidden lg:block">
                        <ul className="space-x-3">
                          <li className="inline-block">
                            <a
                              target="_blank"
                              className="hover:text-red-700"
                              href="#"
                              title="Share to Facebook"
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
                              className="hover:text-red-700"
                              href="#"
                              title="Share to Twitter"
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
                              className="hover:text-red-700"
                              href="#"
                              title="Share to Instagram"
                            >
                              <i className="fab fa-instagram fa-2x"></i>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2rem"
                                height="2rem"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                                ></path>
                                <path
                                  fill="currentColor"
                                  d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap flex-row -mx-4 justify-center py-4">
                    <div className="flex-shrink max-w-full px-4 w-1/3 sm:w-1/4 md:w-1/6">
                      <a href="#">
                        <Image
                          layout="responsive"
                          height={100}
                          width={100}
                          className="rounded-full border max-w-full h-auto dark:border-gray-700"
                          src="/img/dummy/avatar.jpg"
                          alt="author"
                        />
                      </a>
                    </div>
                    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-3/4 md:w-10/12">
                      <p className="text-lg leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">
                        <span className="font-semibold">Ari budin</span>
                      </p>

                      <p className="mb-1">
                        <a target="_blank" className="text-red-700" href="#">
                          https://aribudin.com
                        </a>
                      </p>

                      <p>
                        Programmer, Father, Husband, I design and develop
                        Bootstrap template
                      </p>
                    </div>
                  </div>

                  <div id="comments" className="pt-16">
                    <h3 className="text-2xl leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">
                      5 Comments
                    </h3>

                    <ol className="mb-4">
                      <li className="py-2 mt-6">
                        <div className="pb-4 border-b border-gray-200 dark:border-gray-600 border-dashed">
                          <footer>
                            <Image
                              height={100}
                              width={100}
                              className="w-20 h-20 border border-gray-200 dark:border-gray-700 max-w-full float-left mr-4"
                              src="/img/avatar2.jpg"
                              alt="avatar"
                            />
                            <div>
                              <a
                                className="text-lg leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100"
                                href="#"
                                target="_blank"
                              >
                                Carlos vila
                              </a>
                              <span className="md:float-right text-sm">
                                <time dateTime="2020-10-27">Oct 27, 2020</time>
                              </span>
                            </div>
                          </footer>
                          <div>
                            <p>
                              I like this themes, fast loading and look
                              profesional
                            </p>
                          </div>
                          <div>
                            <a
                              className="text-red-700 hover:text-red-800"
                              href="#comment-form"
                            >
                              Reply
                            </a>
                          </div>
                        </div>
                        <ul className="ml-12 md:ml-24">
                          <li className="py-2 mt-6">
                            <div className="pb-4 border-b border-gray-200 dark:border-gray-600 border-dashed">
                              <footer>
                                <Image
                                  height={100}
                                  width={100}
                                  className="w-20 h-20 border border-gray-200 dark:border-gray-700 max-w-full float-left mr-4"
                                  src="/img/avatar.jpg"
                                  alt="avatar"
                                />
                                <div>
                                  <a
                                    className="text-lg leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100"
                                    href="#"
                                    target="_blank"
                                  >
                                    Ari Budin
                                  </a>
                                  <span className="md:float-right text-sm">
                                    <time dateTime="2020-10-27">
                                      Oct 27, 2020
                                    </time>
                                  </span>
                                </div>
                              </footer>
                              <div>
                                <p>Thank you Carlos!</p>
                              </div>
                              <div>
                                <a
                                  className="text-red-700 hover:text-red-800"
                                  href="#comment-form"
                                >
                                  Reply
                                </a>
                              </div>
                            </div>
                            <ul className="md:ml-24">
                              <li className="py-2 mt-6" id="comment-5">
                                <div className="pb-4 border-b border-gray-200 dark:border-gray-600 border-dashed">
                                  <footer>
                                    <Image
                                      height={100}
                                      width={100}
                                      className="w-20 h-20 border border-gray-200 dark:border-gray-700 max-w-full float-left mr-4"
                                      src="/img/avatar2.jpg"
                                      alt="avatar"
                                    />
                                    <div>
                                      <a
                                        className="text-lg leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100"
                                        href="#"
                                        target="_blank"
                                      >
                                        Carlos vila
                                      </a>
                                      <span className="md:float-right text-sm">
                                        <time dateTime="2020-10-27">
                                          Oct 27, 2020
                                        </time>
                                      </span>
                                    </div>
                                  </footer>
                                  <div>
                                    <p>You are welcome!</p>
                                  </div>
                                  <div>
                                    <a
                                      className="text-red-700 hover:text-red-800"
                                      href="#comment-form"
                                    >
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="py-2 mt-6">
                        <div className="pb-4 border-b border-gray-200 dark:border-gray-600 border-dashed">
                          <footer>
                            <Image
                              height={100}
                              width={100}
                              className="w-20 h-20 border border-gray-200 dark:border-gray-700 max-w-full float-left mr-4"
                              src="/img/avatar.jpg"
                              alt="avatar"
                            />
                            <div>
                              <a
                                className="text-lg leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100"
                                href="#"
                                target="_blank"
                              >
                                Ari Budin
                              </a>
                              <span className="md:float-right text-sm">
                                <time dateTime="2020-10-27">Oct 27, 2020</time>
                              </span>
                            </div>
                          </footer>
                          <div>
                            <p>Please support me with give positive rating!</p>
                          </div>
                          <div>
                            <a
                              className="text-red-700 hover:text-red-800"
                              href="#comment-form"
                            >
                              Reply
                            </a>
                          </div>
                        </div>
                        <ul className="ml-12 md:ml-24">
                          <li className="py-2 mt-6">
                            <div className="pb-4 border-b border-gray-200 dark:border-gray-600 border-dashed">
                              <footer>
                                <Image
                                  height={100}
                                  width={100}
                                  className="w-20 h-20 border border-gray-200 dark:border-gray-700 max-w-full float-left mr-4"
                                  src="/img/avatar2.jpg"
                                  alt="avatar"
                                />
                                <div>
                                  <a
                                    className="text-lg leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100"
                                    href="#"
                                    target="_blank"
                                  >
                                    Carlos vila
                                  </a>
                                  <span className="md:float-right text-sm">
                                    <time dateTime="2020-10-27">
                                      Oct 27, 2020
                                    </time>
                                  </span>
                                </div>
                              </footer>
                              <div>
                                <p>Yes Sure!</p>
                              </div>
                              <div>
                                <a
                                  className="text-red-700 hover:text-red-800"
                                  href="#comment-form"
                                >
                                  Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ol>

                    <div id="comment-form" className="mt-12">
                      <h4 className="text-2xl leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">
                        LEAVE A REPLY
                      </h4>
                      <p className="mb-5">
                        Your email address will not be published
                      </p>
                      <div>
                        <form action="#" noValidate>
                          <div className="mt-2" />
                          <div className="mb-6">
                            <textarea
                              className="w-full leading-5 relative py-3 px-5 text-gray-800  border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:border-gray-700 dark:focus:border-gray-600"
                              placeholder="Comment"
                              aria-label="insert comment"
                              rows={4}
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <input
                              className="w-full leading-5 relative py-3 px-5 text-gray-800  border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:border-gray-700 dark:focus:border-gray-600"
                              placeholder="Name"
                              aria-label="name"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <input
                              className="w-full leading-5 relative py-3 px-5 text-gray-800  border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:border-gray-700 dark:focus:border-gray-600"
                              placeholder="Email"
                              aria-label="email"
                              type="email" // Changed 'text' to 'email' to make it an email input field
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <input
                              className="w-full leading-5 relative py-3 px-5 text-gray-800  border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:border-gray-700 dark:focus:border-gray-600"
                              placeholder="Website" // Removed the colon ':' after 'Website'
                              aria-label="website"
                              type="text"
                            />
                          </div>
                          <div className="mb-6">
                            <div>
                              <input
                                className="form-checkbox h-5 w-5 text-red-500 border border-gray-100 dark:border-gray-700 focus:outline-none"
                                id="comment-cookies"
                                name="comment-cookies"
                                type="checkbox"
                                value="yes"
                              />
                              <label className="ml-2" htmlFor="comment-cookies">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </div>
                          </div>
                          <div className="inline-block text-red-500 mb-6 bg-gray-600 hover:bg-blue-500 ">
                            <button
                              type="submit"
                              className="flex items-center py-3 px-5 leading-5 text-gray-100  hover:ring-0 focus:outline-none focus:ring-0"
                            >
                              Post Comment
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last text-gray-800">
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
                    Advertisement
                  </a>
                  <a href="#">
                    <Image
                      layout="responsive"
                      height={100}
                      width={100}
                      className="mx-auto"
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
    </div>
  );
}
export default SingleNews;
