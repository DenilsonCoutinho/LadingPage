import Image from 'next/image'
import pcDemonstration from '../../assets/IntegrateTools/Group 18 (2).png'
export default function IntegrateTools() {
    return (
        <>
            <div className="max-w-[1200px] m-auto">
                <div className='flex lg:flex-row flex-col justify-between items-center'>
                    <Image src={pcDemonstration} height={500} />
                    <div>
                        <h1 className="linearText lg:text-5xl text-2xl font-semibold lg:text-left text-center">Integre tudo com <br />suas ferramentas</h1>
                        <p className='text-white max-w-[500px] lg:text-left text-center'>Conectamos seu website com suas ferramentas de marketing e vendas. Tudo pronto para você apenas ligar suas campanhas e começar a vender.</p>
                    </div>
                </div>
            </div>
        </>
    )
}