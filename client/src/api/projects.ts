export interface ProjectContent {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    linkText: string;
    buttonImgPath: string;
}

export const fetchAllProjects = async (
    url: string
): Promise<Array<ProjectContent>> => {
    const response = await fetch(url);
    return await response.json();
};

const exportedMethods = {
    fetchAllProjects
};

export default exportedMethods;
