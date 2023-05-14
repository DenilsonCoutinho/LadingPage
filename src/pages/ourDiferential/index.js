import { FaCode, FaPen, FaSearchDollar } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";

export default function OurDiferential() {
  return (
    <div className="flex flex-col max-w-[1000px] m-auto mt-44 px-4">
      <h1 className="lg:text-left text-center linearText text-4xl font-semibold animatedElementBottomNow">
        Diferenciais das nossas páginas
      </h1>
      <div className="grid lg:grid-cols-2 justify-center">
        <div className="flex flex-col items-center animatedElementBottom gap-3 px-4 lg:w-[450px] h-56 border mt-20 rounded-xl">
          <FaSearchDollar className="text-white z-50 text-2xl mt-2" />
          <h1 className="text-white font-bold ">Alta conversão</h1>
          <p className="text-white ">
            Uma página para ser eficiente precisa ser de alta conversão. E nós
            utilizamos a estrutura ideal de conversão, unindo design,
            copywriting e carregamento para criar uma página de alta conversão
            que traz mais clientes para o seu negócio.
          </p>
        </div>

        <div className="flex flex-col items-center animatedElementBottom gap-3 px-4 lg:w-[450px] h-56 border mt-20 rounded-xl">
          <FaPen className="text-white text-center text-2xl mt-2" />
          <h1 className="text-white font-bold ">Copywriting</h1>
          <p className="text-white text-justify  ">
            Copywriting é a arte e ciência de escrever textos persuasivos que
            motivam as pessoas a tomar uma ação específica, como comprar um
            produto, inscrever-se em um serviço, fazer uma doação, entre outras.
          </p>
        </div>

        <div className="flex flex-col items-center animatedElementBottom gap-3 px-4 lg:w-[450px] h-56 border mt-20 rounded-xl">
          <IoIosFlash className="text-white text-2xl mt-2" />

          <h1 className="text-white font-bold text-center">
            Carregamento rápido
          </h1>
          <p className="text-white text-justify ">
            Existem estudos que comprovam que páginas com carregamento lento
            possuem uma taxa de conversão significativamente menor, o que pode
            resultar em perda de receita para o seu negócio.
          </p>
        </div>

        <div className="flex flex-col items-center animatedElementBottom gap-3 px-4 lg:w-[450px] h-56 border mt-20 rounded-xl">
          <FaCode className="text-white text-2xl mt-2" />

          <h1 className="text-white font-bold text-center">
            Código feito a mão
          </h1>
          <p className="text-white text-justify ">
            Uma página para ser eficiente precisa ser de alta conversão. E nós
            utilizamos a estrutura ideal de conversão, unindo design,
            copywriting e carregamento para criar uma página de alta conversão
            que traz mais clientes para o seu negócio.
          </p>
        </div>
      </div>
    </div>
  );
}
