"use client";

import { AcademicCapIcon, ArrowRightIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader, Checkbox, Typography, Input } from "@material-tailwind/react";
import Link from "next/link";

export default function Login() {
    return (
        <div className="container mx-auto max-w-4xl h-screen w-full px-2 py-4 pb-20 flex flex-col justify-start lg:justify-center items-center">
            <div className="flex w-full pb-6">
                <Link href="/">
                    <Button variant="text" color="blue-gray" className="font-fa text-base btn-flex">
                        <ArrowRightIcon className="w-7 h-7" />
                        بازگشت
                    </Button>
                </Link>
            </div>
            <Card className="w-full max-w-[24rem]">
                <CardHeader
                    color="indigo"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                >
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
                        <AcademicCapIcon className="h-10 w-10" />
                    </div>
                    <Typography className="font-fa text-3xl" variant="h4" color="white">
                        آکادمی رکسو
                    </Typography>
                </CardHeader>
                <CardBody>
                    <form className="mt-8 mb-2">
                        <div dir="ltr" className="mb-4 flex flex-col gap-6">
                            <Input color="indigo" size="lg" label="Username" />
                            <Input color="indigo" type="password" size="lg" label="Password" />
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    من را بخاطر بسپار
                                </Typography>
                            }
                            disabled
                            defaultChecked
                            containerProps={{ className: "-mr-2.5" }}
                        />
                        <Button variant="gradient" color="indigo" className="font-fa text-base mt-6" fullWidth>
                            ورود
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal font-fa">
                            حساب کاربری دارید؟{" "}
                            <a
                                href="#"
                                className="font-medium text-indigo-500 transition-colors hover:text-indigo-700"
                            >
                                وارد شوید
                            </a>
                        </Typography>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}
