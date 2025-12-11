import { Activity, Heart, Bone, Brain, Dumbbell, Stethoscope } from "lucide-react";
import Placeholder from "./Placeholder";

const specialties = [
  {
    icon: Activity,
    title: "[Especialidade 1]",
    description: "[Descrição breve da especialidade. Exemplo: Avaliação e tratamento de lesões relacionadas à prática esportiva.]",
  },
  {
    icon: Heart,
    title: "[Especialidade 2]",
    description: "[Descrição breve. Exemplo: Acompanhamento cardiológico para atletas e praticantes de atividade física.]",
  },
  {
    icon: Bone,
    title: "[Especialidade 3]",
    description: "[Descrição breve. Exemplo: Tratamento de lesões musculoesqueléticas com foco na recuperação funcional.]",
  },
  {
    icon: Brain,
    title: "[Especialidade 4]",
    description: "[Descrição breve. Exemplo: Orientação sobre aspectos psicológicos do desempenho esportivo.]",
  },
  {
    icon: Dumbbell,
    title: "[Especialidade 5]",
    description: "[Descrição breve. Exemplo: Prescrição de exercícios terapêuticos e reabilitação.]",
  },
  {
    icon: Stethoscope,
    title: "[Especialidade 6]",
    description: "[Descrição breve. Exemplo: Check-up esportivo completo e avaliação pré-participação.]",
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Especialidades
          </h2>
          <p className="text-muted-foreground">
            <Placeholder>[Texto introdutório sobre suas especialidades. Exemplo: "Ofereço atendimento especializado em diversas áreas da medicina esportiva, sempre com foco na saúde e bem-estar do paciente."]</Placeholder>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <specialty.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                <Placeholder>{specialty.title}</Placeholder>
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                <Placeholder>{specialty.description}</Placeholder>
              </p>
            </div>
          ))}
        </div>
        
        {/* CFM Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            * Este site segue as diretrizes de publicidade médica estabelecidas pelo Conselho Federal de Medicina (CFM).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
