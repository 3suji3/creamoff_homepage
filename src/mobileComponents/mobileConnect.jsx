import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./styles/mobileConnect.css";
import Partner from "../components/partner/Partner";

const MobileConnect = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:80";
      const response = await axios.post(`${apiUrl}/send`, {
        name,
        phone,
        email,
        inquiry,
        message,
      });
      if (response.status === 200) {
        setName("");
        setPhone("");
        setEmail("");
        setInquiry("");
        setMessage("");
      }
      alert("성공적으로 문의하였습니다.");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="mobile_connect_section">
      <div className="mobile_title">Connect</div>
      <p>{t("connect.subtitle")}</p>
      <div className="form_container">
        <form action="submit_url" method="get">
          <div className="form_label">
            <label htmlFor="name">{t("connect.form.name.label")}</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder={t("connect.form.name.placeholder")}
              required
            />
          </div>
          <div className="form_label">
            <label htmlFor="phone">{t("connect.form.phone.label")}</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              id="phone"
              placeholder={t("connect.form.phone.placeholder")}
              required
            />
          </div>
          <div className="form_label">
            <div>
              <label htmlFor="email">{t("connect.form.email.label")}</label>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder={t("connect.form.email.placeholder")}
              required
            />
          </div>
          <div className="form_label">
            <div>
              <label>{t("connect.form.inquiry.label")}</label>
            </div>
            <select
              name="inquiry"
              id="inquiry"
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
            >
              <option hidden disabled value="" selected>
                {t("connect.form.inquiry.options.default")}
              </option>
              <option value="product">
                {t("connect.form.inquiry.options.product")}
              </option>
              <option value="partnership">
                {t("connect.form.inquiry.options.partnership")}
              </option>
              <option value="other">
                {t("connect.form.inquiry.options.other")}
              </option>
            </select>
          </div>
          <div className="message_box">
            <div>
              <label htmlFor="name">{t("connect.form.message.label")}</label>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              id="message"
              placeholder={t("connect.form.message.placeholder")}
              rows={2}
              required
            />
          </div>
          <button type="submit" onClick={onSubmit}>
            {t("connect.form.submit")}
          </button>
        </form>
      </div>
      <p>{t("connect.sns.subtitle")}</p>
      <div className="sns_container">
        <a
          href="https://www.instagram.com/talktail.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sns_box">
            <img src="./img/Conect_4.svg" alt="instagrem" />
          </div>
        </a>
        <a
          href="https://blog.naver.com/creamoff2021"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sns_box">
            <img src="./img/Conect_7.svg" alt="naver" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/105303874/admin/dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sns_box">
            <img src="./img/Conect_5.svg" alt="linkedin" />
          </div>
        </a>
        <a
          href="https://youtube.com/@talktail.official?si=6VLmvA4ba12TcFn4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sns_box">
            <img src="./img/Conect_6.svg" alt="youtube" />
          </div>
        </a>
        <a
          href="https://pf.kakao.com/_CSDxln"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="sns_box">
            <img src="./img/Conect_8.svg" alt="kakaotalk" />
          </div>
        </a>
      </div>
      <Partner />
    </div>
  );
};

export default MobileConnect;
