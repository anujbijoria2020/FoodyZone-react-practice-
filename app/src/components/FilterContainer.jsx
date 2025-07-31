
export function FilterContainer({onClickFilter}){
    return(
   <div className="">
         <div className=" flex justify-center gap-1">
            <button className="bg-[#ff4343] rounded-xs w-20 m-1 text-center hover:cursor-pointer"
            onClick={()=>{
                onClickFilter("all")
            }}
            >ALL</button>
            <button className="bg-[#ff4343] rounded-xs w-20 m-1 text-center hover:cursor-pointer"
            onClick={()=>{
                onClickFilter("breakfast");
            }}
            >BreakFast</button>
            <button className="bg-[#ff4343] rounded-xs w-20 m-1 text-center hover:cursor-pointer"
            onClick={()=>{
                onClickFilter("lunch")
            }}
            >Lunch</button>
            <button className="bg-[#ff4343] rounded-xs w-20 m-1 text-center hover:cursor-pointer"
               onClick={()=>{
                onClickFilter("Dinner")
            }}
            >Dinner</button>
        </div>
        </div>
    )
}