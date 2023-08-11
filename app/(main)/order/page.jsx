"use client";

import UniInput from "@/components/core/form/input";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, Checkbox, Typography, Input } from "@material-tailwind/react";
import Link from "next/link";

export default function OrderPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4">
            <div className="flex flex-col items-center justify-center py-10">
                <div className="flex w-full pb-4">
                    <Link href="/">
                        <Button variant="text" color="blue-gray" className="font-fa text-base btn-flex">
                            <ArrowRightIcon className="w-7 h-7" />
                            بازگشت
                        </Button>
                    </Link>
                </div>
                <Card className="max-w-2xl w-full" color="transparent" shadow={false}>
                    <Typography className="font-fa" variant="h4" color="blue-gray">
                        ثبت سفارش
                    </Typography>
                    <Typography className="font-fa mt-1 font-normal" color="gray">
                        وب سایت یا وب اپلیکیشن مورد نظرتو توضیح بده
                    </Typography>
                    <form className="mt-8 mb-2 w-full">
                        <div className="mb-4 flex flex-col gap-6">
                            <div>
                                <UniInput placeholder="نام شما" />
                            </div>
                            <div>
                                <UniInput placeholder="شماره تماس" />
                            </div>
                            <div>
                                <UniInput type="textarea" placeholder="توضیحات پروژه" />
                            </div>
                        </div>
                        <Checkbox
                            color="indigo"
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal font-fa"
                                >
                                    <Link
                                        href=""
                                        className="font-medium transition-colors text-indigo-500 hover:text-indigo-800"
                                    >
                                        &nbsp;شرایط و مقررات
                                    </Link>
                                    &nbsp;
                                    را قبول دارم
                                </Typography>
                            }
                            containerProps={{ className: "-mr-2.5" }}
                        />
                        <Button variant="gradient" color="indigo" className="mt-6 font-fa" fullWidth>
                            ثبت سفارش
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal font-fa">
                            سوالی دارید؟{" "}
                            <a href="#" className="font-medium text-indigo-500">
                                تیکت کنید
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </div>
    )
}
