import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  MessageSquare,
  FileCheck,
  ClipboardList,
  Calendar,
  Shield,
  Banknote,
  HelpCircle,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsaAppBtn2";

const HowItWorksPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Process steps
  const steps = [
    {
      id: 1,
      title: "Contato Inicial",
      description:
        "Entre em contato conosco através do formulário, WhatsApp ou telefone para discutir suas necessidades acadêmicas.",
      icon: <MessageSquare className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 2,
      title: "Análise e Proposta",
      description:
        "Nossa equipe analisará seu projeto e enviará uma proposta detalhada com prazo, escopo e investimento.",
      icon: <ClipboardList className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 3,
      title: "Acordo e Planejamento",
      description:
        "Após aprovação da proposta, definimos juntos o cronograma de desenvolvimento e os detalhes metodológicos.",
      icon: <Calendar className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 4,
      title: "Desenvolvimento",
      description:
        "Iniciamos o trabalho com atualizações regulares sobre o progresso e possibilidade de ajustes ao longo do processo.",
      icon: <FileCheck className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 5,
      title: "Revisão",
      description:
        "Após a conclusão, você recebe o trabalho para análise e pode solicitar ajustes conforme necessário.",
      icon: <Shield className="h-12 w-12 text-primary-600" />,
    },
    {
      id: 6,
      title: "Entrega Final",
      description:
        "Após sua aprovação, entregamos a versão final do trabalho e permanecemos disponíveis para suporte pós-entrega.",
      icon: <CheckCircle className="h-12 w-12 text-primary-600" />,
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
              Como Funciona Nosso Serviço
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Conheça o processo de desenvolvimento de pesquisas acadêmicas,
              desde o contato inicial até a entrega final.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn btn-accent">
                Conheça Nossos Serviços
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Nosso Processo em 6 Etapas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabalhamos de forma transparente e estruturada para garantir os
              melhores resultados para seu projeto acadêmico
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * step.id }}
                className="bg-gray-50 p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center w-12 h-12 bg-primary-100 text-primary-700 rounded-full mr-4 text-xl font-bold">
                    {step.id}
                  </div>
                  <div className="flex-shrink-0">{step.icon}</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                Nossa Equipe e Metodologia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Contamos com uma equipe multidisciplinar de pesquisadores,
                professores e especialistas com formação acadêmica avançada
                (mestrado e doutorado) em diversas áreas do conhecimento.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa metodologia de trabalho é baseada em:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Pesquisa bibliográfica atualizada em fontes confiáveis e
                    reconhecidas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Rigor metodológico adequado a cada área de conhecimento
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Comunicação constante com o cliente para alinhamento de
                    expectativas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Verificações de originalidade e qualidade em todas as
                    entregas
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Equipe de pesquisadores acadêmicos trabalhando"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment & Terms */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Investimento e Termos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Informações sobre pagamentos, prazos e garantias
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-soft"
            >
              <div className="mb-4">
                <Banknote className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Formas de Pagamento
              </h3>
              <p className="text-gray-600 mb-4">
                Aceitamos diversas formas de pagamento para sua conveniência e
                oferecemos flexibilidade nos planos de pagamento.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Cartão de crédito (até 12x)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Transferência bancária</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">PIX</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Boleto bancário</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-soft"
            >
              <div className="mb-4">
                <Calendar className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Prazos e Cronogramas
              </h3>
              <p className="text-gray-600 mb-4">
                Trabalhamos com prazos realistas e definidos junto ao cliente,
                sempre com transparência sobre o progresso.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Cronograma detalhado com marcos de entrega
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Atualizações periódicas sobre o progresso
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Entregas parciais para acompanhamento
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Possibilidade de ajustes de urgência
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg shadow-soft"
            >
              <div className="mb-4">
                <Shield className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Garantias e Confidencialidade
              </h3>
              <p className="text-gray-600 mb-4">
                Trabalhamos com total segurança e garantia de satisfação para
                nossos clientes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Contrato de confidencialidade
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Revisões gratuitas dentro do prazo contratual
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Garantia de originalidade e antiplágio
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Suporte técnico pós-entrega
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esclarecemos as principais dúvidas sobre nosso processo de
              trabalho
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
                    Como acompanho o progresso do meu projeto?
                  </h3>
                  <p className="text-gray-600">
                    Você receberá atualizações periódicas sobre o
                    desenvolvimento do seu projeto. Dependendo da complexidade,
                    podemos agendar reuniões online para discussão e ajustes.
                    Também disponibilizamos uma área do cliente para
                    acompanhamento.
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
                    E se eu não ficar satisfeito com o resultado?
                  </h3>
                  <p className="text-gray-600">
                    Oferecemos revisões gratuitas dentro do período contratual
                    para garantir sua satisfação. Caso haja alguma insatisfação,
                    trabalhamos juntos para ajustar o conteúdo conforme suas
                    necessidades e expectativas acadêmicas.
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
                    Quem são os profissionais que desenvolvem os trabalhos?
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipe é composta por mestres e doutores em diversas
                    áreas do conhecimento, com experiência acadêmica e
                    publicações científicas. Cada projeto é atribuído a um
                    especialista na área específica do tema.
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
                    Como é calculado o valor do serviço?
                  </h3>
                  <p className="text-gray-600">
                    O valor é calculado com base na complexidade do tema, nível
                    acadêmico (graduação, mestrado, doutorado), prazo de entrega
                    e número de páginas/palavras. Cada projeto recebe um
                    orçamento personalizado após análise inicial.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA with Contact Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                Pronto para Começar?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Entre em contato conosco hoje mesmo e dê o primeiro passo para
                um projeto acadêmico de sucesso.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Consulta inicial gratuita e sem compromisso
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Orçamento personalizado em até 24 horas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Atendimento por especialistas na sua área
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Comunicação clara e transparente em todo o processo
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
                title="Inicie Seu Projeto"
                subtitle="Preencha o formulário abaixo para começar a discutir seu projeto acadêmico."
                buttonText="Iniciar Projeto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
