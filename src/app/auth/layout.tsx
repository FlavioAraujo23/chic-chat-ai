import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect('/');

  return (
    <main className="h-screen flex w-full justify-center">
      <section className="w-[600px] lg:w-full flex flex-col items-start p-6">
        {/* TODO adicionar a logo aqui*/}
        {children}
      </section>
      <section className="hidden lg:flex flex-1 w-full max-h-full max-w-[4000px] overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Olá, eu sou seu assistente pessoal, ChicChatAI!
        </h2>
        <p className='text-iridium md:text-sm mb-10'>
          O ChicChatAi é capaz de capturar informações de leads sem um
          formulário... <br />
          algo nunca feito antes 😉
        </p>
        {/* TODO adicionar a ui do app aqui*/}
      </section>
    </main>
  );
};

export default layout;
