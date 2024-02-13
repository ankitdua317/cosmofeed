import { GetStaticProps } from "next";
import DATA from "@/constants/home";
import RenderLayouts from "@/components/RenderLayout";
import { Data } from "@/models/Home";

export default function Home({ components }: Data) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <RenderLayouts components={components} />
    </section>
  );
}

export const getStaticProps: GetStaticProps<Data> = () => {
  return {
    props: {
      components: DATA.components,
    },
  };
};
