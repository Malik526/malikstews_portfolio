import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProjectTemplate from "../components/project/ProjectTemplate";
import { getProjectBySlug } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <Layout>
        <section className="mx-auto max-w-6xl px-4 py-32">
          <h1 className="text-4xl font-semibold text-white">Project not found.</h1>
          <Link to="/projects" className="mt-6 inline-block text-signal">
            Back to projects
          </Link>
        </section>
      </Layout>
    );
  }

  return <ProjectTemplate project={project} />;
};

export default ProjectDetail;
