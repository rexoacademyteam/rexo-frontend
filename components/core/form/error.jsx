export default function ErrorControl({ formik, name }) {
    if (formik.errors[name] && formik.touched[name]) {
        return (<div dir="rtl" className="text-start py-1 font-fa text-red-500">{formik.errors[name]}</div>)
    }
    return (<></>)
}
