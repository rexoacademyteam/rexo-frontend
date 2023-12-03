"use client";

import { BookOpenIcon, LinkIcon, QuestionMarkCircleIcon, ArrowDownOnSquareIcon, ChevronDoubleUpIcon, } from "@heroicons/react/24/outline";


const clickHandler = () => {

}



const links = [
    {
        name: "دوره های آموزشی",
        href: "courses",
        logo: <BookOpenIcon className="w-6 h-6" />,
    },
    {
        name: "چرا رکسو؟",
        href: "whyRexo",
        logo: <QuestionMarkCircleIcon className="w-6 h-6" />,
    },
    { name: "ارتباط با ما", href: "contact", logo: <LinkIcon className="w-6 h-6" /> },
    {
        name: "ثبت سفارش",
        href: "ordering",
        logo: <ArrowDownOnSquareIcon className="w-6 h-6" />,
    },
];

export default function Footer() {
    return (
        <div className="mt-10">
            <div className="bg-white rounded-tl-2xl rounded-tr-2xl h-auto hidden sm:flex sm:flex-row">
                <div className=" block md:flex md:justify-around md:align-middl container mx-auto pt-6 pb-6">
                    <div className="flex-col justify-around align-middle">
                        <div className="flex flex-col lg:flex-row justify-center items-center">
                            <div className="mr-3">
                                <img
                                    src="assets/brand_logo.png"
                                    alt="brand-logo"
                                    className="w-28 h-16"
                                />
                            </div>
                            <div className="flex-col justify-around align-middle mr-4">
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 text-center md:text-start">
                                    آکادمی رکسو
                                </h1>
                                <h1 className="text-lg text-center md:text-start">آموزش برنامه نویسی | فوتوشاپ | پروژه محور | پشتیبانی دائمی</h1>
                            </div>
                        </div>
                        <div className="md:max-w-lg w-auto p-3 md:w-full mt-5">
                            <p className="text-base text-center md:text-start mb-4 md:mb-2 text-gray-700">
                                هدف آکادمی رکسو ارائه بهترین دوره های آموزش برنامه نویسی و فوتوشاپ به
                                دانشجویان برای ورود به بازار کار است و برای رسیدن به این هدف یک
                                سری استانداردها تعیین شده و به صورت سختگیرانه روی دوره ها اعمال
                                میشود. این استاندار ها شامل تدریس سلیس و روان برای انتقال مفاهیم
                                در کنار کامل و جامع بودن دوره ها است به صورتی که با دیدن یک دوره
                                به سطح مناسب و حرفه ای برسید. همچنین دوره ها پروژه محور هستند تا
                                کاربرد مفاهیمی که یاد میگیرید را درک کنید و اگر احیانا ابهامی پیش
                                آید میتوانید از پشتیبانی دائمی‌ ما استفاده کنید و سوال هایتان را
                                بپرسید. و در آخر به یکی از مهم ترین ویژگی دوره ها اشاره میکنم و آن
                                هم آپدیت و بروز بودن آن ها مطابق آخرین تکنولوژی ها میباشد.
                            </p>
                            <div className="flex justify-around mt-4">
                                <div className="inline-flex justify-center align-center rounded-full text-gray-600 hover:bg-gray-200 p-2 text-center hover:scale-[150%] transform transition duration-200"><a href=""><svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 hover:text-red-600 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg></a></div>
                                <div className="inline-flex justify-center align-center rounded-full text-gray-600 hover:bg-gray-200 p-2 text-center hover:scale-[150%] transform transition duration-200"><a href=""><svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 hover:text-blue-600 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a></div>
                                <div className="inline-flex justify-center align-center rounded-full text-gray-600 hover:bg-gray-200 p-2 text-center hover:scale-[150%] transform transition duration-200"><a href=""><svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 hover:text-blue-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg></a></div>
                                <div className="inline-flex justify-center align-center rounded-full text-gray-600 hover:bg-gray-200 p-2 text-center hover:scale-[150%] transform transition duration-200"><a href=""><svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-8 h-8 hover:text-red-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg></a></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full py-4">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-center font-bold text-gray-800 border-b-2 border-indigo-800 text-2xl pb-4">بخش های سایت</h1>

                                {links
                                    ? links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            className="flex gap-x-2 justify-center md:justify-start rounded-xl pr-3 md:p-1 hover:text-indigo-600 cursor-pointer"
                                        >
                                            {link.logo}
                                            <h1 className="text-lg">{link.name}</h1>
                                        </a>
                                    ))
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div>گلدون 2</div>
                </div>
            </div>

            <div className="block sm:hidden">
                <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 overflow-hidden">
                    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                        <button data-tooltip-target="tooltip-home" type="button" className="hover:bg-gray-200 inline-flex flex-col items-center justify-center px-5 rounded-l-full dark:hover:bg-gray-800 group">
                            <a href="./courses">
                            <BookOpenIcon className="w-8 h-8" />
                            </a>
                        </button>
                        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">

                        </div>
                        <button data-tooltip-target="tooltip-wallet" type="button" className="hover:bg-gray-200 inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group">

                            <a href="./WhyRexo">
                            <QuestionMarkCircleIcon className="w-8 h-8" />
                            </a>

                        </button>
                        <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        </div>
                        <div className="flex items-center justify-center">
                            <button data-tooltip-target="tooltip-new" type="button" onClick={clickHandler} className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                <a href="#top">
                                <ChevronDoubleUpIcon className="w-7 h-7 text-white" />
                                </a>
                            </button>
                        </div>
                        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        </div>
                        <button data-tooltip-target="tooltip-settings" type="button" className="hover:bg-gray-200 inline-flex flex-col items-center justify-center px-5 dark:hover:bg-gray-800 group">
                            <a href="contact">
                            <ArrowDownOnSquareIcon className="w-8 h-8" />
                            </a>
                        </button>
                        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        </div>
                        <button data-tooltip-target="tooltip-profile" type="button" className="hover:bg-gray-200 inline-flex flex-col items-center justify-center px-5 rounded-r-full dark:hover:bg-gray-800 group">
                            <a href="order">
                            <LinkIcon className="w-8 h-8" />
                            </a>
                        </button>
                        <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
