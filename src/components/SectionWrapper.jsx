import React from "react";

import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} 
          ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}
    >
      <div
        className={`flex items-center 
          ${reverse ? styles.boxReverseClass : styles.boxClass}
          ${reverse ? styles.textRight : styles.textLeft}
          w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
            ${reverse ? "fadeRightMini" : "fadeLeftMini"}
            `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>

          <p
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
          >
            {description}
          </p>
          {showBtn && (
            <section className="flex flex-row">
              <div className="mr-3">
                <Button
                  assetUrl={assets.expo}
                  link="https://expo.dev/@tbanj/tbanj_market"
                  data={{ name: "View it on", storeName: "EXPO Store" }}
                />
              </div>

              <Button
                assetUrl={assets.googleDrive}
                link="https://drive.google.com/file/d/1Ea4BVjZRI7NmqzHLlEHtXaS49QUomleO/view?usp=sharing"
                data={{ name: "View it on", storeName: "Google Drive" }}
              />
            </section>
          )}
        </div>

        <div className={`${styles.flexCenter} flex-1 p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
              ${reverse ? "fadeLeftMini" : "fadeRightMini"}
              ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
