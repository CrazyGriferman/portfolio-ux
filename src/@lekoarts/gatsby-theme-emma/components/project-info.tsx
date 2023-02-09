/** @jsx jsx */
import { Flex, jsx } from "theme-ui";
import Item from "./project-info-item";

type ProjectInfoProps = {
  project: {
    client: string;
    date: string;
    service: string;
  };
};

const ProjectInfo = ({ project }: ProjectInfoProps) => (
  <Flex sx={{ mt: 4, mb: [2, 4], flexWrap: `wrap` }}>
    <Item name="角色" content={project.client} />
    <Item name="日期" content={project.date} />
    <Item name="收获" content={project.service} />
  </Flex>
);

export default ProjectInfo;
