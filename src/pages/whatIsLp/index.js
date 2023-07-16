//images
import Image from "next/image";
import PcImageLpResponsive from '../../assets/whatIsLp/lazyfox-responsive-removebg-preview (4) 1.svg'
//style
import style from "../../styles/presentation.module.css";
export default function WhatIsLp() {
  return (
    <>
      <div className='px-4 flex lg:flex-row gap-6 flex-col justify-center items-center lg:justify-between max-w-[1000px] m-auto mt-44'>
        <Image src={PcImageLpResponsive}/>
        <div className="flex flex-col max-w-[29.6rem] ">
            <h1 className="linearText lg:text-4xl text-2xl  font-semibold max-w-[29.6rem] interactiveScroll_title">O que é uma landing page?</h1>
            <p className="text-white mt-4 text-left lg:text-base text-sm interactiveScroll_title ">Uma landing page é uma ferramenta essencial para qualquer empresa que queira aumentar suas conversões e gerar mais leads.</p>
            <p className="text-white mt-4 text-left lg:text-base text-sm interactiveScroll_title">Ao criar uma landing page eficaz e otimizada, você pode melhorar  suas taxas de conversão e aumentar o sucesso de suas vendas.</p>
            <p className="text-white mt-4 text-left lg:text-base text-sm interactiveScroll_title">Uma landing Page de vendas de alta conversão é a solução para quem quer atrair mais clientes e vender mais através da internet.</p>
        </div>
      </div>
    </>
  );
}
