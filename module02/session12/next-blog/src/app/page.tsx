"use client"
import { useEffect, useState } from "react";
import { documentToHtmlString  } from '@contentful/rich-text-html-renderer';
import { Interweave } from 'interweave';
import { getBlogs } from "./../api/blog"
import Image from "next/image";

export default function Home() {

  const [blogs, setBlogs] = useState([])

  const handleGetBlogsData = async () => {
    const data = await getBlogs()
    setBlogs(data)
  }

  useEffect(() => {
    handleGetBlogsData()
  })

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
       
        <div>
          {blogs.map((item:any, index) => {
            return(<div key={index} style={{ margin:"0 0 10px 0"}}>
              <div><strong>{item?.fields?.title}</strong></div>
              <hr></hr>
              <div>{item?.image_url && (<img src={item?.image_url} height={100} width={300} alt={item?.fields?.title} />)}</div>
              <Interweave content={documentToHtmlString(item?.fields?.body)} />
            </div>)
          })}
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
