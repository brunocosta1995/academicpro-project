import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = '5511965849829';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de mais informações sobre seus serviços acadêmicos.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-medium"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
};

export default WhatsAppButton;