import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HorizontalSkeleton = ({ className, height }) => {
  return (
    <div className="wrappper">
      <div className="container mx-auto">
        <Skeleton height={height} baseColor="rgb(248 252 255)" />
      </div>
    </div>
  );
};

export default HorizontalSkeleton;
