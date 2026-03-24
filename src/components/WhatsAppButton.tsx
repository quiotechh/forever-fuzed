"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = "16479019915";
const WHATSAPP_MESSAGE = "Hi! I'd love to learn more about your event planning services.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.18 }}
            className="bg-white text-[#3a2e2a] font-lato text-[10px] tracking-[0.15em] uppercase px-4 py-2 shadow-lg border border-[#ede6df] whitespace-nowrap pointer-events-none"
          >
            Chat on WhatsApp
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/40"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

        {/* WhatsApp icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white relative z-10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.737 5.474 2.027 7.774L0 32l8.469-2.001A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.24 13.24 0 01-6.749-1.843l-.484-.287-5.026 1.187 1.254-4.896-.316-.502A13.235 13.235 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.873c-.398-.2-2.355-1.163-2.72-1.295-.365-.133-.63-.2-.896.2-.265.397-1.03 1.295-1.262 1.562-.233.265-.464.298-.862.1-.398-.2-1.681-.62-3.202-1.978-1.183-1.057-1.982-2.362-2.214-2.76-.232-.397-.025-.612.174-.81.179-.177.398-.464.598-.696.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.2-.896-2.162-1.228-2.96-.323-.776-.65-.67-.896-.683l-.763-.013c-.265 0-.696.1-1.061.497-.365.398-1.395 1.362-1.395 3.322 0 1.96 1.428 3.853 1.627 4.118.2.265 2.81 4.29 6.81 6.015.952.41 1.695.655 2.275.839.956.304 1.826.261 2.514.158.767-.114 2.355-.963 2.687-1.894.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.465z" />
        </svg>
      </motion.a>
    </div>
  );
}
