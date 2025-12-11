import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import Placeholder from "./Placeholder";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="tel:+5500000000000" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <Placeholder>[Seu Telefone]</Placeholder>
            </a>
            <a href="mailto:contato@email.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <Placeholder>[Seu E-mail]</Placeholder>
            </a>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <span className="text-xs">
              CRM: <Placeholder>[Seu CRM]</Placeholder>
            </span>
          </div>
        </div>
        
        {/* Main nav */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-semibold text-foreground">
                <Placeholder>[Seu Nome]</Placeholder>
              </h1>
              <p className="text-xs text-muted-foreground">Medicina Esportiva</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="#especialidades" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Especialidades
            </a>
            <a href="#formacao" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Formação
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </div>
          
          <a 
            href="#contato" 
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
