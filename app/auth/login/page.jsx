"use client";

import ErrorControl from "@/components/core/form/error";
import { TOAST_OPTIONS } from "@/constants/toast";
import useAuth from "@/hooks/useAuth";
import { AcademicCapIcon, ArrowRightIcon, BanknotesIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader, Checkbox, Typography, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function Login() {
    const router = useRouter()
    const auth = useAuth()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required("نام کاربری اجباریست"),
            password: Yup.string().required("رمز عبور اجباریست"),
        }),
        onSubmit: data => onLogin(data)
    })

    const onLogin = async data => {
        try {
            const result = await auth.Login(data)
            if (result.success) {
                router.push("/");
                toast("خوش آمدید", { type: "success", ...TOAST_OPTIONS });
            } else if (!result.success && result.code == 1) {
                toast(result.message, { type: "error", ...TOAST_OPTIONS });
            } else if (!result.success && result.code == 2) {
                toast(result.message, { type: "warning", ...TOAST_OPTIONS });
            } else {
                toast(result.message, { type: "warning", ...TOAST_OPTIONS });
            }
        } catch(error) {
            toast("خطایی رخ داد", { type: "warning", position: "top-center" });
        }
    }

    return (
        <div className="container mx-auto max-w-4xl h-[60%] w-full px-2 py-2 pb-20 flex flex-col justify-start lg:justify-center items-center">
            <div className="flex w-full pb-6">
                <Link href="/">
                    <Button variant="text" color="blue-gray" className="font-fa text-base btn-flex">
                        <ArrowRightIcon className="w-7 h-7" />
                        بازگشت
                    </Button>
                </Link>
            </div>
            <Card className="w-full max-w-md">
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
                    <form onSubmit={formik.handleSubmit} className="mt-8 mb-2">
                        <div dir="ltr" className="mb-4 flex flex-col gap-6">
                            <div className="mb-2">
                                <Input name="username" error={formik.errors.username && formik.touched.username} onChange={formik.handleChange} onBlur={formik.handleBlur} color="indigo" size="lg" label="Username" />
                                <ErrorControl name="username" formik={formik} />
                            </div>
                            <div className="mb-2">
                                <Input name="password" error={formik.errors.password && formik.touched.password} onChange={formik.handleChange} onBlur={formik.handleBlur} color="indigo" type="password" size="lg" label="Password" />
                                <ErrorControl name="password" formik={formik} />
                            </div>
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal font-fa"
                                >
                                    من را بخاطر بسپار
                                </Typography>
                            }
                            disabled
                            defaultChecked
                            containerProps={{ className: "-mr-2.5" }}
                        />
                        <Button type="submit" variant="gradient" color="indigo" className="font-fa text-base mt-6" fullWidth>
                            ورود
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal font-fa">
                            حساب کاربری ندارید؟{" "}
                            <a
                                href="#"
                                className="font-medium text-indigo-500 transition-colors hover:text-indigo-700"
                            >
                                یکی بسازید
                            </a>
                        </Typography>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}
