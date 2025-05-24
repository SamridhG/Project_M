import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { options } from "../constants/constants"
interface SideBarOptionsProps{
    theme:boolean
}
function SideBarOptions({theme}:SideBarOptionsProps) {
    const navigate=useNavigate()
  return (
    <div className="flex flex-col space-y-6">
  {options.map(({ path, imgSrc, title, alt }) => (
    <div key={path} className={`flex items-center ${theme?"text-[#787486]":"text-white"} cursor-pointer`} onClick={()=>{navigate(path)}}>
      <img src={imgSrc} alt={alt} className="w-6 h-6 mr-3" />
      <span className="text-base">{title}</span>
    </div>
  ))}
</div>

  )
}

export default SideBarOptions
