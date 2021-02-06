import React from 'react'
import { Flex } from '@chakra-ui/react'
// Footer Styles
import styles from './footer.module.scss'

//export const Footer = (props) => <Flex as="footer" py="8rem" {...props} />

// Icon Component
import Icon from '../Icon';

// Fenzo Logo
import FooterLogo from '../../assets/logo/fenzo-logo-cor.svg';

const Footer = (props) => {

  return (
    <Flex as="footer" py="3.5rem" w="100%" maxW="1366px">
    <div className={styles.footer + ' align-items-center'}>
      <ul className="nav">
        <li className="nav-item">
          <a href="/servicos" role="link" aria-label="Serviços" className="link">Serviços</a>
        </li>
      </ul>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <FooterLogo />
        <div className={styles.telefone_footer}>
          <Icon icon="telephone" size={32} color={"#333"} className={styles.call_icon + ' mr-2'} /><h5>21 3594-5588</h5>
        </div>
      </div>
    </div>
    </Flex>
  )

};

export default Footer;
