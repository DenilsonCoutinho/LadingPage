import { FaCode, FaPen, FaSearchDollar } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";


export default function OurDiferential() {
  return (
    <div className="flex flex-col max-w-[1000px] m-auto mt-44">
      <h1 className="lg:text-left text-center linearText text-4xl font-semibold ">
        Diferenciais das nossas páginas
      </h1>
      <div className="grid lg:grid-cols-2 justify-center">
        <div className="flex flex-col items-center gap-3 px-4 w-[450px] h-56 border mt-20 rounded-xl">
            <FaSearchDollar className="text-white z-50 text-2xl mt-2"/>
          <h1 className="text-white font-bold">Alta conversão</h1>
          <p className="text-white ">
            Uma página para ser eficiente precisa ser de alta conversão. E nós
            utilizamos a estrutura ideal de conversão, unindo design,
            copywriting e carregamento para criar uma página de alta conversão
            que traz mais clientes para o seu negócio.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 px-4 w-[450px] h-56 border mt-20 rounded-xl">
            <FaPen className="text-white text-center text-2xl mt-2"/>
          <h1 className="text-white font-bold ">Copywriting</h1>
          <p className="text-white text-justify  ">
            Uma página para ser eficiente precisa ser de alta conversão. E nós
            utilizamos a estrutura ideal de conversão, unindo design,
            copywriting e carregamento para criar uma página de alta conversão
            que traz mais clientes para o seu negócio.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 px-4 w-[450px] h-56 border mt-20 rounded-xl">
        <IoIosFlash className="text-white text-2xl mt-2"/>

          <h1 className="text-white font-bold text-center">Carregamento rápido</h1>
          <p className="text-white text-justify ">
            Uma página para ser eficiente precisa ser de alta conversão. E nós
            utilizamos a estrutura ideal de conversão, unindo design,
            copywriting e carregamento para criar uma página de alta conversão
            que traz mais clientes para o seu negócio.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 px-4 w-[450px] h-56 border mt-20 rounded-xl">
        <FaCode className="text-white text-2xl mt-2"/>

          <h1 className="text-white font-bold text-center">Código feito a mão</h1>
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
