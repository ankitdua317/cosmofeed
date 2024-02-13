import { GetServerSideProps } from "next";
import Head from "next/head";
import fetchHomePageData from "@/api/fetchHomePageData";
import RenderLayouts from "@/components/RenderLayout";
import { Component } from "@/models/Home";
import {
  HOME_PAGE_DESC,
  HOME_PAGE_NAME,
  HOME_PAGE_TITLE,
  PAGE_HASH_COOKIE_NAME,
} from "@/constants/common";
import usePageCache from "@/hooks/usePageCache";

interface Props {
  components?: Component[];
}

const Home = ({ components }: Props) => {
  const { data } = usePageCache(HOME_PAGE_NAME, components);

  return (
    <>
      <Head>
        <meta name="title" content={HOME_PAGE_TITLE} />
        <meta name="description" content={HOME_PAGE_DESC} />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-between">
        <RenderLayouts components={data || []} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req: { cookies },
}) => {
  const pageHash = cookies[PAGE_HASH_COOKIE_NAME];
  if (pageHash?.includes(HOME_PAGE_NAME)) {
    return {
      props: {},
    };
  }

  const { components } = await fetchHomePageData();
  return {
    props: {
      components,
    },
  };
};

export default Home;
