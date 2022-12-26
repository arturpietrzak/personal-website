interface ProjectTileProps {
  name: string;
  imgUrl: string;
  githubUrl: string;
  deploymentUrl?: string;
}

function ProjectTile({
  name,
  imgUrl,
  githubUrl,
  deploymentUrl,
}: ProjectTileProps) {
  return (
    <div className="project-tile">
      <img src={imgUrl} />
    </div>
  );
}

export default ProjectTile;
