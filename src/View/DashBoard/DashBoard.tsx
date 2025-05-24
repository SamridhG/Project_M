import  { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../SideBar/Sidebar';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import Button from '../../components/ui/Button';
import { Project, projects } from '../SideBar/constants/constants';
import ProgressList from '../ProgressList/ProgressList';
import { columns } from '../ProgressList/constants/constant';
function Dashboard () {
    const [isVisibleSideBar,setVisibilitySideBar]=useState(true)
    const [currentProkect,setCurrentProject]=useState<Project>(projects[0]) 
    const [theme,setTheme]=useState(true)   // true --> light & false --> dark 
  return (
    <div className='h-screen overflow-hidden'>
      
      <div className={`m-auto ${theme ? "bg-white" : "bg-black" } shadow-xl flex`}>
        {isVisibleSideBar && <div className="w-[280px] p-8 border-r border-[#dbdbdb]">
          <Sidebar theme={theme}currentProkect={currentProkect} setCurrentProject={setCurrentProject} setVisibilitySideBar={setVisibilitySideBar}/>
        </div>}
        
        {/*here am taking full Space left side after siderbar*/}
        <div className="flex-1 p-8">
          <Header  isVisibileSiderBar={isVisibleSideBar} setVisibilitySideBar={setVisibilitySideBar} theme={theme} setTheme={setTheme}/>
          
          <div className="mt-8">
            <ProjectHeader
              theme={theme} 
              title={currentProkect.name}  
            />
            
            <div className="flex items-center mb-8">
              <Button 
                variant="outline" 
                className="h-10 mr-4"
                icon={<img src="/images/img_filter.svg" alt="Filter" className="w-4 h-4" />}
                theme={theme}
              >
                Filter
                <img src="/images/img_arrowdown_gray_600.svg" alt="Arrow" className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                className="h-10"
                theme={theme}
                icon={<img src="/images/img_calendar.svg" alt="Calendar" className="w-4 h-4" />}
              >
                Today
                <img src="/images/img_arrowdown_gray_600.svg" alt="Arrow" className="w-4 h-4 ml-2" />
              </Button>
              
              <div className="ml-auto flex items-center">
                <img src="/images/img_arrowsquareup.svg" alt="Share" className="w-[30px] h-[30px] mr-3 cursor-pointer" />
                <img src="/images/img_group_626.svg" alt="Options" className="w-[30px] h-[30px] cursor-pointer" />
              </div>
            </div>
            
            <div className="pb-8">
              <ProgressList columns={columns}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;