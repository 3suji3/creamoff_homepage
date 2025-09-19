import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/mobileConnect.css";
import Partner from "../components/partner/Partner";

const MobileConnect = () => {
  const { t } = useTranslation();
  return (
    <div className="mobile_connect_section">
      <div className="mobile_title">Connect</div>
      <p>신뢰를 바탕으로 이어지는 문의</p>
      <div className="form_container">
        <form action="submit_url" method="get">
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
              <label htmlFor="email">{t("connect.form.email.label")}</label>
            </div>
            <input
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
            <select name="inquiry" id="inquiry">
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
              type="text"
              id="message"
              placeholder={t("connect.form.message.placeholder")}
              rows={2}
              required
            />
          </div>
          <button type="submit">{t("connect.form.submit")}</button>
        </form>
      </div>
      <p>다양한 채널을 통한 소통과 소식</p>
      <div className="sns_container">
        <div className="sns_box">
          <img src="./img/Conect_4.svg" alt="instagrem" />
        </div>
        <div className="sns_box">
          <img src="./img/Conect_7.svg" alt="naver" />
        </div>
        <div className="sns_box">
          <img src="./img/Conect_5.svg" alt="linkedin" />
        </div>
        <div className="sns_box">
          <img src="./img/Conect_6.svg" alt="youtube" />
        </div>
        <div className="sns_box">
          <img src="./img/Conect_8.svg" alt="kakaotalk" />
        </div>
      </div>
      <Partner />
    </div>
  );
};

export default MobileConnect;
