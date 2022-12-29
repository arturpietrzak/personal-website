import "./ProjectTile.scss";

interface ProjectTileProps {
  name: string;
  description: string;
  imgUrl: string;
  githubUrl: string;
  deploymentUrl?: string;
  technologies?: string[];
  inverted?: boolean;
  wip?: boolean;
}

function ProjectTile({
  name,
  imgUrl,
  description,
  githubUrl,
  deploymentUrl,
  technologies,
  inverted,
  wip,
}: ProjectTileProps) {
  return (
    <div className={`project-tile ${inverted ? "" : "project-tile--left"}`}>
      <a
        aria-label={`Check the ${name} project ${
          deploymentUrl ? "deployment." : "on github."
        }`}
        href={deploymentUrl ? deploymentUrl : githubUrl}
      >
        <div className="project-tile__image-section">
          <img src={imgUrl} />
        </div>
      </a>
      <div className="project-tile__info">
        <h3 className="project-tile__info__name">
          <span className="project-tile__info__name__wip">WIP</span>
          {name}
        </h3>
        <p className="project-tile__info__description">{description}</p>
        {technologies && technologies.length > 0 && (
          <div className="project-tile__info__technologies">
            {technologies?.map((technology) => (
              <span className="project-tile__info__technologies__element">
                {technology}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectTile;
