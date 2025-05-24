import React from 'react';
import { LABELS } from './constants/constant';
import SearchBar from './components/SearchBar';
interface HeaderProps {
  isVisibileSiderBar:boolean,
    setVisibilitySideBar: React.Dispatch<React.SetStateAction<boolean>>
    theme:boolean,
    setTheme:React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ isVisibileSiderBar,setVisibilitySideBar,theme,setTheme }:HeaderProps){
  return (
    <div className="flex items-center justify-between">
      
      <SearchBar isVisibileSiderBar={isVisibileSiderBar} setVisibilitySideBar={setVisibilitySideBar}/>
      
      <div className="flex items-center space-x-6">
         {!theme ?
          <img src="/images/LightTheme.svg" alt="sun" className="w-6 h-6 cursor-pointer" onClick={()=>{
            setTheme(true)
          }}/>
         :<img src="/images/DarkTheme.svg" alt="moon" className="w-6 h-6 cursor-pointer" onClick={()=>{
            setTheme(false)
          }}/>}
        <img src="/images/img_calendar2.svg" alt="Calendar" className="w-6 h-6 cursor-pointer" />
        <img src="/images/img_messagequestion.svg" alt="Messages" className="w-6 h-6 cursor-pointer" />
        <img src="/images/img_vuesax_linear_notification.svg" alt="Notifications" className="w-6 h-6 cursor-pointer" />
        
        <div className="flex flex-col items-end ml-4">
          <span className={`text-base ${theme?"text-[#0d062d]":"text-white"}`}>{LABELS.name}</span>
          <span className={`text-sm ${theme?"text-[#787486]":"text-white"}`}>{LABELS.address}</span>
        </div>
        <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="w-[18px] h-[18px]" />
      </div>
    </div>
  );
};

export default Header;