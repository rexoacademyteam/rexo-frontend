import ProductItem from "./item";

const texts = {
    game: {
        caption: `صنعت بازی سازی یکی از مهمترین و پردرآمدترین صنایع در جهان امروز است
        و توانسته مخاطبی به بزرگی 2 میلیارد از جمعیت جهان را به خود اختصاص
        دهد، بازی سازی نه تنها در سرگرمی تاثیر گذاشته بلکه امروزه در فرهنگ
        سازی و شبکه سازی اجتماعی نیز تاثیر بسزایی گذاشته است.`
    },
    photoShop: {
        caption: `فتوشاپ یکی از محبوب‌ترین و کاربردی‌ترین نرم‌افزارهای ویرایش تصویر در دنیا است و یادگیری فتوشاپ می‌تواند به شما کمک کند تا در حوزه‌های مختلفی از جمله طراحی گرافیکی، تبلیغات، فیلم‌سازی و غیره به صورت حرفه‌ای فعالیت کنید و به ارتقای مهارت‌های خود بپردازید.`
    },
    web: {
        caption: `در دنیای امروزی هر فرد صاحب کسب و کار یا شرکت های مختلف در هر رده ای برای دسترسی بهتر به تمامی خریدارن خود بدون در نظرگیری فاصله جغرافیای در تمام طول روز، و همچنین برای انجام امور فیزیکی گذشته بدون نیاز به نیروی انسانی یا صرف کردن تعداد زیادی تجهیزات برای ثبت و ... از سایت استفاده می کنند. این حوزه برای علاقه مندان به 2 دسته ی فرانت اند و بک اند تقسیم می شود.`
    }
}

export default function ProductSection() {
    return (
        <div className="py-2 my-14">
            <div className="flex flex-col gap-8 container mx-auto px-2">
                <ProductItem link="/courses" scheme="blue" title="آموزش فوتوشاپ" thumbnail="/assets/products/photoshop.png" caption={texts.photoShop.caption} />
                <ProductItem rev link="/courses" scheme="green" title="آموزش طراحی وبسایت" thumbnail="/assets/products/web.png" caption={texts.web.caption} />
                <ProductItem link="/courses" scheme="rose" title="آموزش ساخت بازی" thumbnail="/assets/products/game.png" caption={texts.game.caption} />
            </div>
        </div>
    )
}
