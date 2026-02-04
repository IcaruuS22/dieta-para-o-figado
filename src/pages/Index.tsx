import { Heart, Users, Utensils, Check } from "lucide-react";
import { lazy, Suspense } from "react";
const BenefitCard = lazy(() => import("@/components/BenefitCard").then(m => ({ default: m.BenefitCard })));
const RecipeCategory = lazy(() => import("@/components/RecipeCategory").then(m => ({ default: m.RecipeCategory })));
const BonusCard = lazy(() => import("@/components/BonusCard").then(m => ({ default: m.BonusCard })));
const RatingSummary = lazy(() => import("@/components/RatingSummary").then(m => ({ default: m.RatingSummary })));
const PriceBox = lazy(() => import("@/components/PriceBox").then(m => ({ default: m.PriceBox })));
const TestimonialPlaceholder = lazy(() => import("@/components/TestimonialPlaceholder").then(m => ({ default: m.TestimonialPlaceholder })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const GuaranteeBadge = lazy(() => import("@/components/GuaranteeBadge").then(m => ({ default: m.GuaranteeBadge })));
const StatCard = lazy(() => import("@/components/StatCard").then(m => ({ default: m.StatCard })));
const RecipeShowcase = lazy(() => import("@/components/RecipeShowcase").then(m => ({ default: m.RecipeShowcase })));
import { CTAButton } from "@/components/CTAButton";

// Images
import heroProduct from "@/assets/hero-product.webp";
import category1 from "@/assets/category-1.webp";
import category2 from "@/assets/category-2.webp";
import category3 from "@/assets/category-3.webp";
import category4 from "@/assets/category-4.webp";
import category5 from "@/assets/category-5.webp";
import category6 from "@/assets/category-6.webp";
import bonus1 from "@/assets/bonus-1.webp";
import bonus2 from "@/assets/bonus-2.webp";
import bonus3 from "@/assets/bonus-3.webp";
import bonus4 from "@/assets/bonus-4.webp";
import bonus5 from "@/assets/bonus-5.webp";
import bonus6 from "@/assets/bonus-6.webp";
import appPreview from "@/assets/aplicativo-removebg-preview.webp";

const Index = () => {
  const benefits = [
    {
      emoji: "🎈",
      title: "Menos inchaço após as refeições",
      description: "Sabe aquela sensação de ter engolido um balão depois do almoço? Aqui ela dá lugar ao conforto. Você termina de comer e sente a barriga tranquila, sem precisar desabotoar a calça."
    },
    {
      emoji: "🍃",
      title: "Digestão mais leve e eficiente",
      description: "Chega de sentir a comida parada no estômago por horas. Com os ingredientes certos, seu corpo processa tudo com facilidade, e você segue o dia leve, sem aquele peso te puxando para baixo."
    },
    {
      emoji: "⚡",
      title: "Mais disposição ao longo do dia",
      description: "O cansaço que bate logo cedo começa a desaparecer. Ao tirar a sobrecarga do fígado, sua energia volta, e você consegue fazer suas atividades sem se arrastar pela casa."
    },
    {
      emoji: "🛡️",
      title: "Menos medo de comer o que gosta",
      description: "Acabe com a dúvida do 'será que isso vai me fazer mal?'. Você vai sentar à mesa com a segurança de estar nutrindo seu corpo e ajudando seu fígado, sem culpa ou receio."
    },
    {
      emoji: "🪶",
      title: "Sensação de leveza no corpo",
      description: "Imagine acordar e não se sentir inchado ou pesado. É essa a liberdade de ter um fígado que funciona bem: seu corpo desincha e você se sente mais leve para viver o dia."
    },
    {
      emoji: "😋",
      title: "Alimentação que não parece dieta",
      description: "Esqueça a comida sem graça e o prato triste. Você vai descobrir sabores incríveis que agradam o paladar e a família toda, esquecendo completamente que está seguindo um cuidado especial."
    }
  ];

  const bonuses = [
    {
      number: 1,
      title: "Guia Visual: Alimentos que Aumentam vs Reduzem a Gordura no Fígado",
      description: "Entenda rapidamente o que apoiar e o que evitar para ajudar seu fígado.",
      value: "R$59,00",
      imageSrc: bonus1
    },
    {
      number: 2,
      title: "Guia de Substituições Inteligentes para Esteatose",
      description: "Trocas práticas para reduzir o acúmulo de gordura sem perder sabor.",
      value: "R$47,00",
      imageSrc: bonus2
    },
    {
      number: 3,
      title: "Plano de 7 Dias para Apoiar a Redução de Gordura no Fígado",
      description: "Cardápio organizado dia a dia para começar com segurança e leveza.",
      value: "R$39,00",
      imageSrc: bonus3
    },
    {
      number: 4,
      title: "Receituário de Desejos Sem Culpa (Amigos do Fígado)",
      description: "Alternativas saborosas para matar a vontade sem sobrecarregar o fígado.",
      value: "R$29,00",
      imageSrc: bonus4
    },
    {
      number: 5,
      title: "Mini Receituário: Pães e Massas que Não Sobrecarregam o Fígado",
      description: "Preparos funcionais com textura e sabor, pensados para leveza digestiva.",
      value: "R$31,00",
      imageSrc: bonus5
    },
    {
      number: 6,
      title: "Molhos e Patês Leves para Quem Tem Gordura no Fígado",
      description: "Complementos que transformam pratos sem favorecer acúmulo hepático.",
      value: "R$28,00",
      imageSrc: bonus6
    }
  ];

  const recipeCategories = [
    {
      title: "Cafés da Manhã",
      description: "Sabe quando você acorda e já sente o corpo cansado, como se não tivesse dormido nada? O fígado sobrecarregado rouba sua energia logo cedo. Aqui, você aprende a começar o dia leve, dando o descanso que seu corpo pede para funcionar bem.",
      imageSrc: category1
    },
    {
      title: "Almoços",
      description: "Aquele peso na barriga depois do almoço não é normal, mesmo comendo pouco. É sinal de que a digestão travou. Com as combinações certas, você volta a sentir leveza e disposição, sem aquele estufamento que incomoda a tarde toda.",
      imageSrc: category2
    },
    {
      title: "Lanches e Jantares",
      description: "Chega a noite e bate a dúvida: 'o que comer sem passar mal?'. O medo de errar não pode te deixar com fome. Descubra opções que saciam e preparam seu organismo para um sono reparador, longe da sensação de peso.",
      imageSrc: category3
    },
    {
      title: "Pães",
      description: "O café da tarde perde a graça quando você acha que tudo é proibido. A boa notícia é que você não precisa abandonar o pãozinho, apenas saber qual escolher. Volte a ter prazer nesses momentos simples, sem medo de prejudicar seus exames.",
      imageSrc: category4
    },
    {
      title: "Confeitaria",
      description: "A vontade de um doce vem junto com o medo de piorar o fígado? Viver se privando só aumenta a ansiedade. Existem formas deliciosas de matar esse desejo usando ingredientes que seu corpo aceita bem, sem a culpa de estar agredindo sua saúde.",
      imageSrc: category5
    },
    {
      title: "Sopas e Cremes",
      description: "Às vezes, tudo o que a gente quer é uma refeição que abrace o estômago e tire a sensação de inchaço. Preparos quentes e nutritivos são seus maiores aliados para 'limpar' o peso do corpo e trazer o conforto que você merece.",
      imageSrc: category6
    }
  ];

  const featuresList = [
    "Pensadas para quem tem gordura no fígado",
    "Ingredientes acessíveis",
    "Sem alimentos que favorecem esteatose",
    "Ricas em fibras e nutrientes",
    "Preparações simples",
    "Adaptáveis à rotina"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Banner */}
      <section className="bg-urgency text-white py-3 px-1">
        <div className="container max-w-5xl mx-auto text-center">
          <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide">
            SIGА ЕSTЕS САRDÁPIOS PОR 2 SЕМАNАS E АCАBЕ CОM À GОRDURА NО FÍGАDО E À BАRRIGА INCHАDА!
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-hero-foreground py-8 px-1 md:py-16 md:px-1">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-black mb-4 md:mb-6 leading-tight uppercase">
            <strong className="text-[#e89c30]">O SEGREDO REVELADO</strong> QUE ESTÁ AJUDANDO MILHARES DE PESSOAS A <strong className="text-[#e89c30]">REDUZIR A GORDURA NO FÍGADO</strong> E VOLTAR A SE SENTIR LEVES, SEM DIETAS EXTREMAS OU MEDO DE COMER
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-10 max-w-2xl mx-auto opacity-90">
            Um plano passo a passo: Café, Almoço e Jantar, desenhados para "limpar" seu fígado naturalmente e acabar com o cansaço e o inchaço. Apenas siga este Guia e veja seu fígado se recuperar.
          </p>
          
          <div className="max-w-sm sm:max-w-md md:max-w-2xl mx-auto mb-6 md:mb-8">
            <img 
              src={heroProduct} 
              alt="Receituário Funcional para Gordura no Fígado" 
              className="w-full h-auto object-contain"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </div>
          <div className="max-w-sm sm:max-w-md md:max-w-2xl mx-auto">
            <CTAButton
              className="bg-none bg-[#e89c30] hover:brightness-95 text-white"
              onClick={() => {
                const el = document.getElementById("oferta");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Quero Acesso Imediato!
            </CTAButton>
            <p className="text-center text-xs md:text-sm text-white mt-2 md:mt-3">
              +7.500 avaliações (⭐⭐⭐⭐⭐4.9/5)
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-section-alt">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-urgency" />
            <span className="text-urgency font-semibold text-sm md:text-base">Benefícios deste Guia de Receitas</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-6 md:mb-12 px-2">
            Acabe de vez com a gordura do seu fígado apenas comendo melhor!
          </h2>
          
          <Suspense fallback={null}>
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </Suspense>

          <div className="mt-8 md:mt-12 bg-card p-4 md:p-8 rounded-xl shadow-card border border-border max-w-3xl mx-auto">
            <p className="text-center text-muted-foreground leading-relaxed text-sm md:text-base font-semibold">
              Se você descobriu gordura no fígado e vive cansado(a) sem saber o motivo, sente inchaço e ouviu que precisa “mudar a alimentação”, este guia foi pensado para você. O problema não é comer, é continuar comendo alimentos que favorecem o acúmulo de gordura no fígado.
            </p>
          </div>
        </div>
      </section>

      {/* Recipe Categories Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Utensils className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-2 md:mb-4 px-2">
            Veja tudo o que você terá acesso para acabar com a gordura acumulada no fígado
          </h2>
          <p className="text-center text-muted-foreground mb-6 md:mb-12 text-sm md:text-lg px-2">
            Um guia alimentar pensado para apoiar o fígado na redução do excesso de gordura de forma natural e sustentável.
          </p>
          
          <Suspense fallback={null}>
            <div className="space-y-6 md:space-y-12">
              {recipeCategories.map((category, index) => (
                <RecipeCategory 
                  key={index} 
                  {...category} 
                  reverse={index % 2 === 1}
                  imageLabel={category.title}
                  imageSrc={category.imageSrc}
                />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Emotional Section */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-gradient-hero text-hero-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold mb-4 md:mb-8 px-2">
            Chega de comer com medo de piorar a gordura no fígado
          </h2>
          <div className="space-y-4 md:space-y-6 text-sm md:text-lg leading-relaxed opacity-95 px-2">
            <p>
              É comum descobrir a gordura no fígado apenas nos exames e se perguntar por que o corpo vive pesado, inchado e cansado. A verdade é que não é sobre “parar de comer”, e sim sobre escolher preparos que não favoreçam o acúmulo de gordura hepática.
            </p>
            <p>
              Quando você ajusta as escolhas do dia a dia, sente mudanças reais: menos desconforto, digestão mais leve e disposição crescente. Com as combinações certas, é possível apoiar o fígado enquanto mantém prazer à mesa.
            </p>
            <p className="font-semibold text-base md:text-xl">
              Você não precisa esperar o problema piorar para começar a cuidar do seu fígado.
            </p>
          </div>
        </div>
      </section>

      {/* Recipe Showcase */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-section-alt">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-4xl font-heading font-bold text-center text-foreground mb-2 md:mb-4 px-2">
            Pratos que apoiam seu fígado, reduzem o acúmulo de gordura e trazem leveza
          </h2>
          <p className="text-center text-sm md:text-lg text-primary mb-6 md:mb-12">
            Sensação de limpeza interna e conforto digestivo
          </p>
          
          <Suspense fallback={null}>
            <RecipeShowcase />
          </Suspense>
          
          <div className="mt-6 md:mt-12 bg-card p-4 md:p-6 rounded-xl shadow-card border border-border max-w-2xl mx-auto">
            <h3 className="text-base md:text-xl font-heading font-bold text-foreground mb-3 md:mb-4 text-center">
              Características do Guia:
            </h3>
            <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-3">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm md:text-base font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Bonuses Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-3 md:mb-4 px-2">
            As coisas boas não terminam aqui!
          </h2>
          <p className="text-center text-sm md:text-lg text-muted-foreground mb-6 md:mb-12 max-w-2xl mx-auto px-2 font-semibold">
            Ao acessar o Guia Hoje, você receberá +6 bônus EXCLUSIVOS que multiplicam sua liberdade à mesa, sem pagar nem um centavo a mais!
          </p>
          
          <Suspense fallback={null}>
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
              {bonuses.map((bonus) => (
                <BonusCard key={bonus.number} {...bonus} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-4xl font-heading font-bold text-center text-foreground mb-6 md:mb-12 px-2">
            Depoimentos de pessoas que já acabaram com a Gordura no Fígado apenas seguindo este Guia de Receitas!
          </h2>
          
          <Suspense fallback={null}>
            <TestimonialPlaceholder />
          </Suspense>
          
          <Suspense fallback={null}>
            <RatingSummary />
          </Suspense>
        </div>
      </section>

      {/* Second CTA Section */}
      <section id="oferta" className="py-10 px-1 md:py-24 md:px-1 bg-section-alt">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-3xl font-heading font-bold text-foreground mb-4 md:mb-8">
            Transforme sua alimentação com Receitas funcionais para apoiar o fígado + 6 Bônus Exclusivos com 97% de Desconto somente HOJE!
          </h2>
          
          <div className="mb-6 md:mb-8">
            <img 
              src={heroProduct} 
              alt="Receituário Funcional para Gordura no Fígado" 
              className="w-full max-w-2xl mx-auto h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <Suspense fallback={null}>
            <PriceBox showFeatures />
          </Suspense>

          
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-section-alt">
        <div className="container max-w-4xl mx-auto">
          <Suspense fallback={null}>
            <GuaranteeBadge />
          </Suspense>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-heading font-bold text-center text-foreground mb-3 md:mb-4 px-2">
            A alimentação é um dos pilares mais importantes para quem convive com gordura no fígado
          </h2>
          <p className="text-center text-muted-foreground mb-6 md:mb-12 max-w-3xl mx-auto text-sm md:text-base px-2">
            Com escolhas consistentes e saborosas, é possível apoiar o fígado, reduzir o acúmulo de gordura e melhorar a disposição ao longo do dia. O caminho sustentável começa no prato.
          </p>
          
          <Suspense fallback={null}>
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
              <StatCard
                icon={<Heart className="w-6 h-6 md:w-8 md:h-8 text-urgency" />}
                stat="Pilar essencial"
                description="A alimentação é um dos pilares para apoiar o fígado"
              />
              <StatCard
                icon={<Utensils className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
                stat="Consistência diária"
                description="Mudanças simples e sustentáveis geram leveza e conforto"
              />
              <StatCard
                icon={<Users className="w-6 h-6 md:w-8 md:h-8 text-success" />}
                stat="Bem-estar real"
                description="Quando o fígado funciona melhor, o corpo responde"
              />
            </div>
          </Suspense>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 px-1 md:py-24 md:px-1 bg-gradient-hero text-hero-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold mb-3 md:mb-4 px-2">
            OFERTA POR TEMPO LIMITADO SOMENTE HOJE!
          </h2>
          <p className="text-sm md:text-lg mb-4 md:mb-8 opacity-95 px-2">
            Comece hoje a ajudar seu fígado a trabalhar melhor. Cada refeição pode ser um passo para reduzir a gordura no fígado.
          </p>
          
          <div className="bg-card text-foreground rounded-xl md:rounded-2xl p-4 md:p-8">
            <h3 className="text-base sm:text-lg md:text-2xl font-heading font-bold mb-4 md:mb-6">
              Transforme sua alimentação com Receitas Funcionais para Combater a Gordura no Fígado + 6 Bônus Exclusivos com 97% de Desconto somente HOJE!
            </h3>
            
            <div className="mb-4 md:mb-6">
              <img 
                src={heroProduct} 
                alt="Receituário Funcional para Gordura no Fígado" 
                className="w-full max-w-md mx-auto h-auto object-contain"
              />
            </div>
            
            <Suspense fallback={null}>
              <PriceBox showTimer={false} />
            </Suspense>
          
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 px-1 md:py-24 md:px-1">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-center text-foreground mb-6 md:mb-12">
            PERGUNTAS FREQUENTES
          </h2>
          
          <Suspense fallback={null}>
            <FAQSection />
          </Suspense>
        </div>
      </section>

      {/* Final Mini CTA */}
      <section className="py-8 px-1 md:py-12 md:px-1 bg-section-alt">
        <div className="container max-w-xl mx-auto text-center">
          <p className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">
            Sua mudança começa hoje, fácil, rápida e sem riscos
          </p>
          <div className="mb-3 md:mb-4">
            <p className="text-muted-foreground line-through text-sm md:text-base">VALOR CHEIO: R$330,00</p>
            <p className="text-3xl md:text-4xl font-heading font-black text-primary">R$19,90</p>
            <p className="text-xs md:text-sm text-muted-foreground">Pagamento único • Acesso imediato</p>
          </div>
          <CTAButton href="https://www.ggcheckout.com/checkout/v5/ovHr6rzeFUCDQoeYNwdc">
            Quero Acesso Imediato!
          </CTAButton>
          <p className="text-urgency font-bold mt-3 md:mt-4 text-sm md:text-base">
            SOMENTE HOJE! ÚLTIMAS 7 UNIDADES DISPONÍVEIS
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-3 md:py-8 md:px-4 bg-hero text-hero-foreground">
        <div className="container max-w-4xl mx-auto text-center text-xs md:text-sm opacity-80">
          <p className="mb-3 md:mb-4">
            AVISO IMPORTANTE: Este site não faz parte do site do Facebook ou Meta. 
            Além disso, este site não é endossado pelo Facebook de nenhuma forma. 
            FACEBOOK é uma marca registrada da META.
          </p>
          <p className="mb-3 md:mb-4">
            © 2025 Mônica Miranda | Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
