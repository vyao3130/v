import Image from "next/image";
import { UseWindowDimensions } from "./components/get_window_dimensions";
import { Blurb } from "./icons/brief_blurb";
import Link from "next/link";

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
        <div className="bg-slate-200 ">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0  lg:flex lg:justify-between lg:gap-10">
            <header className="mb-16 lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">{"Hi! I'm Vivian 👋"}</h1>
              <h2 className="text-lg font-medium tracking-tight text-neutral-950 sm:text-xl">{"Previously Test Engineer at Ericsson ► Developer with a knack for problem-solving ► Proficient in Python and Java"}</h2>
              <p className="max-w-s text-neutral-950 leading-normal pr-16">{"I'm a passionate Junior Software Developer with a knack for solving real-world problems through code. "}
              </p>
              <Blurb/>
            </header>
        <div className="lg:w-1/2 lg:py-24">
          <section id="about "className="mb-16 scroll-mt-16 md:mb-24 lg:mb-12 lg:scroll-mt-24">
            <p>{"With a foundation in technologies like Python, JavaScript, and a flair for modern frameworks such as React and Next.js, I bring my creative ideas to life. My journey has led me through diverse experiences, from streamlining operations with Python at Ericsson to enhancing learning at Queen's University as a Teaching Assistant."}</p>
            </section>
          <section id="resume" className="mb-16 scroll-mt-16 md:mb-12 lg:mb-12 lg:scroll-mt-24">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">{"Resume"}</h2>
            <p className="mb-4">{"I'm currently working in a Tech Support Role at University Plumbing, where I'm responsible for providing technical assistance and answers to users questions and assist users by troubleshooting problems with computer hardware or software. I'm also a Teaching Assistant at Queen's University, where I help students understand the fundamentals of software development."}</p>
            <Link href="/vyao_resume.pdf" className="group text-lg font-medium tracking-tight text-neutral-950 sm:text-xl">
              <span className="inline-block">
                View Full Resume
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                </svg>
              </span> 
            </Link>
            </section>
          <section id="projects" className="mb-16 scroll-mt-16 md:mb-12 lg:mb-12 lg:scroll-mt-24">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">{"Projects"}</h2>
            <p className="mb-4">{"I've worked on a variety of projects, ranging from web development to automation. Here are a few of my favorites."}</p>
            <div className="grid grid-cols-1 gap-8">

              <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg" style=  {{  backgroundImage: `url(/plant_calendar.jpg)`, backgroundSize: 'cover' }}>
                  <h3 className="bg-white mt-4 text-lg font-medium tracking-tight text-neutral-950">{"Plant Calendar"}</h3>
                  <p className="bg-white mt-2 text-neutral-950">{"Developing an interactive web application using Next.js, React, TypeScript, and Tailwind CSS, designed to inform users about the optimal times to start germinating various plants"}</p>
              </div>

              </div>
            </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"><p>{"Built with Next.js and Tailwind CSS, and deployed on a Digital Ocean droplet."}</p>
          </footer>
          </div>
        </div>
        </div>
    </main>
    
    
   
  );
}
