import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import StoryExperience from "@/components/StoryExperience";
import VentureName from "@/components/VentureName";

export const metadata: Metadata = {
  title: "História de notcostaip",
  description: "Da obra e do notebook Positivo quebrado à criação de produtos SaaS, automações e operações digitais.",
  alternates: { canonical: "/historia" },
};

export default function HistoriaPage() {
  return (
    <main className="bg-[#080808] pt-20">
      <div className="mx-auto max-w-7xl px-6 pt-8 md:px-10">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-400 transition hover:border-red-400 hover:text-white active:scale-95"><ArrowLeft size={14} /> Voltar</Link>
      </div>
      <StoryExperience />
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <article className="mx-auto max-w-4xl border-t border-white/10 pt-16 text-neutral-400 md:pt-24">
          <p className="section-kicker">Relato completo</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.045em] text-white md:text-7xl">A história sem atalhos.</h2>
          <div className="mt-10 space-y-7 text-lg leading-8 md:mt-14 md:text-xl md:leading-9">
            <p>Se você chegou até aqui, provavelmente quer entender quem está por trás dos negócios, dos sistemas e de toda essa operação digital. Prazer, meu nome é Pablo Henrick Costa Silva. Minha história não é a do clássico garoto prodígio do Vale do Silício que aprendeu a programar no computador de última geração dos pais. A minha realidade foi construída na raça, na necessidade e em uma vontade inegociável de vencer na vida.</p>
            <p>Nasci em 13 de dezembro de 2005, em Brasília. A vida me exigiu maturidade muito cedo. Perdi meus pais quando ainda era muito novo, e esse tipo de perda muda a forma como você enxerga o mundo. Não havia uma rede de segurança confortável me esperando caso eu falhasse. Desde os meus 8 anos de idade, eu tinha um único objetivo claro na cabeça: eu queria ser rico. A ambição e a busca por dinheiro sempre foram o meu motor principal, não por vaidade, mas porque eu entendi cedo que o dinheiro compra liberdade, controle sobre o próprio destino e a capacidade de mudar a realidade ao meu redor.</p>

            <h3 className="pt-8 text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">O cimento, a estrada e o notebook quebrado</h3>
            <p>Na minha adolescência, o suor veio antes do código. Eu não comecei minha vida profissional em um escritório com ar-condicionado. Fui ajudante de caminhoneiro, pegando a estrada e entendendo como a logística do mundo real funciona. Fui também servente de pedreiro. Sei exatamente o que é acordar de madrugada para bater massa, carregar peso e trocar o desgaste físico por um salário no fim do mês.</p>
            <p>Foi um aprendizado brutal, que me ensinou o valor do trabalho duro, mas também me deu uma certeza absoluta: não era usando a força dos meus braços que eu iria construir a riqueza que tanto desejava. Eu precisava de escala. Precisava usar a minha cabeça.</p>
            <p>Aos 16 anos, encontrei a minha porta de saída em um notebook Positivo muito danificado. A carcaça estava tão comprometida que eu não podia fechar a tampa. A tela não funcionava direito, então o mantinha cabeado e escorado em uma TV velha que servia de monitor.</p>
            <p>Foi na frente daquela tela improvisada que virei madrugadas incontáveis. Enquanto o mundo dormia, eu pesquisava, lia, testava e tentava entender como as pessoas ganhavam dinheiro na internet. Aquele notebook velho conectado à TV era o meu portal para mudar de vida.</p>

            <h3 className="pt-8 text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">O choque com o mundo dos negócios</h3>
            <p>Minha vontade de fazer dinheiro me levou a entender que eu precisava compreender como as empresas funcionam por dentro. Trabalhei como Coordenador Administrativo no Giraffas, e foi ali que o jogo começou a mudar. Saí da teoria e fui para o centro do campo de batalha operacional, lidando com estoques, planilhas, sistemas de gestão e organização de equipes.</p>
            <p>Percebi que muitas empresas perdem dinheiro porque os processos são lentos e manuais. Havia muitos dados, mas pouca inteligência. Comecei a estudar como conectar as coisas e aprendi a trabalhar com bancos de dados complexos para criar painéis que mostravam exatamente o que estava acontecendo no negócio.</p>
            <blockquote className="my-12 border-l-2 border-red-500 pl-7 text-2xl font-medium leading-tight tracking-[-.025em] text-white md:text-4xl">Eu não queria ser apenas um programador. Queria ser um construtor de soluções que geram lucro.</blockquote>

            <h3 className="pt-8 text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">Deixando a tecnologia simples</h3>
            <p>Hoje, atuo em várias frentes do mundo digital, mas minha lógica de trabalho é simples: encontro um problema que faz as pessoas perderem tempo ou dinheiro e crio um sistema automático para resolvê-lo.</p>
            <p>Na prática, sei construir um aplicativo ou site do absoluto zero até estar no ar funcionando. Mas, em vez de usar termos técnicos complicados, prefiro dizer que crio funcionários digitais. Se existe uma tarefa chata e repetitiva — como mandar centenas de mensagens para clientes, conferir preços na internet ou separar dados de vendas —, programo um robô para fazer isso em segundos.</p>

            <h3 className="pt-8 text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">Criando os próprios produtos</h3>
            <p>Como minha cabeça sempre funcionou voltada para vendas e negócios, eu via muita dificuldade na forma como as empresas tentavam conseguir novos clientes no WhatsApp. Era um processo manual e exaustivo. Foi então que decidi criar o <VentureName name="coldconnectpay" fullAccent />.</p>
            <p>Em vez de ser apenas mais uma agenda de contatos, construí um sistema inteligente que busca contatos, classifica oportunidades e automatiza conversas. Quando o cliente responde, a inteligência artificial interpreta o contexto e direciona a oportunidade ao vendedor humano.</p>
            <p>Como vender é só metade do caminho, ampliei o <VentureName name="coldconnectpay" fullAccent /> com uma arquitetura própria para gerenciar pagamentos, vendas, comissões e a origem de cada cliente dos meus negócios digitais.</p>

            <h3 className="pt-8 text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">O jogo do e-commerce e das vendas online</h3>
            <p>Toda essa habilidade de criar sistemas também é aplicada no comércio pela internet. Estudo e opero plataformas como Mercado Livre, Amazon, Shopee e TikTok Shop, usando tecnologia para pesquisar produtos, comparar preços, calcular margens e orientar decisões.</p>
            <p>Na <VentureName name="ishopbox" fullAccent />, minha loja de e-commerce, conecto produto, oferta, mídia paga, fornecedores e experiência do cliente em uma operação automatizada por dropshipping. É a união da visão de quem já suou na rua para ganhar dinheiro com a inteligência de quem sabe programar computadores para trabalhar de forma autônoma.</p>

            <h3 className="pt-8 text-3xl font-semibold tracking-[-.035em] text-white md:text-5xl">O futuro</h3>
            <p>Aquela criança de 8 anos que decidiu que seria rica e aquele adolescente de 16 anos virando noites no notebook quebrado da Positivo ainda estão vivos dentro de mim. A diferença é que agora tenho as ferramentas certas.</p>
            <p>Acredito que estamos na melhor época da história para quem tem ambição. Com o avanço da inteligência artificial, uma pessoa sozinha consegue construir empresas que antes precisariam de dezenas de funcionários. Meu foco é continuar construindo sistemas, negócios digitais e automações capazes de escalar.</p>
            <p className="text-white">Eu não vim de berço de ouro, não tive caminhos fáceis e o mundo nunca me deu nada de graça. Tudo o que construí veio de visão de mercado, execução e horas infinitas na frente de uma tela. E a verdade é que isso é só o começo.</p>
          </div>
        </article>
      </section>
      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#f2efe8] p-8 text-black md:p-16">
          <p className="section-kicker !text-red-600">Próximo capítulo</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.045em] md:text-7xl">Construir empresas que operam com inteligência, não com caos.</h2>
          <Link href="/#negocios" className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-600 active:scale-95">Conhecer os negócios <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
