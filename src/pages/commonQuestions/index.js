import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function CommonQuestions() {
    return (
        <div className="flex lg:flex-row-reverse flex-col-reverse lg:justify-between justify-center items-center max-w-[1200px] my-28 m-auto ">
            <Accordion className="lg:w-[500px] w-[280px]" allowToggle>
                <AccordionItem className="mb-7">
                    <h2>
                        <AccordionButton>
                            <Box className="h-10 font-bold" as="span" textColor={'white'} flex='1' textAlign='left'>
                                Em quanto tempo terei minha página pronta?
                            </Box>
                            <AccordionIcon textColor={'white'} />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textColor={'white'} className="text-sm lg:w-[500px] pt-5" >
                        Nossos projetos costumam levar entre 7 e 15 dias, a depender do plano que desenvolvermos para seu produto ou serviço.
                        Alterações e páginas adicionais podem aumentar o nível do projeto. Você poderá conversar conosco para alinhamento de expectativas.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="mb-7">
                    <h2>
                        <AccordionButton className="">
                            <Box className="h-10 font-bold" as="span" textColor={'white'} flex='1' textAlign='left'>
                                Quais são os requisitos para contratar?
                            </Box>
                            <AccordionIcon textColor={'white'} />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textColor={'white'} className="text-sm lg:w-[500px] pt-5">
                        Você precisa ter apenas o domínio, a hospedagem é grátis!
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="mb-7">
                    <h2>
                        <AccordionButton>
                            <Box className="h-10 font-bold" as="span" textColor={'white'} flex='1' textAlign='left'>
                                Posso solicitar alterações no projeto?
                            </Box>
                            <AccordionIcon textColor={'white'} />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}  textColor={'white'} className="text-sm lg:w-[500px] pt-5">
                        Claro! Você terá direito a até 2 conjuntos de alterações, desde que não alterem radicalmente o design e o conteúdo da página.
                        Meu único pedido é para ser bastante específico na hora de solicitar mudanças, assim conseguimos realizar uma entrega mais ágil juntos.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-3 pl-6 mb-10">
                <h1 className="linearText lg:text-5xl text-2xl font-semibold ">Dúvidas comuns</h1>
                <p className="text-white lg:w-96">Possui mais dúvidas? Você pode entrar em contato através dos links abaixo</p>
                <div className="flex items-center gap-2">
                    <FaEnvelope className="text-white" />
                    <p className="text-white">contact.denilsoncoutinho@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaWhatsapp className="text-white" />
                    <p className="text-white">(48)9 9110-9700</p>
                </div>
            </div>
        </div>
    )
}