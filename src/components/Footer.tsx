import Placeholder from "./Placeholder";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-background">
                  <Placeholder>[Seu Nome]</Placeholder>
                </h3>
                <p className="text-xs text-background/60">Medicina Esportiva</p>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              <Placeholder>[Breve descrição ou slogan. Exemplo: "Cuidando da saúde de atletas e praticantes de atividade física."]</Placeholder>
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="text-background/70 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-background/70 hover:text-primary transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#formacao" className="text-background/70 hover:text-primary transition-colors">
                  Formação
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-background mb-4">Informações Legais</h4>
            <div className="text-sm text-background/70 space-y-2">
              <p>
                <strong className="text-background/90">CRM:</strong> <Placeholder>[Número/UF]</Placeholder>
              </p>
              <p>
                <strong className="text-background/90">RQE:</strong> <Placeholder>[Número]</Placeholder>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} <Placeholder>[Seu Nome]</Placeholder>. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              Este site segue as normas de publicidade médica do CFM - Resolução CFM nº 2.336/2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
