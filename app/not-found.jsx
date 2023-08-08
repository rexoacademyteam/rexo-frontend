"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center my-10">
            <div className="w-full flex justify-center">
                <img src="/assets/404.png" alt="404 page" className="w-full md:w-[30em] my-14 mx-12 md:mx-0" />
            </div>
            <Link href="/">
                <Button color="indigo" size="lg" className="mx-auto mb-6 font-fa">بازگشت به صفحه اصلی</Button>
            </Link>
        </div>
    )
}
