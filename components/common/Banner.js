const Banner = ({ children }) => {
  return (
    <div className="bg-steelblue-shade-200">
      <div className="wrappper">
        <div className="container mx-auto py-12 text-center">{children}</div>
      </div>
    </div>
  );
};

export default Banner;
