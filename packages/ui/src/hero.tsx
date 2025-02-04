"use client";

import Image from "next/image";
import { Button } from "./button";
import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
];

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-20 text-center">
          <h1 className="text-5xl font-serif tracking-tight sm:text-7xl lg:text-8xl max-w-5xl mx-auto">
            Read and retain content
            <span className="block mt-2">10x faster, just like magic</span>
          </h1>

          <p className="my-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Built to index and search through your notes, articles, and books.
          </p>

          <div className="flex flex-col items-center justify-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <Button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Join now
            </Button>
            <Button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Signup
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 my-16">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={{
                  opacity: 0,
                  y: -50,
                  rotate: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: index % 2 === 0 ? 3 : -3,
                }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <Image
                  src={image}
                  width={400}
                  height={600}
                  alt="books"
                  className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
