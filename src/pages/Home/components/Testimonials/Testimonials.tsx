import { CpiTag } from "../../../../components/cpiTag/CpiTag";
import "./Testimonials.scss";
import ReviewImage from "../../../../assets/images/stealing.png";
import StarIcon from "../../../../assets/icons/star.svg?react";

export const Testimonials = () => {
  return (
    <>
      <div className="testimonials-wrapper">
        <CpiTag index="03" label="TESTIMONIALS" />

        <div className="review-marquee-wrapper">
          <span>Built Confidence</span>
        </div>

        <div className="review-wrapper">
          <div className="review-images">
            <img src={ReviewImage} alt="Kid hitting ball" />
            <div className="review-stats">
              84
              <div className="rating">
                <StarIcon className="star-icon" />
                <StarIcon className="star-icon" />
                <StarIcon className="star-icon" />
                <StarIcon className="star-icon" />
                <StarIcon className="star-icon" />
                <span>4.9</span>
              </div>
            </div>
          </div>
          <div className="review">
            <p>
              “We’ve tried a few coaches over the years, but Swing Co. is different. Conner has a way of connecting with
              kids and breaking things down so they really get it. Our son’s swing has improved tremendously, and more
              importantly—he’s excited to go to practice again. Highly recommend!”
            </p>
            <div className="reviewer">
              <div className="initials">JA</div>
              <div className="info">
                <span className="name">Johnny Appleseed</span>
                <span className="team">Dayton Classics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
