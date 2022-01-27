import { FunctionComponent } from "react";
import { Category } from "../type";


const ProjectsNavbarItem:FunctionComponent<{value:Category | 'All', handleProjectFilter:Function, active:string}> = ({value, handleProjectFilter, active}) => {

    let className = 'text-base list-none cursor-pointer hover:text-green-800'
    if (active === value)
    className += 'text-green-800'
    return (
        <li onClick={() => handleProjectFilter(value)} className={className} >
            {value}
        </li>
    );
  };

const ProjectsNavbar:FunctionComponent<{handleProjectFilter:Function, active:string}> = (props) => {
  return (
      <div className='flex px-3 py-2 space-x-2 overscroll-x-auto'>
          <ProjectsNavbarItem value='All' {...props} />
          <ProjectsNavbarItem value='React' {...props} />
          {/* ADD BACK ONCE FILTER IS NEEDED <ProjectsNavbarItem value='Node' {...props} />
          <ProjectsNavbarItem value='Express' {...props} />
          <ProjectsNavbarItem value='Java' {...props} />
          <ProjectsNavbarItem value='Spring' {...props} />
          <ProjectsNavbarItem value='Firebase' {...props} />
          <ProjectsNavbarItem value='MongoDB' {...props} /> */}
      </div>
  );
};

export default ProjectsNavbar;
