import Container from "@/components/container";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";

export default function Footer() {
  const items = [
    { title: "Linkedin", link: "https://www.linkedin.com/in/clara-onuegbu/" },
  ];
  return (
    <footer className="mb-0 w-full fixed bottom-0 bg-white ">
      <Container>
        <div className="py-4">
          <motion.div
            className="flex space-x-2 mb-1 md:mb-0"
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit">
            {items.map((item, index) => {
              return (
                <>
                  <motion.a
                    key={index}
                    href={item.link}
                    className="hover:text-gray-500 focus:text-gray-500 uppercase text-[12px] font-founders ">
                    {item.title}
                  </motion.a>
                </>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
