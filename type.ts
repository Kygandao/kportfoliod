import { IconType } from "react-icons";

export interface IOffer{
    title: string,
    about: string,
    Icon: IconType
}

export interface ISkills{
    name: string,
    level: string,
    Icon: IconType
}

export interface IProjects{
    id: number,
    name: string,
    description: string,
    image_path: string,
    deployed_url,
    github_url: string,
    // category: Category[],
    tech_tags: string[],
}

// export type Category = 'React' ;
// add once filter is completed | 'Node' | 'Express' | 'Java' | 'Spring' | 'Firebase' | 'MongoDB'