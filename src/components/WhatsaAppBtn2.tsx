import React from "react";

interface WhatsAppButtonProps {
  phoneNumber: string; // Ex: '5511999999999' (sem símbolos ou espaços)
  message?: string;
  btnText: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  btnText
}) => {
  const encodedMessage = encodeURIComponent(
    message || "Olá! Gostaria de mais informações."
  );
  const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 btn shadow-lg transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.004 2.004c-5.523 0-10 4.477-10 10 0 1.762.463 3.412 1.266 4.855l-1.336 4.878 5.009-1.313a9.943 9.943 0 004.994 1.325c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18c-1.527 0-3.008-.39-4.313-1.128l-.309-.176-2.973.78.788-2.864-.191-.315a7.938 7.938 0 01-1.22-4.297c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.078-5.615c-.225-.113-1.33-.656-1.537-.73-.206-.075-.357-.113-.507.112-.15.225-.582.73-.713.88-.131.15-.263.169-.488.056-.225-.113-.95-.35-1.81-1.117-.669-.597-1.121-1.334-1.252-1.56-.131-.225-.014-.347.099-.46.101-.101.225-.263.337-.394.112-.131.15-.225.225-.375.075-.15.037-.281-.019-.394-.056-.112-.507-1.225-.694-1.681-.182-.44-.366-.381-.507-.388l-.431-.007c-.15 0-.394.056-.6.281-.206.225-.787.769-.787 1.875s.806 2.175.918 2.325c.112.15 1.588 2.425 3.854 3.402.539.232.96.37 1.288.474.541.172 1.032.148 1.419.09.433-.065 1.33-.544 1.518-1.07.188-.525.188-.975.131-1.07-.056-.094-.206-.15-.431-.263z" />
      </svg>
      {btnText}
    </a>
  );
};

export default WhatsAppButton;
