"use client";

import { Button, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";

export default function Content({ data }) {
    return (
        <div className="my-12 px-4">
            <Tabs value="w">
                <TabsHeader className="h-12">
                        <Tab value="w" className="font-fa font-semibold">
                            <h2 >
                                توسعه وب
                            </h2>
                        </Tab>
                        <Tab value="g" className="font-fa font-semibold">
                            <h2 className="font-fa">
                                طراحی بازی
                            </h2>
                        </Tab>
                        <Tab value="p" className="font-fa font-semibold">
                            <h2 className="font-fa">
                                گرافیک
                            </h2>
                        </Tab>
                </TabsHeader>
                <TabsBody>
                        <TabPanel value="w">
                            Web
                        </TabPanel>
                        <TabPanel value="g">
                            Games
                        </TabPanel>
                        <TabPanel value="p">
                            Graphics
                        </TabPanel>
                </TabsBody>
            </Tabs>
        </div>
    )
}
