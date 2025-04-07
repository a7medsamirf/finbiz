import SwiperInstance from "swiper";

export interface SwiperButtonProps {
  swiperRef: React.RefObject<SwiperInstance | null>; // Define the type for swiperRef
}

const NextButton = ({ swiperRef }: SwiperButtonProps) => {
  return (
    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition"
    >
      Next
    </button>
  );
};

export default NextButton;
