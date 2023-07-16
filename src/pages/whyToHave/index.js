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
} from "react-icons/fa";
export default function WhyToHave() {
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
        <h1 className="animatedElementBottom linearText lg:text-left text-center lg:text-4xl text-2xl font-semibold ]">
          Por que você precisa de uma
          <br className="" /> landing page?
        </h1>
        <div className="mt-16 animatedElementBottom">
          <div className="flex lg:flex-row flex-col justify-between bg-[#40A19B] lg:h-14 rounded-t-lg ">
            {options.map((items, index) => {
              return (
                <div
                  id={`whyToHave-${items}`}
                  onClick={() => {
                    setChangeOption(items);
                  }}
                  className={`cursor-pointer flex 
                   flex-row gap-3
                  justify-center w-full
                   items-center border-[1px] ${
                     changeOption?.id === index + 1
                       ? "border-[#4EEAE0] lg:border-[2px] border-[4px]  h-14"
                       : " "
                   } h-14   `}
                >
                  <h1 className="font-semibold text-white ">{items.name}</h1>
                  <h1 className="font-semibold text-2xl text-white ">
                    {items.icon}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:justify-between p-10 items-center bg-[#042233] lg:h-[25rem] px-22 rounded-b-sm ">
            <div className="lg:w-96 flex justify-center items-center">
              <Image src={changeOption?.image} width={270} />
            </div>
            <div className="flex flex-col lg:items-start items-center gap-5">
              <p className="text-white lg:text-justify text-center lg:w-96  break-words">
                {changeOption?.text}
              </p>
              <a
                href="https://wa.me/5548991109700"
                aria-label="whatsapp"
                target="__blank"
                className=""
              >
                <button className="bg-[#21A500] w-52 h-14 rounded-2xl text-white">
                  Quero minha landing page
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
