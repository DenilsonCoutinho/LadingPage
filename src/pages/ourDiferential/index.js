import { use, useEffect, useState } from 'react'
import nextExplanation from '../../assets/ourDiferential/Group 16 (1).png'
import nextExplanationMobile from '../../assets/ourDiferential/image_next_mobile.png'
import hulu from '../../assets/ourDiferential/hulu.png'
import netflix from '../../assets/ourDiferential/netflix.png'
import nike from '../../assets/ourDiferential/nike.png'
import twitch from '../../assets/ourDiferential/twitch-logo-twitch-icon-transparent-free-png 1.png'
import uber from '../../assets/ourDiferential/uber.png'
import Image from "next/image";

export default function OurDiferential() {
  const [y, setY] = useState()
  useEffect(() => {
    function teste() {
      const scroll = window.scrollY
      setY(scroll)

    }
    addEventListener("scroll", (event) => {
      teste()
    });
  }, [])

  return (
    <div className=''>
      <div className={`teste flex lg:flex-row flex-col-reverse justify-center lg:items-start items-center max-w-[1200px] m-auto mt-32 `}>
        <div className={` flex flex-col px-4 `}>
          <h1 className={`lg:text-left text-center linearText lg:text-3xl text-2xl font-bold `}>
            Diferenciais das nossas páginas
          </h1>
          <p className="text-white lg:w-96 lg:text-left text-center lg:m-0 m-auto">
          Valorizamos o código feito à mão. Sim, também usamos WordPress. No entanto, a nossa abordagem personalizada nos permite manter métricas excepcionais de otimização na web. Além da tríade que compõe 94,9% (JavaScript, HTML e CSS), integramos o framework NEXT.JS, que incorpora conceitos de SPA e oferece um upgrade significativo para sua Landing Page</p>
          <h1 className={`mt-10 lg:text-left text-center linearText lg:text-3xl text-2xl font-bold `}>
            O que é SPA?
          </h1>
          <p className="text-white lg:w-96 lg:text-left text-center lg:m-0 m-auto">
            Um Single Page Application (SPA) é como uma casa onde tudo está em um único cômodo. Imagine que você tem uma casa onde pode fazer tudo, como cozinhar, dormir e se divertir, em um único lugar, sem precisar se mover para outros quartos.</p>
          <p className="text-white lg:w-96 lg:text-left pt-5 text-center lg:m-0 m-auto">
            Da mesma forma, um SPA é um tipo de site ou aplicativo onde toda a informação e interação acontece em uma única página, sem a necessidade de carregar páginas novas toda vez que você clica em algo. Isso torna a experiência do usuário mais rápida e suave, como se tudo acontecesse em um único lugar.</p>
          <div className="flex flex-col">
            <h1 className="lg:text-left text-center linearText lg:text-3xl text-2xl font-bold  mt-20 mb-10">
              Empresas que utilizam o <br />Next.Js
            </h1>
            <div className='relative'>
              <div className={` flex flex-wrap lg:justify-start justify-center lg:items-start items-center lg:w-96 lg:m-0 m-auto gap-3`}>
                <Image src={hulu} width={100} alt="imagem-hulu" />
                <Image src={uber} width={100} alt="imagem-uber" />
                <Image src={nike} width={100} alt="imagem-nike" />
                <Image src={twitch} width={100} alt="imagem-twitch" />
                <Image src={netflix} width={100} alt="imagem-netflix" />
              </div>
            </div>
          </div>
        </div>
        <div className='xl:w-[500px] xl:h-[939px] lg:flex hidden'>
          <Image src={nextExplanation} className={`${y > 1685 && y < 2101 && ' top-0'}  `} width={500} alt="imagem-explição" />
        </div>
        <Image src={nextExplanationMobile} className='lg:hidden flex' width={500} alt="imagem-explição" />
      </div>
    </div>
  );
}
