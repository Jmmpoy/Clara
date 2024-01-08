import { useRef } from "react";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Content from "@/components/content";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import data from "api";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <Layout class="no-scrollbar">
      <NextSeo
        title="Clara Onuegbu — Webdesigneuse"
        description="Clara Onuegbu est une webdesigneuse spécialisée dans le mouvement et l'interaction. En tant qu'indépendante, elle travaille avec des entreprises, des agences, des startups et des particuliers."
      />
      <LazyMotion features={domAnimation}>
        <m.div initial="initial" animate="enter" exit="exit">
          <Hero key="Hero" />
          <Content data={data} key="Content"/>
        </m.div>
      </LazyMotion>
    </Layout>
  );
}
