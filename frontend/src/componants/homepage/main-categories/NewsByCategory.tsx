import Image from "next/image";
import Link from "next/link";
import React from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function NewsByCategory({ name }: { name: string }) {
  async function getProjects() {
    const res = await fetch(`${apiUrl}/api/news/posts/${name}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const newsList = await res.json();

    return newsList.results;
  }
  const newsList = await getProjects();

  console.log("cat name:", name);
  console.log("newsList:", newsList);

  return (
    <div>
      <div className="flex flex-row flex-wrap -mx-3">
        {newsList.length &&
          newsList?.map((news: any, index: number) => (
            <div
              key={news.id}
              className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100"
            >
              <div className="flex flex-row sm:block hover-img">
                <Link href="/news/detail/1">
                  <Image
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
                      {news.title}
                    </Link>
                  </h3>
                  <p className="hidden md:block text-gray-600 leading-tight mb-1">
                    {news.short_description}
                  </p>
                  <a className="text-gray-500" href="#">
                    <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                    {name}
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
