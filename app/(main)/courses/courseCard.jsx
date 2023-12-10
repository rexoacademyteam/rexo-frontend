import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Button,
  } from "@material-tailwind/react";

export default function CourseCard({ key, title, image, price, teacher, href }) {
    return (
        <div className="flex-col justify-around align-middle rounded-3xl md:w-72 p-3 md:mt-10 mt-20 mb-16 bg-white shadow-2xl hover:scale-105 transition-all vertical-movement"
            key={title} >
                <img
                src={image}
                alt="coursePic"
                className="w-full overflow-hidden -mt-16 mb-4 shadow-2xl rounded-3xl"
              />
            <h1 className="font-bold mb-4 text-lg">{title}</h1>
            <div className="flex justify-between align-middle p-2">
                <p className="mb-2 font-fa">مدرس : {teacher}</p>
                <a href={href} className="text-indigo-500 font-bold font-fa">مشاهده دوره</a>
            </div> 
            <div className="flex">
                <Button
                    variant="gradient"
                    color="indigo"
                    className="font-fa text-base my-3 rounded-full w-1/2 font-fa"
                >
                    ثبت سفارش
                </Button>
            <p className="m-auto">{price}</p>
            </div>
        </div>
    )
}