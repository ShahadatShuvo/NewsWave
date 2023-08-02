import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsByCategory from "./NewsByCategory";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getProjects() {
  const res = await fetch(`${apiUrl}/api/news/categories/`);
  const categories = await res.json();

  return categories;
}

export default async function AllNewsCategories() {
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

                <NewsByCategory name={category.name} />
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
