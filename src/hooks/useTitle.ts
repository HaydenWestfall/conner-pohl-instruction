import { useEffect } from "react";

export const useTitle = (title?: string) => {
  useEffect(() => {
    document.title = `${title} - Conner Pohl Instruction`;
  }, [title]);

  return null;
};
