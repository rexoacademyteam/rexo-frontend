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
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-16 m-5">
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
              <div className="w-full flex justify-around align-middle font-fa">
                {courses &&
                  courses.map(({ image, title, price, href, teacher }) => (
                    <div
                      className="flex-col justify-around align-middle rounded-3xl w-72 p-3 mt-10 bg-white"
                      key={title}
                    >
                      <img
                        src={image}
                        alt="coursePic"
                        className="w-full overflow-hidden -mt-14 mb-4"
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
