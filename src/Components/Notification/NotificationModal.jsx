import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../Styles/Notification.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
export const NotificationModal = ({ openModal, HandleModal }) => {
  const data = [
    {
      img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
      title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Morem ipsum dolor sit amet, consectetur .",
      day: "yesterday",
      time: "10:30 AM",
    },
    {
      img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
      title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Morem ipsum dolor sit amet, consectetur .",
      day: "yesterday",
      time: "10:30 AM",
    },
    {
      img: "https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=ImgDet&rs=1",
      title: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
      desc: "Morem ipsum dolor sit amet, consectetur .",
      day: "yesterday",
      time: "10:30 AM",
    },
  ];
  return (
    <div className={openModal ? styles.modalVisible : styles.modal}>
      <div className={styles.ModalMainDiv}>
        <AiOutlineClose
          onClick={HandleModal}
          size={25}
          className={styles.CloseIcon}
        />
        <div className={styles.titleDiv}>
          <h1>Notification</h1>
          <BsThreeDotsVertical size={25} />
        </div>
        <hr style={{ height: "3px", background: "black" }} />
        <p>Today's</p>
        {data.map((ele) => (
          <>
            <div className={styles.NotificationDiv}>
              <div>
                <img src={ele.img} alt="img" />
              </div>
              <div>
                <h1>{ele.title}</h1>
                <p>{ele.desc}</p>
                <div>
                  <p>{ele.day}</p>
                  <span className={styles.Time}>{ele.time}</span>
                </div>
              </div>
            </div>
            <hr style={{ height: "2px", background: "grey" }} />
          </>
        ))}
      </div>
    </div>
  );
};
