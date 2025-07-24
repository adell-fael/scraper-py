import { Box } from "lucide-react";
import { FC, ReactNode } from "react";

const CardContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <Box className="overflow-hidden bg-gray-50 sm:rounded-lg">
    <div className="px-4 py-5 sm:p-6">{children}</div>
  </Box>
);

export default CardContainer;
