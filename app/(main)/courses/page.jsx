"use client"
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
              <div className="w-full flex justify-around align-middle">
              {courses && courses.map(({ image, title, price, href }) => (
                  <div className="flex-col justify-around align-middle rounded-md w-72 p-3 mt-10" key={title}>
                  <img src={image} alt="coursePic" className="w-full overflow-hidden" />
                  <div className="flex justify-between align-middle font-fa">
                  <h1 className="font-bold">{title}</h1>
                  <p>{price}</p>
                  </div>
                  <a href={href}>
                      <Button variant="gradient" color="indigo" className="font-fa text-base my-3 rounded-full w-full">
                            ثبت سفارش
                        </Button>
                      </a>
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