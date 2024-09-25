import React from "react";
import LoginForm from "../../../Components/Common/LoginForm/LoginForm";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly translated down
      animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in its original position
      exit={{ opacity: 0, y: 20 }} // State when the component exits (optional)
      transition={{ duration: 1 }} // Duration of the animation
    >
      <LoginForm />
    </motion.div>
  );
}
