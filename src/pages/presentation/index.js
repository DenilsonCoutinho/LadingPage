//images
import Image from "next/image";
import Logo from "../../assets/logo/Logo_Streamer_Ousado_verde_Limão_e_Preto-removebg-preview 1.svg";
//style
import style from "../../styles/presentation.module.css";
export default function presentation() {
  return (
    <>
      <main className={`${style.bgPresentation} bg-no-repeat h-[99vh]`}>
        <div className=" flex flex-col justify-center items-center  gap-10 pt-24 max-w-[1300px] m-auto">
          <Image src={Logo} width={300} height={300} />
          <h1 className="text-7xl linearText font-bold text-center">
            Criamos Landing Pages de <br />
            alta conversão.
          </h1>
          <p className="linearText text-3xl text-center">
            Aumente os resultados do seu negócio com estratégias de marketing
            <br />
            digital para impressionar seus clientes e aumentar suas vendas!
          </p>
          <button className="bg-[#21A500] w-52 h-14 rounded-2xl text-white">
            Veja alguns exemplos
          </button>
        </div>
      </main>
    </>
  );
}
