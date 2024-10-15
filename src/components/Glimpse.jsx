export default function Glimpse({image}){
    return(
        <div className="h-[250px] lg:w-[300px] border-[#b36f08fb] border-2 rounded-xl p-1">
            <img src={image} className="w-[300px] h-[240px] rounded-xl"/>
        </div> 
    )
}