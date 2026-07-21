import type { RequiredChildrenProperties } from "../../";

/**
 * A basic element to center content on the viewport.
 * @param root0
 * @param root0.children
 */
export const Container: React.FC<RequiredChildrenProperties> = ({
  children,
}: RequiredChildrenProperties) => {
  return <div className="container">{children}</div>;
};
