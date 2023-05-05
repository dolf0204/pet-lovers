import { FC } from "react";
import "./DogDescription.less";

export const DogDescription: FC = () => {
  return (
    <div className="dog-description">
      <h2>The dog</h2>
      <p>
        Domestic dogs have been companions to people for more than 15,000 years.
        There are more than 400 different breeds of dogs. PAWS or your local
        animal shelter has a wide variety of breeds available for adoption. The
        most popular types are the non-pedigree. They are extra special because
        they are one-of-a-kind!
      </p>
      <p>
        In general, small dogs live longer than large dogs. Small dogs such as
        terriers may live 20 years. Giant dogs like Great Danes may live eight
        years. The average lifespan for a mixed breed dog is 13 to 14 years. By
        making sure dogs have good food, regular veterinary care, shelter and a
        loving family, they will live longer, healthier lives.
      </p>
    </div>
  );
};
