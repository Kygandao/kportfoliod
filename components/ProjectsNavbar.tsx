import { FunctionComponent } from "react";
import { Category } from "../type";


const ProjectsNavbarItem:FunctionComponent<{value:Category | 'All', handleProjectFilter:Function}> = ({value, handleProjectFilter}) => {
    return (
        <li onClick={() => handleProjectFilter(value)} className='text-base list-none cursor-pointer hover:text-green-800'>
            {value}
        </li>
    );
  };

const ProjectsNavbar:FunctionComponent<{handleProjectFilter:Function}> = (props) => {
  return (
      <div className='flex px-3 py-2 space-x-2 overscroll-x-auto'>
          <ProjectsNavbarItem value='All' {...props} />
          <ProjectsNavbarItem value='React' {...props} />
          <ProjectsNavbarItem value='Node' {...props} />
          <ProjectsNavbarItem value='Express' {...props} />
          <ProjectsNavbarItem value='Java' {...props} />
          <ProjectsNavbarItem value='Spring' {...props} />
          <ProjectsNavbarItem value='Firebase' {...props} />
          <ProjectsNavbarItem value='MongoDB' {...props} />
      </div>
  );
};

export default ProjectsNavbar;
