import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Clock, Book } from "lucide-react";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsaAppBtn2";
import depoimento1 from "../assets/imgs/depoimento1.jpeg";
import depoimento2 from "../assets/imgs/depoimento2.jpeg";
import depoimento3 from "../assets/imgs/depoimento3.jpeg";
import depoimento4 from "../assets/imgs/depoimento4.jpeg";
import depoimento5 from "../assets/imgs/depoimento5.jpeg";
import depoimento6 from "../assets/imgs/depoimento6.jpeg";
import depoimento7 from "../assets/imgs/depoimento7.jpeg";
import depoimento8 from "../assets/imgs/depoimento8.jpeg";

const HomePage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
                Excelência em Pesquisa Acadêmica
              </h1>
              <p className="text-xl text-primary-600 mb-8">
                Ajudamos estudantes e pesquisadores a desenvolverem pesquisas
                acadêmicas de alta qualidade, com metodologia rigorosa e
                resultados relevantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn btn-accent text-white">
                  Nossos Serviços
                </Link>
                <Link
                  to="/how-it-works"
                  className="btn bg-gray-100 text-primary-700 hover:bg-gray-200"
                >
                  Como Funciona
                </Link>
                <WhatsAppButton
                  btnText="Fale Conosco"
                  phoneNumber="5511965849829"
                  message="Olá! Gostaria de mais informações sobre seus serviços acadêmicos."
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Estudantes trabalhando em pesquisa acadêmica"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Por Que Escolher Nossos Serviços?
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Oferecemos suporte completo para desenvolvimento de pesquisas
              acadêmicas com qualidade e excelência
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
            >
              <Award className="h-12 w-12 text-secondary-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Qualidade Garantida
              </h3>
              <p className="text-primary-600">
                Pesquisas desenvolvidas por profissionais com experiência
                acadêmica e alto nível de qualificação.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
            >
              <CheckCircle className="h-12 w-12 text-secondary-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Rigor Metodológico
              </h3>
              <p className="text-primary-600">
                Metodologias adequadas e atualizadas, seguindo os padrões
                acadêmicos mais exigentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
            >
              <Clock className="h-12 w-12 text-secondary-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Prazos Cumpridos
              </h3>
              <p className="text-primary-600">
                Entregas pontuais e acompanhamento constante do desenvolvimento
                do seu projeto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
            >
              <Book className="h-12 w-12 text-secondary-600 mb-4" />
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Conteúdo Original
              </h3>
              <p className="text-primary-600">
                Pesquisas e textos originais, desenvolvidos especificamente para
                as necessidades do seu projeto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Nossos Serviços Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma variedade de serviços para ajudar em todas as
              etapas da sua pesquisa acadêmica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <img
                  src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Trabalho de Conclusão de Curso"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                TCC e Monografias
              </h3>
              <p className="text-gray-600 mb-4">
                Desenvolvimento completo ou parcial de trabalhos de conclusão de
                curso e monografias em diversas áreas do conhecimento.
              </p>
              <Link
                to="/services"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Saiba mais →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <img
                  src="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Artigos Científicos"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Artigos Científicos
              </h3>
              <p className="text-gray-600 mb-4">
                Produção de artigos para periódicos acadêmicos nacionais e
                internacionais, seguindo as normas específicas de cada
                publicação.
              </p>
              <Link
                to="/services"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Saiba mais →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <img
                  src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Dissertações e Teses"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                Dissertações e Teses
              </h3>
              <p className="text-gray-600 mb-4">
                Apoio metodológico, revisão e desenvolvimento de dissertações de
                mestrado e teses de doutorado com alto rigor acadêmico.
              </p>
              <Link
                to="/services"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Saiba mais →
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              Ver Todos os Serviços
            </Link>
            <WhatsAppButton
              btnText="Faça o Orçamento Agora Mesmo"
              phoneNumber="5511965849829"
              message="Olá! Gostaria de mais informações sobre seus serviços acadêmicos."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-16 bg-white">
        <div className="container-custom">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a experiência de quem já utilizou nossos serviços
              acadêmicos
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 justify-items-center">
            <img
              className="rounded-md border-2 border-lime-500"
              src={depoimento1}
              alt="depoimento"
            />
            <img
              className="rounded-md border-2 border-lime-500"
              src={depoimento2}
              alt="depoimento"
            />
            <img
              className="rounded-md border-2 border-lime-500"
              src={depoimento3}
              alt="depoimento"
            />
            <img
              className="rounded-md border-2 border-lime-500"
              src={depoimento4}
              alt="depoimento"
            />
            <img
              className="rounded-md border-2 border-lime-500"
              src={depoimento5}
              alt="depoimento"
            />
            <img
              className="rounded-md border-2 border-lime-500"
              src={depoimento6}
              alt="depoimento"
            />
            <img
              className="rounded-md border-2 border-lime-500"
              src={depoimento7}
              alt="depoimento"
            />
            <img
              className="rounded-md border-2 border-lime-500"
              src={depoimento8}
              alt="depoimento"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center">
      <WhatsAppButton
        btnText="Faça o Orçamento Agora Mesmo"
        phoneNumber="5511965849829"
        message="Olá! Gostaria de mais informações sobre seus serviços acadêmicos."
      />
      </div>

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
                Pronto para Iniciar Sua Pesquisa Acadêmica?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Entre em contato conosco hoje mesmo e descubra como podemos
                ajudar a tornar seu projeto acadêmico um sucesso.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Equipe de especialistas em diversas áreas acadêmicas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Metodologia rigorosa e conteúdo original
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Acompanhamento personalizado em todas as etapas
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Garantia de confidencialidade e qualidade
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
                title="Solicite uma Consulta"
                subtitle="Preencha o formulário e entraremos em contato para discutir seu projeto acadêmico."
                buttonText="Solicitar Consulta"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
