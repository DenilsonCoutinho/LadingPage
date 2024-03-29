export default function StepOfDevelopment() {
  return (
    <div className=" flex flex-col justify-center items-center max-w-[1000px] m-auto my-20 px-4">
      <h1 className="linearText text-center lg:text-4xl text-2xl font-semibold ">
        Etapas do desenvolvimento
      </h1>
      <div className="flex animatedOpacity flex-col justify-center m-auto items-center gap-3 px-4 lg:lg:w-[450px] h-56 border mt-20 rounded-xl">
        <div className=" rounded-full w-10 h-10 bg-white flex justify-center items-center font-bold">1</div>
        <h1 className="text-white font-bold ">PLANEJAMENTO</h1>
        <p className="text-white text-justify lg:text-base text-sm  ">
          Primeiro vamos realizar uma conversa pelo whatsapp para listamos cada
          detalhe do projeto e definimos como será criada a página. Nessa fase o
          objetivo é entender qual a estrutura ideal para a sua página.
        </p>
      </div>
      <div className="border-r-2 h-32 animatedOpacity"></div>
      <div className="animatedOpacity flex flex-col justify-center m-auto items-center gap-3 px-4 lg:w-[450px] h-56 border  rounded-xl">
      <div className="rounded-full w-10 h-10 bg-white flex justify-center items-center font-bold">2</div>
        
        <h1 className="text-white font-bold ">DESENVOLVIMENTO</h1>
        <p className="text-white text-justify lg:text-base text-sm ">
          Agora é a hora de transformarmos o briefing em realidade. Nesse
          estágio é desenvolvido a estrutura do site, o design e a
          responsividade da página. Ele pode durar até uma semana.
        </p>
      </div>
      <div className="border-r-2 h-32 animatedOpacity"></div>

      <div className="animatedOpacity flex flex-col justify-center m-auto items-center gap-3 px-4 lg:w-[450px] h-56 border  rounded-xl">
      <div className="rounded-full w-10 h-10 bg-white flex justify-center items-center font-bold">3</div>
      
        <h1 className="text-white font-bold ">APRESENTAÇÃO E FEEDBACK</h1>
        <p className="text-white text-justify lg:text-base text-sm ">
          Esse é o momento da apresentação, onde você vai receber e analisar o
          seu projeto como um todo. Nessa etapa você pode solicitar ajustes e
          alterações como preferir. Nosso objetivo é entregar o seu projeto
          ideal!
        </p>
      </div>
      <div className="border-r-2 h-32 animatedOpacity"></div>

      <div className="flex animatedOpacity flex-col justify-center m-auto items-center gap-3 px-4 lg:w-[450px] h-56 border  rounded-xl">
      <div className=" rounded-full w-10 h-10 bg-white flex justify-center items-center font-bold">4</div>
       
        <h1 className="text-white font-bold ">ENTREGA FINAL</h1>
        <p className="text-white text-justify lg:text-base text-sm ">
          Após a aprovação final, faremos a otimização de velocidade do seu site
          e ajustes finais como instalação de pixel e configurações de
          apontamento, finalizando o projeto.
        </p>
      </div>
    </div>
  );
}
