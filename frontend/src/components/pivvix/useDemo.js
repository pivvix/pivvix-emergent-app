import { useState } from "react";

export const useDemo = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  return {
    demoOpen,
    openDemo: () => setDemoOpen(true),
    closeDemo: () => setDemoOpen(false),
  };
};
