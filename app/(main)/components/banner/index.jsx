"use client";
import 'animate.css';

import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function MainBanner() {
  return (
    <div className="pt-10 px-4 mt-6">
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-between container mx-auto">
        <div className="flex-col justify-around mt-9">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-center md:text-start text-slate-700">
            برنامه نویسی رو آسون یــــــــــــــــاد بگیر!
          </h1>
          <h1 className="text-slate-500 m-auto text-lg md:text-xl text-center md:text-start">
            ما کنارتون هستیم تا زمانی که به رویــــــاهاتون برسید
          </h1>
          <h1 className="text-slate-500 m-auto text-lg md:text-xl text-center md:text-start">
            آموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی دائمی</h1>
          <h1 className="text-slate-500 m-auto text-lg md:text-xl text-center md:text-start mb-4">
            با ما همراه باشید
          </h1>
          <div className="flex flex-col md:flex-row items-stretch align-middle px-2 gap-4">
            <Button size="md" variant="gradient" color="indigo" className="flex-grow font-fa text-base btn-flex">
              <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
              مشاوره!
            </Button>
            <Button size="md" variant="outlined" color="indigo" className="flex-grow font-fa text-base border-2">
              بزن بریم!
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/main_section_banner.png"
            className="w-[500px] m-auto movement-animation"
            alt="main-banner"
          />
        </div>
      </div>
    </div>
  );
}
