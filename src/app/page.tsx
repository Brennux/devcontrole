import Image from 'next/image';
import heroImage from '../assets/hero2.png';

export default function Home() {
  return (
    <main className='flex items-center flex-col justify-center min-h-[calc(100vh-80px)]'>
      <h2 className='font-medium text-2xl mb-2 text-gray-600 opacity-0 animate-fade-in-up'>Transforme a gestão da sua empresa</h2>
      <h1 className='font-bold text-3xl mb-2 text-blue-600 md:text-4xl text-center opacity-0 animate-fade-in-up animation-delay-300'>Sistema Completo de Atendimento ao Cliente</h1>
      <Image
        src={heroImage}
        alt="Sistema de controle de atendimentos"
        width={580}
        className='max-w-sm md:max-w-xl opacity-0 animate-fade-in-up animation-delay-600'
      />
    </main>
  );
}
