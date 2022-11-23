/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import Item from "./project-info-item";

type ProjectInfoProps = {
  project: {
    role: string;
    date: string;
    service: string;
  };
};

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <Flex sx={{ mt: 4, mb: [2, 4], flexWrap: `wrap` }}>
    <Item name="Client" content={project.role} />
    <Item name="Date" content={project.date} />
    <Item name="Service" content={project.service} />
  </Flex>
);

export default ProjectInfo;