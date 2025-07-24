import { Box } from "lucide-react";
import { FC, ReactNode } from "react";

const CardComponent: FC<{ children: ReactNode }> = ({ children }) => (
  <Box className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
    <div className="px-4 py-5 sm:px-6">{children}</div>
    <div className="px-4 py-5 sm:p-6">{children}</div>
  </Box>
);

export default CardComponent;
