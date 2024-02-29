import Image from "next/image";
import { Hover } from "./components/mouse_hover";
import { HeaderDesktop } from "./header_d";
import { HeaderMobile } from "./header_m";

// list of sketch buttons to switch things around
// resume 
// side projects
// scrolling down switches background
// explanation on how to build site
//
//
export default function Home() {
  return (
    <main className="absolute bg-sky-900 h-full w-full">
      <div>
        {window.innerWidth > 1200 ? <HeaderDesktop/>: <HeaderMobile/>}
        <div className="relative h-32 w-full">
          <div className="grid grid-cols-6 gap-x-5 items-center pt-6 absolute right-0 top-0">
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              About
            </button>
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Experience
            </button>
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Work
            </button>
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Contact
            </button>
            <button className="">
              resume
            </button>
          </div>

        </div>
        <Hover/>
        <div>
          
          </div>
          
      </div>
      
    </main>
    
    
   
  );
}
