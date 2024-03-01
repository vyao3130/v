import Image from "next/image";
import { UseWindowDimensions } from "./components/get_window_dimensions";
import IconLink from "./components/icon_links";
import { Blurb } from "./icons/brief_blurb";

// 
// resume 
// side projects
// scrolling down switches background
// explanation on how to build site
// className="absolute bg-sky-900 h-full w-full"
//Developer with a knack for problem-solving | Proficient in Python, Automation, and Java ► Previous experience at Ericsson
export default function Home() {
  return (
      <main>
        <div className="bg-slate-200">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">{"Hi! I'm Vivian 👋"}</h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-950 sm:text-xl">{"Previously Test Engineer at Ericsson ► Developer with a knack for problem-solving ► Proficient in Python and Java"}</h2>
            <p className="mt-4 max-w-s text-neutral-950 leading-normal">{"I'm a passionate Junior Software Developer with a knack for solving real-world problems through code. With a foundation in technologies like Python, JavaScript, and a flair for modern frameworks such as React and Next.js, I bring my creative ideas to life. My journey has led me through diverse experiences, from streamlining operations with Python at Ericsson to enhancing learning at Queen's University as a Teaching Assistant."}
            </p>
            <Blurb/>
          </header>
          </div>
        </div>
    </main>
    
    
   
  );
}
