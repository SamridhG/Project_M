
import { Link } from 'react-router-dom';
import LogoComponent from './component/LogoComponent';
import SideBarOptions from './component/SideBarOptions';
import ProjectList from './component/ProjectList';
import WriteMessage from './component/WriteMessage';
import { Project } from './constants/constants';
interface SideBarProps{
    setVisibilitySideBar: React.Dispatch<React.SetStateAction<boolean>>
    currentProkect:Project,
    setCurrentProject:React.Dispatch<React.SetStateAction<Project>>
    theme:boolean
}

function  Sidebar ({setVisibilitySideBar,currentProkect,setCurrentProject,theme}:SideBarProps){
  return (
    <div className="h-full flex flex-col">
      <LogoComponent theme={theme} setVisibilitySideBar={setVisibilitySideBar}/>
      <SideBarOptions theme={theme}/>
      <ProjectList theme={theme} currentProkect={currentProkect} setCurrentProject={setCurrentProject}/>
      <WriteMessage/>
      
    </div>
  );
};

export default Sidebar;