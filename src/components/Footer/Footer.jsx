import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__links">
          <Link to="/" className="footer__link">
            Обмен и возврат
          </Link>
          <Link to="/" className="footer__link">
            Доставка и оплата
          </Link>
        </div>
        <div className="footer__text">
          Этот продукт содержит химические вещества, которые вызывают рак, врожденные дефекты или
          другие нарушения репродуктивной системы.
        </div>
        <div className="footer__icons">
          <a href="" className="footer__icon footer__icon_telegram">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="" className="footer__icon footer__icon_instagram">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
