import { leftIcon, rightIcon } from "../icons";
import HTwo from "./HTwo";
import SubHeader from "./SubHeader";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

function TeachersSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  return (
    <div className=" mt-[234px]">
      <SubHeader innerText={"Key Persons"} />
      <div className="flex justify-between">
        <HTwo innerText={"Meet our teachers"} />
        <div className="flex space-x-[30px]">
          <LeftOrRightBtn
            isRight={false}
            isDisabled={isPrevDisabled}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
          <LeftOrRightBtn
            isRight={true}
            isDisabled={isNextDisabled}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
        </div>
      </div>
      <Carousel
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        setIsPrevDisabled={setIsPrevDisabled}
        setIsNextDisabled={setIsNextDisabled}
      />
    </div>
  );
}

export default TeachersSection;

function Carousel(props) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={70}
      slidesPerGroup={3}
      loop={false}
      onTransitionEnd={(e) => {
        if (e.isBeginning == true) {
          props.setIsPrevDisabled(true);
        } else {
          props.setIsPrevDisabled(false);
        }

        if (e.isEnd == true) {
          props.setIsNextDisabled(true);
        } else {
          props.setIsNextDisabled(false);
        }
      }}
      loopFillGroupWithBlank={true}
      navigation={{
        prevEl: props.navigationPrevRef.current,
        nextEl: props.navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = props.navigationPrevRef.current;
        swiper.params.navigation.nextEl = props.navigationNextRef.current;
      }}
      modules={[Pagination, Navigation]}
      className=" mt-[60px]"
    >
      <SwiperSlide>
        <TutorCard
          full_name={"Christian Howard"}
          profile_image={"/tutor1.png"}
          flag_image={"/italy.png"}
          citizen={"Italian Teacher"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          full_name={"Sandra Wilson"}
          profile_image={"/tutor2.png"}
          flag_image={"/spain.png"}
          citizen={"Spanish Teacher"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          full_name={"Jimmy Cooper"}
          profile_image={"/tutor3.png"}
          flag_image={"/uk.png"}
          citizen={"British Teacher"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          full_name={"Martin Watson"}
          profile_image={"/tutor4.png"}
          flag_image={"/spain.png"}
          citizen={"Spanish Teacher"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          full_name={"Henry Johnson"}
          profile_image={"/tutor5.png"}
          flag_image={"/uk.png"}
          citizen={"British Teacher"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          full_name={"Patrick Simpson"}
          profile_image={"/tutor6.jpg"}
          flag_image={"/uk.png"}
          citizen={"British Teacher"}
        />
      </SwiperSlide>
    </Swiper>
  );
}

function TutorCard(props) {
  return (
    <div>
      <img
        className="mb-[40px] w-full aspect-1/1 rounded-[60px]"
        src={props.profile_image}
      />
      <span className="text-myBlack text-[24px] ">{props.full_name}</span>
      <div className="flex items-center mt-[16px]">
        <img src={props.flag_image} />
        <span>{props.citizen}</span>
      </div>
    </div>
  );
}

function LeftOrRightBtn(props) {
  return (
    <button
      ref={props.isRight ? props.navigationNextRef : props.navigationPrevRef}
      className={`${
        !props.isDisabled
          ? "bg-myPurple"
          : "bg-transparent border border-[#E8E8F6]"
      } w-[56px] h-[56px] flex justify-center items-center rounded-full`}
    >
      {props.isRight ? rightIcon : leftIcon}
    </button>
  );
}
