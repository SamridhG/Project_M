import React from 'react'
interface LogoComponentProps{
    setVisibilitySideBar: React.Dispatch<React.SetStateAction<boolean>>
    theme:boolean,
}
function LogoComponent({setVisibilitySideBar,theme}:LogoComponentProps) {
  return (
    
    <div className="flex items-center mb-6">
        <img src="/images/img_colorfilter.svg" alt="Logo" className="w-6 h-6 mr-2" />
        <h1 className={`text-xl font-semibold ${theme ? "text-[#0d062d]": "text-white"}`}>Project M.</h1>
        <div className="ml-auto flex cursor-pointer" onClick={()=>{setVisibilitySideBar(false)}}>
          <img src="/images/img_arrowleft.svg" alt="Arrow" className="w-5 h-5" />
          <img src="/images/img_arrowleft.svg" alt="Arrow" className="w-5 h-5" />
        </div>
      </div>
    
  )
}
export default LogoComponent
