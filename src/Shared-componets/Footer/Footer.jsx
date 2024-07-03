import "./footer.css";
import Container from "./../Container/Container";
import footerImage from "../../assets/humen-image/logoLight.png";
import { Link } from "react-router-dom";
import fb from "../../assets/groupImage/fb.png";
import insta from "../../assets/groupImage/insta.png";
import linkedIn from "../../assets/groupImage/in.png";
import youtube from "../../assets/groupImage/youtube.png"
const Footer = () => {
  return (
    <footer className="bg-[#020043]">
      <Container>
        <section className="lg:flex justify-between items-center py-24">
          {/* div 1 */}
          <div className="text-white">
            <img src={footerImage} alt="" />
            <p>123 Main Street Anytown, USA Postal Code: 12345</p>

            <p>Support:support@oyolloo.com (Available : 10:00am to 07:00pm)</p>
          </div>
          {/* menu div 1 */}

          <div className="flex flex-col text-white space-y-4 ">
            <Link to="" className="  text-sm font-medium">
              Home
            </Link>
            <Link to="" className="  text-sm font-medium">
              About us
            </Link>
            <Link to="" className=" text-sm font-medium ">
              Success Page
            </Link>
            <Link to="" className=" text-sm font-medium ">
              Terms and condition
            </Link>
          </div>
          {/* menu div 2 */}
          <div className="flex flex-col text-white space-y-4 ">
            <Link to="" className="  text-sm font-medium">
              Service
            </Link>
            <Link to="" className="  text-sm font-medium">
              Scheduling
            </Link>
            <Link to="" className=" text-sm font-medium ">
              Contact Us
            </Link>
            <Link to="" className=" text-sm font-medium ">
              Patient Portal
            </Link>
          </div>
          {/* social  */}
          <div className="text-white">
            <h1>Follow Us</h1>
            <div className="flex items-center gap-3">
              <img src={fb} alt="" />

              <img src={insta} alt="" />
              <img src={linkedIn} alt="" />
              <img src={youtube} alt="" />
            </div>

            <p>@docplus 2024</p>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
