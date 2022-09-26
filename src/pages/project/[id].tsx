import React from "react";
import { store } from "../../redux/store";
import { ItableData } from "../../redux/tableSlice";
import { GetStaticProps } from "next";
interface IProject {
  project: ItableData;
}

const data = store.getState().tableData;

export const getStaticPaths = async () => {
  const paths = data.map((project: ItableData) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = data
    .filter(
      (project: ItableData) => context?.params?.id === project.id.toString()
    )
    .map((project: ItableData) => project);

  return {
    props: { project: res[0] },
  };
};

const ProjectDetails = ({ project }: IProject) => {
  return (
    <div className="mx-auto my-0 flex justify-center">
      <h1 className=" font-bold text-5xl">{project.name}</h1>
    </div>
  );
};

export default ProjectDetails;
