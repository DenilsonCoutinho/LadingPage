import Image from 'next/image'
import pcDemonstration from '../../assets/IntegrateTools/Group 18 (2).png'
export default function IntegrateTools() {
    return (
        <>
            <div className="max-w-[1200px] flex flex-col justify-center items-center my-20 m-auto">
                <div className='flex lg:flex-row flex-col justify-between md:gap-x-28 gap-4 items-center'>
                    <Image src={pcDemonstration} height={500}
                        alt="pcDemonstration"
                    />
                    <div className='flex flex-col md:items-start items-center gap-4'>
                        <div className=''>
                            <h1 className="linearText lg:text-5xl text-2xl font-semibold lg:text-left text-center">Integre tudo com <br />suas ferramentas</h1>
                            <p className='text-white max-w-[500px] lg:text-left text-center'>Conectamos seu website com suas ferramentas de marketing e vendas. Tudo pronto para você apenas ligar suas campanhas e começar a vender.</p>
                        </div>
                        <a href='https://wa.me/5548991109700' aria-label='whatsapp' target='__blank' >
                            <button className="mt-10 uppercase hover:scale-105 duration-150 font-bold ButtonLinear w-72 h-14 rounded-2xl text-[#011826] mb-10 ">
                                <span className="font-thin ">QUERO</span> minha Landing Page
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}