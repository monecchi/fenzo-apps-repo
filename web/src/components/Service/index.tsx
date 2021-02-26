import React from 'react'
import Link from 'next/link'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

// RestoPizza Icons set
import Icon from '../Icon';

import styles from './service.module.scss'

//
// Service Single Component (small card)
//
export default function Service({ project }) {
  return (
    <>
      <Link href="/servico/[pid]" as={`/servico/${project.slug}`}>
        <li className={`${styles['fenzo-service-card']}`}>
          <LinkBox>
            <LinkOverlay as="a">
              <div className={`${styles['service-card__figure']}`}><Icon color="#1652F0" size={48} icon={project.icon_name} /></div>
              <div className={`${styles['service-name']}`}>
                {project.title}
              </div>
            </LinkOverlay>
          </LinkBox>
        </li>
      </Link>
    </>
  )
};
