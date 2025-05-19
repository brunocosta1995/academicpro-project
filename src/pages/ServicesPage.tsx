import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  BookOpen,
  FileText,
  GraduationCap,
  Search,
  Edit,
  HelpCircle,
  Users,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsaAppBtn2";

const ServicesPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      id: 1,
      title: "Trabalho de Conclusão de Curso (TCC)",
      description:
        "Desenvolvimento completo ou parcial de trabalhos de conclusão de curso em diversas áreas do conhecimento.",
      icon: <FileText className="h-12 w-12 text-primary-600" />,
      features: [
        "Redação completa do trabalho",
        "Levantamento bibliográfico",
        "Estruturação metodológica",
        "Análise de dados",
        "Revisão e formatação segundo normas acadêmicas",
      ],
    },
    {
      id: 2,
      title: "Artigos Científicos",
      description:
        "Produção de artigos científicos para periódicos acadêmicos nacionais e internacionais.",
      icon: <BookOpen className="h-12 w-12 text-primary-600" />,
      features: [
        "Redação do artigo conforme padrões de periódicos",
        "Revisão da literatura",
        "Coleta e análise de dados",
        "Tradução para outras línguas",
        "Adequação às normas específicas de publicação",
      ],
    },
    {
      id: 3,
      title: "Dissertações de Mestrado",
      description:
        "Suporte metodológico e desenvolvimento de dissertações de mestrado com alto rigor acadêmico.",
      icon: <GraduationCap className="h-12 w-12 text-primary-600" />,
      features: [
        "Definição de problema e objetivos",
        "Elaboração do referencial teórico",
        "Desenvolvimento da metodologia",
        "Análise e discussão de resultados",
        "Revisão final e adequação às normas",
      ],
    },
    {
      id: 4,
      title: "Teses de Doutorado",
      description:
        "Apoio especializado para teses de doutorado, garantindo contribuição original para o campo de pesquisa.",
      icon: <Users className="h-12 w-12 text-primary-600" />,
      features: [
        "Definição de tese original e relevante",
        "Revisão de literatura extensiva",
        "Metodologia avançada de pesquisa",
        "Análise crítica e discussão aprofundada",
        "Validação da contribuição científica",
      ],
    },
    {
      id: 5,
      title: "Pesquisa Bibliográfica",
      description:
        "Levantamento e análise de literatura científica relevante para embasar pesquisas acadêmicas.",
      icon: <Search className="h-12 w-12 text-primary-600" />,
      features: [
        "Pesquisa em bases de dados nacionais e internacionais",
        "Seleção de literatura atualizada e relevante",
        "Organização bibliográfica",
        "Análise de tendências de pesquisa",
        "Fichamentos e resumos",
      ],
    },
    {
      id: 6,
      title: "Revisão e Formatação",
      description:
        "Revisão, correção e formatação de trabalhos acadêmicos segundo normas específicas.",
      icon: <Edit className="h-12 w-12 text-primary-600" />,
      features: [
        "Correção ortográfica e gramatical",
        "Adequação às normas ABNT ou outras",
        "Formatação de citações e referências",
        "Verificação de plágio",
        "Ajustes de linguagem acadêmica",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Nossos Serviços Acadêmicos
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Contamos com uma equipe de especialistas em diversas áreas do
              conhecimento para desenvolver pesquisas acadêmicas com qualidade e
              excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/how-it-works" className="btn btn-accent">
                Como Funciona
              </Link>
              <WhatsAppButton
                btnText="Fale Conosco"
                phoneNumber="5511965849829"
                message="Olá! Gostaria de mais informações sobre seus serviços acadêmicos."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Conheça Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos suporte especializado para todas as etapas do seu
              projeto acadêmico
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * service.id }}
                className="bg-gray-50 p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Nosso Processo de Trabalho
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia estruturada para garantir qualidade e resultados em
              cada etapa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                <div className="flex justify-center items-center w-12 h-12 bg-primary-100 text-primary-700 rounded-full mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                  Consulta Inicial
                </h3>
                <p className="text-gray-600">
                  Entendemos suas necessidades e definimos o escopo do projeto,
                  prazo e expectativas.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-primary-200 z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                <div className="flex justify-center items-center w-12 h-12 bg-primary-100 text-primary-700 rounded-full mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                  Planejamento
                </h3>
                <p className="text-gray-600">
                  Estabelecemos a metodologia, fontes de pesquisa e cronograma
                  detalhado do trabalho.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-primary-200 z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                <div className="flex justify-center items-center w-12 h-12 bg-primary-100 text-primary-700 rounded-full mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                  Desenvolvimento
                </h3>
                <p className="text-gray-600">
                  Realizamos a pesquisa e produção do conteúdo com feedback
                  constante e ajustes necessários.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-primary-200 z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                <div className="flex justify-center items-center w-12 h-12 bg-primary-100 text-primary-700 rounded-full mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                  Entrega e Suporte
                </h3>
                <p className="text-gray-600">
                  Finalizamos o projeto com revisão completa e oferecemos
                  suporte pós-entrega para esclarecimentos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços acadêmicos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                    Quais são os prazos médios para entrega dos trabalhos?
                  </h3>
                  <p className="text-gray-600">
                    Os prazos variam de acordo com a complexidade e extensão do
                    projeto. TCCs podem levar de 30 a 60 dias, artigos de 15 a
                    30 dias, e dissertações/teses de 60 a 120 dias. Trabalhamos
                    com prazos personalizados conforme a necessidade do cliente.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                    Como é garantida a originalidade do conteúdo?
                  </h3>
                  <p className="text-gray-600">
                    Todos os trabalhos são desenvolvidos a partir de pesquisas
                    originais, com citações adequadas das fontes utilizadas.
                    Utilizamos ferramentas de verificação de plágio para
                    garantir a originalidade, e o conteúdo é personalizado para
                    cada projeto.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                    É possível solicitar revisões após a entrega?
                  </h3>
                  <p className="text-gray-600">
                    Sim, oferecemos revisões gratuitas dentro de um período
                    determinado após a entrega final. O número e prazo de
                    revisões são definidos no contrato, variando conforme o tipo
                    de serviço.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                    Como é feito o pagamento pelos serviços?
                  </h3>
                  <p className="text-gray-600">
                    O pagamento é realizado em etapas, geralmente com um valor
                    inicial para iniciar o projeto e o restante dividido
                    conforme entregas parciais. Aceitamos diversas formas de
                    pagamento, incluindo cartão de crédito, transferência
                    bancária e PIX.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center mt-12">
            <Link to="/how-it-works" className="btn btn-primary">
              Saiba Mais Sobre Nosso Processo
            </Link>
            <WhatsAppButton
              btnText="Faça o Orçamento Agora Mesmo"
              phoneNumber="5511965849829"
              message="Olá! Gostaria de mais informações sobre seus serviços acadêmicos."
            />
          </div>
        </div>
      </section>

      {/* CTA with Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                Solicite um Orçamento
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Entre em contato conosco para discutir seu projeto acadêmico e
                receber um orçamento personalizado.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Orçamento detalhado e sem compromisso
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Atendimento personalizado para cada projeto
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Prazos e valores flexíveis conforme necessidade
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Garantia de satisfação e confidencialidade
                  </span>
                </li>
                <li className="flex items-start">
                  <WhatsAppButton
                    btnText="Faça o Orçamento Agora Mesmo"
                    phoneNumber="5511965849829"
                    message="Olá! Gostaria de mais informações sobre seus serviços acadêmicos."
                  />
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm
                title="Solicitar Orçamento"
                subtitle="Descreva seu projeto acadêmico e entraremos em contato com um orçamento personalizado."
                buttonText="Enviar Solicitação"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
