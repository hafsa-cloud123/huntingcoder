"use client";
import Image from "next/image";
import Link from "next/link";
import Dummy from "./Components/dummy";
import img from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Dummy />
        <style jsx>
          {`
            .mySpan {
              color: red;
              font-size: 30px;
            }
              .myImg{
              border-radius: 10px;
              
              margin-left: 50px;
              }
          `}
        </style>

        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 dummy">
            Hunting Coder
          </h1>
          <img className="myImg" src="/home.jpg" />
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A blog for hunting coders by a hunting coder{" "}
          </p>
          <span className="mySpan">Latest Blogs</span>
          {/* <h2>Popular Blogs</h2> */}
          <div className="blogs">
            <div className="blogItem ">
              <h3>How to learn Javascript in 2026?</h3>
              <p>Javascript is the language used to design logic for the web</p>
            </div>
            <div className="blogItem">
              <h3>How to learn Javascript in 2026?</h3>
              <p>Javascript is the language used to design logic for the web</p>
            </div>
            <div className="blogItem">
              <h3>How to learn Javascript in 2026?</h3>
              <p>Javascript is the language used to design logic for the web</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
