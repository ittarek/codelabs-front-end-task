import { Outlet } from "react-router-dom";
import NavigationBar from "../../Shared-componets/Header/NavigationBar";
import Footer from "../../Shared-componets/Footer/Footer";

const MainLayOut = () => {



  return (
    <>
      <NavigationBar></NavigationBar>
    
        <Outlet></Outlet>{" "}
   
      <Footer></Footer>
    </>
  );
};

export default MainLayOut;
