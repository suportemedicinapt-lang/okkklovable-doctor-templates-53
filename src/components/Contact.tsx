import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Placeholder from "./Placeholder";

const Contact = () => {
  return (
    <section id="contato" className="py-24 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-card/80 font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-card mt-3 mb-4">
            Agende Sua Consulta
          </h2>
          <p className="text-card/80">
            <Placeholder>[Texto de convite. Exemplo: "Entre em contato para agendar sua consulta ou tirar dúvidas. Terei prazer em atendê-lo."]</Placeholder>
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up">
              <div className="bg-card/10 backdrop-blur-sm p-6 rounded-2xl border border-card/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-card" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card mb-1">Telefone</h3>
                    <p className="text-card/80">
                      <Placeholder>[Seu Telefone - Ex: (11) 99999-9999]</Placeholder>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/10 backdrop-blur-sm p-6 rounded-2xl border border-card/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-card" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card mb-1">E-mail</h3>
                    <p className="text-card/80">
                      <Placeholder>[Seu E-mail - Ex: contato@seusite.com.br]</Placeholder>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/10 backdrop-blur-sm p-6 rounded-2xl border border-card/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-card" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card mb-1">Endereço</h3>
                    <p className="text-card/80">
                      <Placeholder>[Seu Endereço Completo - Ex: Av. Paulista, 1000 - Sala 101, Bela Vista, São Paulo - SP]</Placeholder>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/10 backdrop-blur-sm p-6 rounded-2xl border border-card/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-card" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card mb-1">Horário de Atendimento</h3>
                    <p className="text-card/80">
                      <Placeholder>[Seus Horários - Ex: Segunda a Sexta: 8h às 18h]</Placeholder>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card p-8 rounded-2xl card-shadow h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Pronto para Cuidar da Sua Saúde?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    <Placeholder>[Mensagem de incentivo. Exemplo: "Agende sua consulta e dê o primeiro passo para alcançar seus objetivos esportivos com saúde e segurança."]</Placeholder>
                  </p>
                  
                  <div className="space-y-4">
                    <Button size="lg" className="w-full" asChild>
                      <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                        Agendar via WhatsApp
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href="tel:+5500000000000">
                        Ligar Agora
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Siga nas redes sociais:</p>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
