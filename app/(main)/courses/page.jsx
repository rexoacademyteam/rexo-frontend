"use client"
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Page() {
  const data = [
    {
      label: "Web",
      value: "Web",
      courses: [
        {
          image: "url-to-web-course-image",
          title: "طراحی وب ریسپانسیو",
          price: 880000,
          href: "/webCourses/HtmlCssBootstrap",
        },
        {
          image: "url-to-python-course-image",
          title: "پایتون",
          price: 1880000,
          href: "/webCourses/python",
        }
      ]
    },
    {
      label: "PhotoShop",
      value: "PhotoShop",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Game",
      value: "Game",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
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
            <TabPanel key={value} value={value}>
              {courses && courses.map(({ image, title, price, href }) => (
                <div className="flex-col justify-around align-middle" key={title}>
                  <img src={image} alt="coursePic" className="w-full overflow-hidden" />
                  <h1>{title}</h1>
                  <p>{price}</p>
                  <a href={href}>ثبت سفارش</a>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}