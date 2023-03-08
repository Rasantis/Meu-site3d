import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Minhas</p>
        <h2 className={styles.sectionHeadText}>HABILIDADES.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Eu sou um jovem empreendedor de 20 anos formado em Análise e desenvolvimento
        de software pela Fiap, com 2 anos de experiência em desenvolvimento de software e 
        4 anos de experiência no ramo de marketing digital, atuando desde o desenvolvimento
        de sites, gestão de tráfego e mídias sociais, copywriting...  
        Atualmente tenho 2 startups, 1 a qual sou fundador e CEO <a href="https://Vagalivre.tech"><h4>Vaga-livre</h4></a>
        Uma startup B2B E B2C, onde no B2B, ela é responsável por ser uma solução até 80% mais 
        barata aos sensores de estacionamento. Já na frente B2C temos um App publicado na playstore
        que usando câmeras ao redor de várias cidades no Brasil para indicar ao usuário onde estacionar
        seu carro na rua de forma gratuita, simples e fácil, veja-o no nosso site aqui: <a href="https://Vagalivre.tech/index1.html"><h4>Vaga-livre (B2C)</h4></a>. 
        Já na startup cujo o qual sou o Co-fundador e CPO, eu fui o responsável por desenvolver um software
        completo de inteligencia artificial que trabalhava com o recebimento de arquivos, auto-correção e 
        envio automático para convênios médicos, assim reduzindo de forma exponencial o índice de perdas devido a 
        erros de correção, veja o nosso site aqui:  <a href="https://glocheck.com.br"><h4>Glocheck</h4></a>
      
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
