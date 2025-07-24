import { FC, ReactElement, ReactNode } from "react";
import { Box } from "lucide-react";

const CardComponent: FC<{ children: ReactNode }> = ({ children }) => (
  <Box className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
    <Box className="px-4 py-5 sm:p-6">{children}</Box>
    <Box className="px-4 py-4 sm:px-6">{children}</Box>
  </Box>
);

export default CardComponent;
