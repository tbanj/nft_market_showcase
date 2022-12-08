import React from "react";
import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  return (
    <div className={` ${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the Source Code
          </h1>
          <p className={`${styles.pText}  ${styles.blackText}`}>
            Get the Full source code on Github
          </p>
          <p className={`${styles.pText}  ${styles.blackText}`}>
            Kindly give star the project on Github
          </p>
        </div>

        <button
          onClick={() =>
            window.open("https://github.com/tbanj/nft_marketplace", "_blank")
          }
          className={styles.btnPrimary}
        >
          Source Code
        </button>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="scene-icon"
            className={styles.fullImgs}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
