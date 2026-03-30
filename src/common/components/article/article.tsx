export const Article: React.FC<ArticleProperties> = ({
  icon,
  title,
  tags,
}: ArticleProperties) => {
  const date = new Date();

  const index = 1;
  const month = date.getMonth() + index;

  return (
    <article className="card bg-primary mb-3">
      <div className="card-header d-flex align-items-center justify-content-between">
        <h2 className="card-title mb-0">{title}</h2>
        <div className="d-none d-md-flex">
          <i className={`bi ${icon} fs-2`}></i>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-subtitle text-body-secondary mb-2 h6">
          {month}-{date.getDate()}-{date.getFullYear()}
        </h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-light">Continue</button>
          <div className="d-none d-md-flex justify-content-end align-items-center ">
            {tags.map((tag, index) => {
              return (
                <span key={index} className="badge border border-white mx-1">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

interface ArticleProperties {
  icon: string;
  tags: Array<string>;
  title: string;
}
