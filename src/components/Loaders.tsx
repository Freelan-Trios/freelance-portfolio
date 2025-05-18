import { LoadersProps } from "../@types/component";


const Loaders = ({ isVisible }: LoadersProps) => {
  return isVisible ? (
    <div className="loaderParent">
      <div className="loader"></div>
    </div>
  ) : null;
};

export default Loaders;
