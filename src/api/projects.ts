export interface ProjectContent {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    linkText: string;
    buttonImgPath: string;
}

/**
 * fetches all project data from the hosted url
 * @param url location of project json document
 */
export const fetchAllProjects = async (
    url: string
): Promise<Array<ProjectContent>> => {
    const response = await fetch(url);
    return await response.json();
};

/**
 * wrapper for fetchAllProject to only select a set amount of projects from the start of the document (default: 2)
 * @param url location of project json document
 * @param num number of projects to return (default = 2)
 */
export const fetchSpotlightProjects = async (url: string, num: number = 2): Promise<Array<ProjectContent>> => {
    const response = await fetchAllProjects(url);
    return response.slice(0, num);
}

const exportedMethods = {
    fetchAllProjects,
    fetchSpotlightProjects
};

export default exportedMethods;
