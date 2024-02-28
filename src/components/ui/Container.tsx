import { ReactNode } from "react";
import cn from "../../utils/cn";

type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div
      className={cn("w-full max-w-[1230px]  px-[20px]  mx-auto ", className)}
    >
      {children}
    </div>
  );
};

export default Container;
