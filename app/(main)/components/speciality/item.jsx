const SpecialityItem = ({ title, icon }) => {
    return (
        <div className="px-1 py-2 relative w-1/2 md:w-[14rem] z-20 movement-animation">
            <div
                className="hover:rotate-6 transform transition duration-300 border-2 border-transparent w-4/5 mx-auto bg-white hover:shadow-lg hover:scale-105 hover:shadow-gray-300/50 cursor-pointer rounded-2xl flex flex-col
                  items-center justify-center py-6">
                <div className="bg-indigo-400 text-center text-white w-14 h-14 md:w-[70px] md:h-[70px] rounded-3xl mb-3 mx-auto">
                    <span className="flex justify-center h-full w-full">{icon}</span>
                </div>
                <h1 className="font-bold">{title}</h1>
            </div>
            <div className="-z-10 absolute top-0 bottom-0 start-0 end-0">
                <div className="w-full h-full bg-gradient-to-r from-pink-300 via-deep-purple-300 to-indigo-400 rounded-full blur-2xl opacity-40"></div>
            </div>
        </div>
    )
}

export default SpecialityItem
