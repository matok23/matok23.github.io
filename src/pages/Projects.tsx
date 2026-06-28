import { projects } from '../data/projects';
import ProjectCard from '../components/project-card';

function Projects() {
    return (
        <section>
            <h2>Projects</h2>

            <div className="project-list">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;