import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-serif font-bold text-white">
                AcademicPro
              </span>
            </div>
            <p className="mb-4 text-sm text-gray-400">
              Especialistas em pesquisa acadêmica e produção científica de alta qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Como Funciona
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Trabalho de Conclusão de Curso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Artigos Científicos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dissertações
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Teses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pesquisas Acadêmicas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2" />
                <a
                  href="tel:+5511965849829"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  (11) 96584-9829
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2" />
                <a
                  href="mailto:contato@academicpro.com.br"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  academicpro.contato@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} AcademicPro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;