import "./testimonial.css";
import Container from "./../../Shared-componets/Container/Container";
import ReactStars from "react-stars";
import user1 from "../../assets/humen-image/user1.jpeg"
import user2 from "../../assets/humen-image/user2.jpeg"
import user3 from "../../assets/humen-image/user3.jpeg"
const Testimonial = () => {
  return (
    <Container>
      <section className="my-[150px]">
        <div className="lg:text-left text-center mb-11">
          <button className="border border-[#343268] rounded-full p-3 " style={{fontFamily:"inter" , fontWeight:"400", fontSize:"16px"}}>
            Testimonial
          </button>
          <h1 className="w-100 lg:text-[36px] text-2xl"
            style={{
              fontFamily: "inter",
              fontWeight: "600",
          
              lineHeight: "54px",
            }}
          >
            What they say about us
          </h1>
        </div>

        <div className="testimonial lg:flex justify-between items-center gap-3 space-y-6 lg:space-y-0">
          {/* div 1 */}
          <div className="div ">
            <h1>Expertise and Compassion Combined</h1>
            <p>
              I can,t thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex gap-3 items-center">
              <img src={user1} alt="" />
              <div className="">
                <h3>
                  Sarah D,
                  <span>IT Professional</span>
                </h3>
                <span>
                  <ReactStars
                    count={5}
                    edit={false}
                    size={20}
                    color1={"#ffd700"}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* div 2 */}
          <div className="div">
            <h1>Life-Saving Care, Life-Changing Experience</h1>
            <p>
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div
              className="flex gap-6 items-center
            "
            >
              <img src={user2} alt="" />
              <div>
                <h3>
                  Michael R,
                  <span> Business Executive</span>
                </h3>
                <span>
                  {" "}
                  <ReactStars
                    count={4}
                    edit={false}
                    size={20}
                    color1={"#ffd700"}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* div 3 */}
          <div className="div">
            <h1>A Partner in Health and Wellness</h1>
            <p>
              As a busy professional, I appreciate the convenience and quality
              of care I receive at [Healthcare Provider Name]. From telemedicine
              consultations to routine check-ups, they've become my trusted
              partner in health and
            </p>
            <div className="flex gap-6 items-center">
              <img src={user3} alt="" />
              <div>
                <h3>
                  David S,
                  <span> Lawyer</span>
                </h3>
                <span>
                  {" "}
                  <ReactStars
                    count={5}
                    edit={false}
                    size={20}
                    color1={"#ffd700"}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Testimonial;
