import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Connect.css";
import axios from "axios";

const Connect = () => {
  const { t } = useTranslation();
  const [addEmail, setAddEmail] = useState("");
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

  const onChangeAddEmail = (e) => {
    setAddEmail(e.target.value);
  };

  const isValidEmail = (data) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data);
  };

  const onAddSubmit = async () => {
    // 이메일 유효성 검사
    if (!addEmail.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!isValidEmail(addEmail)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:80";
      const response = await axios.post(`${apiUrl}/addList`, {
        email: addEmail,
      });
      if (response.status === 200) {
        setAddEmail("");
        alert("성공적으로 구독하였습니다.");
      }
    } catch (e) {
      console.error(e);
      alert("이메일 등록 중 오류가 발생했습니다.");
    }
  };
  return (
    <div className="Conect_container">
      <div className="article">
        <div className="article_box1">
          <div className="title">
            <p>{t("connect.title")}</p>
          </div>
          <p>{t("connect.description")}</p>
        </div>
        <div className="article2">
          <div className="article_box2">
            <p>{t("connect.form.title")}</p>
            <div className="form_box">
              <form action="submit_url" method="get">
                <div className="form_flex">
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
                    <label htmlFor="phone">
                      {t("connect.form.phone.label")}
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="phone"
                      id="phone"
                      placeholder={t("connect.form.phone.placeholder")}
                      required
                    />
                  </div>
                </div>
                <div className="form_label">
                  <label htmlFor="name">{t("connect.form.name.label")}</label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t("connect.form.name.placeholder")}
                    required
                  />
                </div>
                <div className="form_label">
                  <label htmlFor="phone">{t("connect.form.phone.label")}</label>
                  <input
                    type="phone"
                    id="phone"
                    placeholder={t("connect.form.phone.placeholder")}
                    required
                  />
                </div>
                <div className="form_label">
                  <div>
                    <label htmlFor="email">
                      {t("connect.form.email.label")}
                    </label>
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
                    <label htmlFor="name">
                      {t("connect.form.message.label")}
                    </label>
                  </div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    id="message"
                    placeholder={t("connect.form.message.placeholder")}
                    rows={3}
                    required
                    maxLength={200}
                  />
                </div>
                <button type="submit" onClick={onSubmit}>
                  {t("connect.form.submit")}
                </button>
              </form>
            </div>
          </div>
          <div className="article_box2">
            <p>{t("connect.info.title")}</p>
            <div className="info_box">
              <div className="info_content">
                <div className="info_img">
                  <img src="/img/Conect_1.svg" alt="전화" />
                </div>
                <div className="info_text">
                  <p>{t("connect.info.phone.title")}</p>
                  <p>070-4571-7580</p>
                  <p>{t("connect.info.phone.time")}</p>
                </div>
              </div>
              <div className="info_content">
                <div className="info_img">
                  <img src="/img/Conect_2.svg" alt="이메일" />
                </div>
                <div className="info_text">
                  <p>{t("connect.info.email.title")}</p>
                  <p>creamoff2021@never.com</p>
                  <p>{t("connect.info.email.available")}</p>
                </div>
              </div>
              <div className="info_content">
                <div className="info_img">
                  <img src="/img/Conect_3.svg" alt="주소" />
                </div>
                <div className="info_text">
                  <p>{t("connect.info.address.title")}</p>
                  <p>{t("connect.info.address.location")}</p>
                  <p>{t("connect.info.address.postal")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article_box3">
          <div className="sns_text">
            <p>SNS</p>
            <p>{t("connect.sns.description")}</p>
          </div>
          <div className="sns_box">
            <div className="sns_content">
              <a
                href="https://www.instagram.com/talktail.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_4.svg" alt="인스타그램" />
                </div>
                <p className="sns_content_text">Instagram</p>
              </a>
            </div>
            <div className="sns_content">
              <a
                href="https://blog.naver.com/creamoff2021"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_7.svg" alt="네이버" />
                </div>
                <p className="sns_content_text">Naver</p>
              </a>
            </div>
            <div className="sns_content">
              <a
                href="https://www.linkedin.com/company/105303874/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_5.svg" alt="링크드인" />
                </div>
                <p className="sns_content_text">Linkedin</p>
              </a>
            </div>
            <div className="sns_content">
              <a
                href="https://youtube.com/@talktail.official?si=6VLmvA4ba12TcFn4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_6.svg" alt="유튜브" />
                </div>
                <p className="sns_content_text">YouTube</p>
              </a>
            </div>
            <div className="sns_content">
              <a
                href="https://pf.kakao.com/_CSDxln"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img src="/img/Conect_8.svg" alt="카카오톡" />
                </div>
                <p className="sns_content_text">Kakao</p>
              </a>
            </div>
          </div>
          <div className="newsletter_box">
            <p>{t("connect.newsletter.title")}</p>
            <p>{t("connect.newsletter.description")}</p>
            <div className="newsletter_form">
              <input
                type="email"
                value={addEmail}
                placeholder={t("connect.newsletter.placeholder")}
                onChange={onChangeAddEmail}
              />
              <button type="submit" onClick={onAddSubmit}>
                {t("connect.newsletter.button")}1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
