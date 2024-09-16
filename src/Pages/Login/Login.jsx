import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0, scale: 0.8 }} // Start from above the screen, smaller scale, and transparent
      animate={{ y: 0, opacity: 1, scale: 1 }} // Animate to original position, full opacity, and scale up
      exit={{ y: 300, opacity: 0, scale: 1.2 }} // Exit by moving down, fading out, and scaling up
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <LoginForm />
    </motion.div>
  );
}
