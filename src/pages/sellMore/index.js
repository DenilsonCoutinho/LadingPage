import { useEffect, useState } from "react";
//images
import Image from "next/image";
import AdsOnline from "../../assets/whyToHave/undraw_online_test_re_kyfx (3).svg";
import toSell from "../../assets/whyToHave/undraw_transfer_money_re_6o1h.svg";
import position from "../../assets/whyToHave/undraw_energizer_re_vhjv.svg";
//icons
import {
  FaExclamationCircle,
  FaSearchDollar,
  FaNetworkWired,
  FaRegImage,
  FaBolt,
  FaPaintBrush,
} from "react-icons/fa";
export default function SellMore() {
  const [loading, setLoading] = useState(false);

  const options = [
    {
      id: 1,
      name: "Anúncios Online",
      icon: <FaNetworkWired />,
      image: AdsOnline,
      text: "Tendo uma landing  page você vai ter a possibilidade de fazer anúncios online em plataformas como no Google, Facebook, Instagram e Youtube podendo divulgar o seu produto/serviço para todo o pais",
    },
    {
      id: 2,
      name: "Mecanismo eficiente de vendas",
      icon: <FaSearchDollar />,
      image: toSell,
      text: "Uma página de vendas tem todas as informações do seu produto/serviço, quebra de objeções, apresenta benefícios e tudo que você precisa para fazer a venda para o cliente, dessa forma, você conseguirá um maior número de conversões.   ",
    },
    {
      id: 3,
      name: "Posicionamento",
      icon: <FaExclamationCircle />,
      image: position,
      text: "Fato é que se você não tem uma página, o seu concorrente tem. E uma página de vendas sempre gera um valor a mais para o seu produto/serviço. Ter uma página ajuda você a criar um posicionamento melhor perante o mercado, agregando mais valor ainda ao que você vende.  ",
    },
  ];

  const [changeOption, setChangeOption] = useState(options[0]);

  return (
    <>
      <div className="flex flex-col max-w-[1000px] m-auto lg:mt-44 mt-28">
        <h1 className="interactiveScroll_title linearText text-center lg:text-4xl text-2xl font-semibold ]">
          Landing Pages vende mais.
        </h1>
        <p className="text-white text-center max-w-[670px] m-auto mt-5 interactiveScroll_title">Em meio à vastidão de sites convencionais, é fácil perder-se entre inúmeras páginas sem destino definido. O que você realmente necessita é de uma estratégia de landing pages altamente eficaz, capaz de converter visitantes desconhecidos em clientes fiéis.</p>
        <h1 className="linearText font-bold text-center max-w-[670px] text-xl m-auto mt-5">O que garantimos para você:</h1>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-6 mt-20">
          <div className="flex flex-col gap-2 animatedElementBottom">
            <div className="rounded-full border w-10 h-10 flex justify-center items-center border-[#24948D]">
              <FaRegImage className="text-[#24948D]" />
            </div>
            <h1 className="text-white text-2xl font-bold">Landing Page</h1>
            <p className="text-white mt-1 w-72">Páginas de alta conversão com desempenho e responsividade otimizados para escalar suas vendas no automático</p>
          </div>

          <div className="flex flex-col gap-2 animatedElementBottom">
            <div className="rounded-full border w-10 h-10 flex justify-center items-center border-[#24948D]">
              <FaBolt className="text-[#24948D]" />
            </div>
            <h1 className="text-white text-2xl font-bold">Rapidez na entrega</h1>
            <p className="text-white mt-1 w-72">Com técnicas otimizadas e processos eficientes, garantimos a entrega rápida das suas páginas.</p>
          </div>

          <div className="flex flex-col gap-2 animatedElementBottom">
            <div className="rounded-full border w-10 h-10 flex justify-center items-center border-[#24948D]">
              <FaPaintBrush className="text-[#24948D]" />
            </div>
            <h1 className="text-white text-2xl font-bold">Identidade visual </h1>
            <p className="text-white mt-1 w-72">Desenvolvemos um visual completo para sua marca e atualizamos todas as suas mídias</p>
          </div>
        </div>

      </div>
    </>
  );
}
