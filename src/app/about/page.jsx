import React from "react";
import styles from "./about.module.scss";
const AboutPage = () => {
    return (
        <div>
            <div className={styles.download}>
                <div className={styles.name_logo_style}>
                    <img src="md/white_md.jpeg"></img>
                </div>
                <div className={styles.second_line}>developer / designer</div>
                <div className={styles.btn_set}>
                    <button>DOWNLOAD RESUME</button>
                    <button>DOWNLOAD COVER LETTER</button>
                </div>

                {/* <Button>Default Button</Button> */}

                {/* <FloatButton
                        icon={<FileTextOutlined />}
                        description="DOWNLOAD CV"
                        shape="square"
                        style={{
                            width: 120,
                            right: 24,
                        }}
                    /> */}
            </div>
        </div>
    );
};
export default AboutPage;
