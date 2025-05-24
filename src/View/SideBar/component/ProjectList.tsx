import { useState } from "react"
import { Project, projects } from "../constants/constants"
interface ProjectListProps{
     currentProkect:Project,
    setCurrentProject:React.Dispatch<React.SetStateAction<Project>>
    theme:boolean
}
function ProjectList({currentProkect,setCurrentProject,theme}:ProjectListProps) {
  return (<div className="mt-8 border-t border-[#dbdbdb] pt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className={`text-xs font-bold uppercase ${theme ?"text-[#787486]":"text-white"}`}>my projects</h2>
          <img src="/images/img_addsquare.svg" alt="Add" className="w-4 h-4 cursor-pointer" />
        </div>

        <div className="space-y-2 cursor-pointer">
          {projects.map((project:Project) => (
            <div 
              key={project.id} 
              className={`flex items-center py-2 px-3 rounded-md ${project.id === currentProkect.id ? theme ? 'bg-[#5030e514]': "bg-white" : ''}`}
              onClick={()=>{
                setCurrentProject(project)
              }}
            > 
            <div className={`w-2 h-2 rounded-full ${project.color} mr-3`}></div>
              <span className={`text-base ${project.id === currentProkect.id ? 'font-semibold text-[#0d062d]' : 'text-[#787486]'} `}>
                {project.name}
              </span>
              {/* {project.id==currentProkect && <>...</>} */}
            </div>
          ))}
        </div>
      </div>
  )
}

export default ProjectList
