
import Button from '../../components/ui/Button';
import AvtarFrame from './components/AvtarFrame';
interface ProjectHeaderProps {
  title: string;
  theme:boolean
}
function ProjectHeader({title,theme}:ProjectHeaderProps) {
 return (
    <div className="flex items-center justify-between mb-8">
      <h1 className={`text-[46px] font-semibold ${theme? "text-[#0d062d]":"text-white"} capitalize`}>
        <span className="font-semibold">{title}</span>
      </h1>
      
      <div className="flex items-center">
        <button 
          className="text-[#5030e5] flex items-center mr-4"
        >
          <img src="/images/img_addsquare_deep_purple_a400_18x18.svg" alt="Add" className="w-[18px] h-[18px] mr-1" />
          <span className="text-base font-medium capitalize">Invite</span>
        </button>
        <AvtarFrame/>
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="h-10 px-4"
            theme={theme}
          >
            <img src="/images/img_profile2user.svg" alt="Share" className="w-4 h-4 mr-2" />
            <span className="text-base font-medium capitalize">Share</span>
          </Button>
          
          <div className="h-10 w-px bg-[#787486]"></div>
          
          <button className="w-10 h-10 bg-[#5030e5] rounded-md flex items-center justify-center">
            <img src="/images/img_pause.svg" alt="Menu" className="w-5 h-5" />
          </button>
          
          <img src="/images/img_menu.svg" alt="More" className="w-[21px] h-[21px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader
