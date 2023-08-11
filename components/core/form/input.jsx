import { useMemo } from "react"

export default function UniInput({ type="text", name, placeholder="", onChange, onBlur, defaultValue="" }) {
    const classes = useMemo(() => {
        const base = "py-3 px-4 block w-full focus:outline-none border-2 border-gray-200 rounded-md text-base focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 font-fa "
        return base
    }, [type])

    if (type == "textarea") {
        return (
            <textarea className={classes} name={name} onChange={onChange} onBLur={onBlur} rows={4} placeholder={placeholder} defaultValue={defaultValue}></textarea>
        )
    }

    return (
        <input className={classes} name={name} onChange={onChange} onBLur={onBlur} type={type} placeholder={placeholder} defaultValue={defaultValue ?? ""} />
    )
}
