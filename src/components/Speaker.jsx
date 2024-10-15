export default function Speaker({ name, image, position, minus }) {
    return (
        <div className={`w-40 flex flex-col items-center gap-1 bg-[#7b070b] rounded-xl  pt-0 `}>
            <img src={image} className="rounded-t-xl h-36 w-full " />
            <div className="px-2 p-1">
                <h1 className="font-anton text-white text-xl text-center">{name}</h1>
                <p className="font-anton text-white text-sm text-center">{position}</p>
            </div>
        </div>
    )
}