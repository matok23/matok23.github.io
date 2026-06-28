import type { Project } from '../types/projects';

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <a href={project.github} target="_blank" rel="noreferrer">
                Main GitHub Repository
            </a>

            {project.sections.map((section) => (
                <details key={section.title}>
                    <summary>{section.title}</summary>
                    <p>{section.description}</p>

                    <a href={section.github} target="_blank" rel="noreferrer">
                        View GitHub
                    </a>
                </details>
            ))}
        </article>
    );
}

export default ProjectCard;