import { GetServerSideProps } from "next";
import fetchHomePageData from "@/api/fetchHomePageData";
import RenderLayouts from "@/components/RenderLayout";
import { Data } from "@/models/Home";

const Home = ({ components }: Data) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <RenderLayouts components={components} />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<Data> = async () => {
  const { components } = await fetchHomePageData();
  return {
    props: {
      components,
    },
  };
};

export default Home;
