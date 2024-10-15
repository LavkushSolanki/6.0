export default function Stats({ num, title }) {
    return (
        <div className="inline-flex flex-col items-center h-40 w-40 gap-3 relative">
            <div className="flex justify-center items-center rounded-full w-28 h-28 overflow-hidden border-[#000505] border-2">
                <div className="bg-[#b36f08ce] w-14 h-28 animate-spinslow2">
                </div>
                <div className="flex justify-center items-center rounded-full w-24 h-24 overflow-hidden absolute z-10 bg-black border-[#000505] border-4">
                    <div className="bg-red-600 h-12 w-24 animate-spinslow">
                    </div>
                    <div className="bg-[#000505] w-20 h-20 rounded-full absolute z-20 flex justify-center items-center">
                        <p className="font-anton text-white text-5xl">{num}</p>
                    </div>
                </div>
            </div>
            <h1 className="font-anton text-white text-2xl">{title}</h1>
        </div>
    )
}