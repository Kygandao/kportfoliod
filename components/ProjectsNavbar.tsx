import { FunctionComponent } from "react";
import { Category } from "../type";


const ProjectsNavbarItem:FunctionComponent<{value:Category | 'All', handleProjectFilter:Function}> = ({value, handleProjectFilter}) => {
    return (
        <li onClick={() => handleProjectFilter(value)} key={value} className='text-base list-none cursor-pointer hover:text-green-800'>
            {value}
        </li>
    );
  };

const ProjectsNavbar:FunctionComponent<{handleProjectFilter:Function}> = (props) => {
  return (
      <div className='flex px-3 py-2 space-x-2 overscroll-x-auto'>
          <ProjectsNavbarItem value='All' {...props} key={'All'}/>
          <ProjectsNavbarItem value='React' {...props} key={'React'}/>
          <ProjectsNavbarItem value='Node' {...props} key={'Node'}/>
          <ProjectsNavbarItem value='Express' {...props} key={'Express'}/>
          <ProjectsNavbarItem value='Java' {...props} key={'Java'}/>
          <ProjectsNavbarItem value='Spring' {...props} key={'Spring'}/>
          <ProjectsNavbarItem value='Firebase' {...props} key={'Firebase'}/>
          <ProjectsNavbarItem value='MongoDB' {...props} key={'MongoDB'}/>
      </div>
  );
};

export default ProjectsNavbar;
