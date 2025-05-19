import React, { useState, ChangeEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType?: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Entre em Contato",
  subtitle = "Preencha o formulário abaixo para receber mais informações.",
  buttonText = "Enviar Mensagem",
}) => {
  const [formattedPhone, setFormattedPhone] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // In a real application, this would send the data to a server
      console.log("Form submitted:", data);

      await emailjs.send(
        "service_h634ezr", // ex: service id 'service_abc123'
        "template_jfokwdp", // ex: template id 'template_xyz789'
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          serviceType: data.serviceType,
          message: data.message,
        },
        "Gq91Q6Ulwxt5Py5tI" // api public key ex: 'uDgA1bCdEfGHijkLm'
      );

      // Reset the form after successful submission
      reset();
      setFormattedPhone('');


      // Show success message (you could use a toast notification here)
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );
    }
  };

  const formatPhoneNumber = (
    value: string,
    cursorPos: number
  ): [string, number] => {
    const numericValue = value.replace(/\D/g, "");
    let newCursorPos = cursorPos;

    // Aplica a formatação
    const parts = [];
    if (numericValue.length > 0) parts.push(numericValue.slice(0, 2));
    if (numericValue.length > 2) parts.push(numericValue.slice(2, 7));
    if (numericValue.length > 7) parts.push(numericValue.slice(7, 11));

    let formatted = "";
    if (parts.length > 0) formatted += `(${parts[0] || ""}`;
    if (parts.length > 1) formatted += `) ${parts[1] || ""}`;
    if (parts.length > 2) formatted += `-${parts[2] || ""}`;

    // Ajusta a posição do cursor
    const hasAddedParenthesis =
      formatted.length > 0 && !formattedPhone.includes("(") && cursorPos >= 1;
    const hasAddedSpace =
      formatted.length > 3 && !formattedPhone.includes(") ") && cursorPos >= 3;
    const hasAddedHyphen =
      formatted.length > 9 && !formattedPhone.includes("-") && cursorPos >= 9;

    if (hasAddedParenthesis) newCursorPos++;
    if (hasAddedSpace) newCursorPos += 2;
    if (hasAddedHyphen) newCursorPos++;

    return [formatted, Math.min(newCursorPos, formatted.length)];
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const [value, cursorPos] = formatPhoneNumber(
      input.value,
      input.selectionStart || 0
    );

    setFormattedPhone(value);

    // Atualiza a posição do cursor após renderização
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.selectionStart = cursorPos;
        inputRef.current.selectionEnd = cursorPos;
      }
    }, 0);
  };

  // Registra o input com React Hook Form
  const { ref, ...registerProps } = register("phone", {
    required: "Telefone é obrigatório",
    pattern: {
      value: /^\(\d{2}\) \d{5}-\d{4}$/,
      message: "Formato inválido. Use (00) 00000-0000",
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-soft p-6 md:p-8"
    >
      {title && (
        <h3 className="text-2xl font-serif font-bold text-primary-800 mb-2">
          {title}
        </h3>
      )}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="form-label">
            Nome Completo
          </label>
          <input
            id="name"
            type="text"
            className="form-input border rounded-md p-2"
            placeholder="Seu nome completo"
            {...register("name", {
              required: "Nome é obrigatório",
              minLength: {
                value: 3,
                message: "Nome deve ter pelo menos 3 caracteres",
              },
            })}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input border rounded-md p-2"
            placeholder="seu.email@exemplo.com"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Endereço de email inválido",
              },
            })}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Telefone
          </label>
          <input
            id="phone"
            type="tel"
            className="form-input border rounded-md p-2"
            placeholder="(00) 00000-0000"
            value={formattedPhone}
            {...registerProps}
            ref={(e: HTMLInputElement | null) => {
              ref(e);
              inputRef.current = e;
            }}
            onChange={handlePhoneChange}
          />
          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="serviceType" className="form-label">
            Tipo de Serviço
          </label>
          <select
            id="serviceType"
            className="form-input border rounded-md p-2"
            {...register("serviceType")}
          >
            <option value="">Selecione um serviço</option>
            <option value="tcc">Trabalho de Conclusão de Curso (TCC)</option>
            <option value="monografia">Monografia</option>
            <option value="artigo">Artigo Científico</option>
            <option value="dissertation">Dissertação</option>
            <option value="thesis">Tese</option>
            <option value="research">Pesquisa Acadêmica</option>
            <option value="other">Outro</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className="form-input border rounded-md p-2"
            placeholder="Descreva seu projeto ou dúvida..."
            {...register("message", {
              required: "Mensagem é obrigatória",
              minLength: {
                value: 10,
                message: "Mensagem deve ter pelo menos 10 caracteres",
              },
            })}
          ></textarea>
          {errors.message && (
            <p className="form-error">{errors.message.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Enviando...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              {buttonText} <Send className="ml-2 h-4 w-4" />
            </span>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
