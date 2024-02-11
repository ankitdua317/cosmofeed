import { GetStaticProps } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DATA from "@/constants/home";
import RenderLayouts from "@/components/RenderLayout";
import { Data } from "@/models/Home";

export default function Home({ components }: Data) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white pb-[100px]">
      <Header />
      <RenderLayouts components={components} />
      <Footer />
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
