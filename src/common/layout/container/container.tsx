import { RequiredChildrenProperties } from "../../";

export const Container: React.FC<RequiredChildrenProperties> = ({
  children,
}: RequiredChildrenProperties) => {
  return <div className="container">{children}</div>;
};
