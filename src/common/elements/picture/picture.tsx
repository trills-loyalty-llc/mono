export const Picture: React.FC = () => {
  return (
    <picture>
      <source
        media="(min-width: 576px)"
        srcSet=""
        type="image/svg+xml"
      ></source>
      <source
        media="(min-width: 768px)"
        srcSet=""
        type="image/svg+xml"
      ></source>
      <source
        media="(min-width: 992px)"
        srcSet=""
        type="image/svg+xml"
      ></source>
      <img alt="" className="img-fluid img-thumbnail" src=""></img>
    </picture>
  );
};
