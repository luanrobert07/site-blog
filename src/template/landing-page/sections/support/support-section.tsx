import { HeartHandshake, PaintbrushVertical, Store } from 'lucide-react';

const cards = [
{
  icon: PaintbrushVertical,
  title: 'Personalize seu site',
  content: 'Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara.',
  iconStyle: 'h-6 w-6 text-white',
  bgColor: 'bg-blue-300'
},
{
  icon: Store,
  title: 'Venda de qualquer loja',
  content: 'Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.',
  iconStyle: 'h-6 w-6 text-white',
  bgColor: 'bg-cyan-300'
},
{
  icon: HeartHandshake,
  title: 'Receba suporte amigável',
  content: ' Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.',
  iconStyle: 'h-6 w-6 text-white',
  bgColor: 'bg-blue-300'
}
]

export const SupportSection = () => {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
      <div className="relative container flex flex-col items-center gap-12">
        <h2
          className="text-balance text-center text-heading-xl text-gray-100 font-sans"
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          
          {cards.map((card) => (
            <div key={card.title} className={`flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 ${card.bgColor}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
                <card.icon  className='h-6 w-6 text-white'/>
              </div>
              <strong className="text-heading-sm text-gray-100">
                {card.title}
              </strong>
              <p className="text-body-sm text-gray-200">
                {card.content}
              </p>
            </div>
        ))}
      </div>
    </div>
    </section >
  );
};