"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const { userId } = useAuth();

  return (
    <section className="text-gray-600 body-font py-2">
      <div className="container mx-auto flex px-2 py-5 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          // src="../../public/what-is-a-blog-1.webp"
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp"
          />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">
            OtakuChronicle: Share Your Arc
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            Explore the creative realm of OtakuChronicle, where ideas blossom
            and stories unfold. Share your thoughts, craft narratives, and join
            a community passionate about expression and inspiration.
          </p>
          <div className="flex justify-center">
            { userId ?
              <>
                <Link href='/create-post' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Write Blog
                </Link>
                <Link href={`/profile/${userId}`} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  My Blogs
                </Link>
              </> : <>
                <Link href={`/sign-in`} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Sign In
                </Link>
              </> 
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
