"use client";
import { useState } from "react";

const UseFaqToggle = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return {
    openIndex,
    toggleFaq,
  };
};

export default UseFaqToggle;
