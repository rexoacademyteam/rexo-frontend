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
import CourseCard from "./courseCard.jsx";


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
    <div className="mx-auto px-10 m-2 min-h-screen">
      <Tabs id="custom-animation" value="Web">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="font-fa">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, courses }, pk) => (
            <TabPanel key={value} value={value} className="mt-6">
              <div className="w-full md:flex md:justify-around md:align-middle font-fa">
                {courses ?
                  courses.map(({ image, title, price, href, teacher }) => (
                    <CourseCard key={pk} title={title} href={href} price={price} image={image}  />
                  )) : null}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
