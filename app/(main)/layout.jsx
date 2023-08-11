import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function MainLayout({ children }) {
    return (
        <div dir="rtl">
            <Header />
            <div className="container mx-auto max-w-7xl">
                {children}
            </div>
            <Footer />
        </div>
    )
}
