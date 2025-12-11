import { Button } from "@/components/ui/button";
import Placeholder from "./Placeholder";
import heroImage from "@/assets/hero-sports-medicine.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Medicina Esportiva" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block bg-card/20 backdrop-blur-sm text-card px-4 py-2 rounded-full text-sm font-medium mb-6 border border-card/20">
            Medicina Esportiva
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-card font-bold leading-tight mb-6">
            <Placeholder>[Seu Nome Completo]</Placeholder>
          </h1>
          
          <p className="text-lg md:text-xl text-card/90 mb-4 leading-relaxed">
            <Placeholder>[Sua Especialidade Principal]</Placeholder>
          </p>
          
          <p className="text-card/80 mb-8 leading-relaxed max-w-xl">
            <Placeholder>[Breve descrição sobre você e sua abordagem médica. Exemplo: "Atendimento personalizado focado na prevenção de lesões e otimização do desempenho esportivo, unindo ciência e prática clínica."]</Placeholder>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contato">Agendar Consulta</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#sobre">Conheça Meu Trabalho</a>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-card/80">
            <div>
              <span className="block text-2xl font-bold text-card">
                <Placeholder>[X]+</Placeholder>
              </span>
              <span className="text-sm">Anos de Experiência</span>
            </div>
            <div className="w-px h-12 bg-card/30" />
            <div>
              <span className="block text-2xl font-bold text-card">
                <Placeholder>[X]+</Placeholder>
              </span>
              <span className="text-sm">Pacientes Atendidos</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-card/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
