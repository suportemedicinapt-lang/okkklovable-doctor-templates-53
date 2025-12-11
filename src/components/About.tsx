import Placeholder from "./Placeholder";
import doctorPlaceholder from "@/assets/doctor-placeholder.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img 
                src={doctorPlaceholder} 
                alt="Foto do Médico" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl card-shadow border border-border">
              <p className="text-sm text-muted-foreground mb-1">CRM</p>
              <p className="text-xl font-bold text-primary">
                <Placeholder>[Seu CRM/UF]</Placeholder>
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
          
          {/* Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Mim
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              <Placeholder>[Seu Nome Completo]</Placeholder>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <Placeholder>[Parágrafo 1: Apresente-se brevemente. Exemplo: "Sou médico especialista em Medicina Esportiva, com formação pela Universidade X e pós-graduação em Y. Minha trajetória profissional é marcada pelo cuidado integral ao atleta."]</Placeholder>
              </p>
              
              <p>
                <Placeholder>[Parágrafo 2: Fale sobre sua filosofia de trabalho. Exemplo: "Acredito em uma abordagem que une ciência, tecnologia e humanização. Cada paciente recebe um plano de cuidado personalizado."]</Placeholder>
              </p>
              
              <p>
                <Placeholder>[Parágrafo 3: Mencione sua experiência. Exemplo: "Ao longo de X anos, tive a oportunidade de atender atletas de diversas modalidades, desde amadores a profissionais."]</Placeholder>
              </p>
            </div>
            
            {/* Credentials */}
            <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-4">Registro Profissional</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">CRM:</strong> <Placeholder>[Número/UF]</Placeholder>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">RQE:</strong> <Placeholder>[Número da Especialidade]</Placeholder>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
