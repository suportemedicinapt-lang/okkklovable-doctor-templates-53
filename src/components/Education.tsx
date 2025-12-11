import { GraduationCap, Award, BookOpen } from "lucide-react";
import Placeholder from "./Placeholder";

const Education = () => {
  return (
    <section id="formacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Qualificações
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-muted-foreground">
            <Placeholder>[Texto introdutório sobre sua formação. Exemplo: "Formação sólida e contínua atualização para oferecer o melhor atendimento."]</Placeholder>
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            {/* Items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="relative flex gap-6 animate-fade-up">
                <div className="hidden md:flex w-16 h-16 bg-primary rounded-2xl items-center justify-center shrink-0 z-10">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-2xl card-shadow border border-border">
                  <span className="text-primary text-sm font-medium">
                    <Placeholder>[Período - Ex: 2010-2016]</Placeholder>
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-2">
                    <Placeholder>[Título - Ex: Graduação em Medicina]</Placeholder>
                  </h3>
                  <p className="text-muted-foreground">
                    <Placeholder>[Instituição - Ex: Universidade Federal de São Paulo (UNIFESP)]</Placeholder>
                  </p>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative flex gap-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="hidden md:flex w-16 h-16 bg-primary rounded-2xl items-center justify-center shrink-0 z-10">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-2xl card-shadow border border-border">
                  <span className="text-primary text-sm font-medium">
                    <Placeholder>[Período - Ex: 2017-2019]</Placeholder>
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-2">
                    <Placeholder>[Título - Ex: Residência em Medicina Esportiva]</Placeholder>
                  </h3>
                  <p className="text-muted-foreground">
                    <Placeholder>[Instituição - Ex: Hospital das Clínicas - FMUSP]</Placeholder>
                  </p>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative flex gap-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="hidden md:flex w-16 h-16 bg-primary rounded-2xl items-center justify-center shrink-0 z-10">
                  <BookOpen className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-2xl card-shadow border border-border">
                  <span className="text-primary text-sm font-medium">
                    <Placeholder>[Período - Ex: 2020]</Placeholder>
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-2">
                    <Placeholder>[Título - Ex: Pós-Graduação em Medicina do Exercício]</Placeholder>
                  </h3>
                  <p className="text-muted-foreground">
                    <Placeholder>[Instituição - Ex: Sociedade Brasileira de Medicina do Exercício e do Esporte]</Placeholder>
                  </p>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="relative flex gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="hidden md:flex w-16 h-16 bg-accent rounded-2xl items-center justify-center shrink-0 z-10">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="flex-1 bg-card p-6 rounded-2xl card-shadow border border-border">
                  <span className="text-accent text-sm font-medium">
                    <Placeholder>[Período - Ex: 2021-Atual]</Placeholder>
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-2">
                    <Placeholder>[Título - Ex: Membro da Sociedade Brasileira de Medicina Esportiva]</Placeholder>
                  </h3>
                  <p className="text-muted-foreground">
                    <Placeholder>[Descrição opcional ou deixe em branco]</Placeholder>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
