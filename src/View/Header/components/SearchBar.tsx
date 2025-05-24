interface SearchBarProps{
    isVisibileSiderBar:boolean,
    setVisibilitySideBar  : React.Dispatch<React.SetStateAction<boolean>>
}
function SearchBar({isVisibileSiderBar,setVisibilitySideBar}:SearchBarProps) {
  return (
   <div className="flex items-center space-x-4">
   { !isVisibileSiderBar &&
    <button className="w-10 h-10 bg-[#5030e5] rounded-md flex items-center justify-center cursor-pointer" onClick={
        ()=>{setVisibilitySideBar(true)}
    }>
            <img src="/images/img_pause.svg" alt="Menu" className="w-5 h-5" />
          </button>
    }
   <div className="w-[417px] h-11 bg-[#f5f5f5] rounded-md flex items-center px-4">
        <img src="/images/img_searchnormal.svg" alt="Search" className="w-[22px] h-[22px] mr-4" />
        <input
          id="search"
          type="text"
          placeholder="Search for anything..."
          className="bg-transparent text-sm text-[#787486] outline-none w-full"
          onChange={()=>{}}
          />
      </div>
    </div>
  )
}

export default SearchBar
