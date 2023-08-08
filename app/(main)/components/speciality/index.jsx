"use client";

import { ClockIcon, CubeIcon, CurrencyDollarIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import SpecialityItem from "./item";

const Speciality = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center pt-14 pb-10 gap-y-6">
        <SpecialityItem title="کاربردی و پروژه محور" icon={<CubeIcon className="w-12 h-12 m-auto" />} />
        <SpecialityItem title="ویدیو کوتاه" icon={<ClockIcon className="w-12 h-12 m-auto" />} />
        <SpecialityItem title="تضمین کیفیت" icon={<ShieldCheckIcon className="w-12 h-12 m-auto" />} />
        <SpecialityItem title="پشتیبانی همیشگی" icon={<UserGroupIcon className="w-12 h-12 m-auto" />} />
        <SpecialityItem title="تضمین بازگشت وجه" icon={<CurrencyDollarIcon className="w-12 h-12 m-auto" />} />
      </div>
      <hr />
    </>
  )
}

export default Speciality
