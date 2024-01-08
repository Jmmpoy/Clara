import { useRef } from "react";
import Layout from "@/components/layout";
import Header from "@/components/header/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Container from "@/components/container";
import FancyLink from "@/components/fancyLink";
import { fade } from "@/helpers/transitions";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import data from "api";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <Layout class="no-scrollbar">
      <NextSeo
        title="Mpoy Jean-Marc — Développeur Front-End"
        description="Mpoy Jean-Marc est un développeur spécialisé dans le mouvement et l'interaction. En tant qu'indépendant, il travaille avec des entreprises, des agences, des startups et des particuliers."
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
