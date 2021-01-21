import React from 'react'
import Link from 'next/link'

// RestoPizza Icons set
import Icon from '../Icon';

export default function Service({ project }) {
  return (
    <>
      <div className="fenzo-service-wrapper">
        <Link href="/servico/[pid]" as={`/servico/${project.slug}`}>
          <li className="fenzo-service-card">
            <a>
              <div className="service-card__figure"><Icon color="#1652F0" size={48} icon={project.icon_name} /></div>
              <div className="service-card__header">
                <span className="service-name">
                  {project.title}
                </span>
              </div>
            </a>
          </li>
        </Link>
      </div>
    </>
  )
};
