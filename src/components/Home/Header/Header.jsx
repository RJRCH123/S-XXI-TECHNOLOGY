import Slider from "../Slider/Slider";
import ItemListContainer from "./ItemListContainer";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row my-3">
        <Slider/>
        <ItemListContainer/>
      </div>
    </div>
  );
};

export default Header;
