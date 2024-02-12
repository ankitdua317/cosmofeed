import { GetStaticProps } from "next";
import DATA from "@/constants/home";
import RenderLayouts from "@/components/RenderLayout";
import { Data } from "@/models/Home";
import MyApp from "@/components/MyApp";

export default function Home({ components }: Data) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white pb-[100px]">
      <MyApp>
        <RenderLayouts components={components} />
      </MyApp>
    </main>
  );
}

export const getStaticProps: GetStaticProps<Data> = () => {
  return {
    props: {
      components: DATA.components,
    },
  };
};
