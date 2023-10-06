"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";

export default function Page() {
  const data = [
    {
      label: "Web",
      value: "Web",
      courses: [
        {
          image: "assets/HtmlCSSBanner.png",
          title: "طراحی وب ریسپانسیو",
          price: "880,000 تومان",
          href: "/webCourses/HtmlCssBootstrap",
          teacher: "موسوی زاده",
        },
        {
          image: "assets/pythonBanner.png",
          title: "پایتون",
          price: "1,880,000 تومان",
          href: "/webCourses/python",
          teacher: "مقدمی"
        },
      ],
    },
    {
      label: "PhotoShop",
      value: "PhotoShop",
      courses: [
        {
          image: "assets/photoshopBanner.png",
          title: "دوره متخصص فوتوشاپ",
          price: "880,000 تومان",
          href: "/photoshopCourses/photoshop",
          teacher: "شعبانی"
        },
      ],
    },
    {
      label: "Game",
      value: "Game",
      courses: [
        {
          image: "assets/gdevelopBanner.png",
          title: "دوره مقدماتی بازی سازی",
          price: "880,000 تومان",
          href: "/gameCourses/gdevelop",
          teacher: "اشرفی"
        },
      ],
    },
  ];

  return (
    <div className="mx-auto px-10 m-2">
      <Tabs id="custom-animation" value="Web">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, courses }) => (
            <TabPanel key={value} value={value} className="mt-6">
              <div className="w-full md:flex md:justify-around md:align-middle font-fa">
                {courses &&
                  courses.map(({ image, title, price, href, teacher }) => (
                    <div
                      className="flex-col justify-around align-middle rounded-3xl md:w-72 p-3 md:mt-10 mt-20 mb-16 bg-white shadow-2xl hover:scale-105 transition-all"
                      key={title}
                    >
                      <img
                        src={image}
                        alt="coursePic"
                        className="w-full overflow-hidden -mt-16 mb-4 shadow-2xl rounded-3xl"
                      />
                    <h1 className="font-bold mb-4 text-lg">{title}</h1>
                    <div className="flex justify-between align-middle p-2">
                    <p className="mb-2">مدرس : {teacher}</p>
                      <a href={href} className="text-indigo-500 font-bold font-fa">مشاهده دوره</a></div> 
                     <div className="flex">
                     <Button
                        variant="gradient"
                        color="indigo"
                        className="font-fa text-base my-3 rounded-full w-1/2"
                      >
                        ثبت سفارش
                      </Button>
                      <p className="m-auto">{price}</p>
                     </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
