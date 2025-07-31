

export function TopContainer({searchFilter}){

    return(
      <div className="  h-[10rem] p-5 ">
        <div className="  sm:flex justify-between m-7">
            <span>
                <img src="/Foody Zone.svg" alt="" />
            </span>
            <span className="">
                <input 
                type="search"
                placeholder="Search Item here....."
                className="rounded-lg border-2 border-red-700 focus:outline-none text-start overflow-hidden w-70 text-white focus:border-pink-400"
                onChange={(e)=>searchFilter(e)}
                />
            </span>
        </div>
      </div>
    )
} 