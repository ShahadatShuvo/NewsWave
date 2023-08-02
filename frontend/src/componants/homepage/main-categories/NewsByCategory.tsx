import Image from "next/image";
import Link from "next/link";
import React from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getProjects() {
  const res = await fetch(`${apiUrl}/api/news/categories/`);
  const categories = await res.json();

  return categories;
}

export default async function NewsByCategory() {
  const categories = await getProjects();

  return (
    <div>
      {categories?.results?.map((category: any, index: number) => (
        // <li key={category.id}>{category.name}</li>
        <div className="bg-white text-gray-700" key={category.id}>
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                    {category.name}
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <Link href="/news/detail/1">
                        <Image
                          layout="responsive"
                          height={100}
                          width={100}
                          className="max-w-full w-full mx-auto"
                          src="/img/dummy/img6.jpg"
                          alt="alt title"
                        />
                      </Link>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2 text-black">
                          <Link href="news/detail/1" className="text-black">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </Link>
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
              </div>

              {index % 3 === 0 && (
                <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                  <div className="w-full bg-gray-50 h-full">
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
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
