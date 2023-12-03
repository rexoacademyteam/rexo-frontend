import Link from "next/link";

const contactWays = [
    { image: "assets/instagram.png", title: "اینستاگرام", href: "" },
    { image: "assets/youtube.png", title: "یوتیوب", href: "", },
    { image: "assets/telegram.png", title: "کانال تلگرام", href: "" },
    { image: "assets/github.png", title: "گیت هاب", href: "" },
    { image: "assets/call.png", title: "تماس", href: "" },
    { image: "assets/gmail.png", title: "ایمیل", href: "" },
];

export default function ContactPage() {
    return (
        <>
            <div className="container mx-auto flex flex-wrap justify-center items-center w-9/12 gap-8 pt-8 pb-28 md:py-28">
                {contactWays.map((contactWay, it) => (
                    <Link className="w-[200px]" href={contactWay.href ?? ""} key={it}>
                        <div className="z-30 block w-full relative movement-animation">
                            <div className="absolute top-0 bottom-0 start-0 end-0">
                                <div className="-z-10 w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full blur-2xl opacity-70"></div>
                            </div>

                            <div className="z-20 bg-white text-center flex flex-col justify-around align-middle p-2 mt-5 hover:shadow-lg hover:scale-105 hover:shadow-gray-300/50 hover:rotate-3 transform transition duration-300 rounded-xl">
                                <div className="w-[100px] h-[100px] m-auto p-1 flex justify-center items-end">
                                    <img className="" src={contactWay.image} alt="contactWayImage" />
                                </div>
                                <p className="text-gray-700 font-bold text-center mt-4">{contactWay.title}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
