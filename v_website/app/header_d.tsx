import { Hover } from "./components/mouse_hover";

export const HeaderDesktop = ({className} : {className?:string;}) => {
    return(
        <div>
        <div className="relative h-32 w-full">
            <div className="">
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Sketch
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
        </div>
    );
};