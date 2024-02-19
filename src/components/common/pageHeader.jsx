const PageHeader = ({ title, description }) => {
  return (
    <>
      <div className="row text-start" >
        <div className="col-12">
          <h1>{title}</h1>
        </div>
        {description && <div className="col-12">{description}</div>}
      </div>
      <hr/>
    </>
  );
};

export default PageHeader;
