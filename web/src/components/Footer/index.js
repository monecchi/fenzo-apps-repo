import React from 'react'

// Footer Styles
import './styles.scss'

// Icon Component
import Icon from '../Icon';

// Fenzo Logo
import FooterLogo from '../../assets/logo/fenzo-logo-cor.svg';

const Footer = (props) => {

  return (
    <div className="footer align-items-center">
      <ul className="nav">
        <li className="nav-item">
          <a href="/servicos" role="link" aria-label="Serviços" className="link">Serviços</a>
        </li>
      </ul>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <FooterLogo />
        <div className="telefone-footer">
          <Icon icon="telephone" size={32} color={"#333"} className="call-icon mr-2" /><h5>21 3594-5588</h5>
        </div>
      </div>
    </div>
  )

};

export default Footer;
