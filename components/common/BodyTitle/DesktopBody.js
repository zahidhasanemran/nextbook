const DesktopBody = ({
  text,
  display = "block",
  color = "text-black",
  extraclass = "",
}) => {
  return (
    <h6
      className={`font-dm text-sm font-normal leading-7 lg:text-lg ${display} ${color} ${extraclass}`}
    >
      {text}
    </h6>
  );
};

export default DesktopBody;
