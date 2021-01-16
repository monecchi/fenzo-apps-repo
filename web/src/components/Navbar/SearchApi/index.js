import React, { useEffect, useState, useRef } from 'react'
import Icon from '../../Icon';

//import style from '../../../../styles/Fenzo.module.css'

// https://www.youtube.com/watch?v=vXO5JMiKtM8

// http://localhost:3000/api/services/

const NavSearchApi = () => {

  const [display, setDisplay] = useState(false)
  const [options, setOptions] = useState([])
  const [search, setSearch] = useState('')

  const wrapperRef = useRef(null);

  useEffect(() => {
    const services = [];
    const promises = new Array(6)
      .fill()
      .map((v, i) => fetch(`http://localhost:3000/api/services/${i + 1}`));
    Promise.all(promises).then(servicesArr => {
      return servicesArr.map(value =>
        value
          .json()
          .then(({ title, icon_name }) =>
            services.push({ title, icon_name })
          )
      );
    });
    setOptions(services);
    console.log(services)
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateSearchInput = servico => {
    setSearch(servico);
    setDisplay(false);
  };

  return (
      <div  ref={wrapperRef} className={'search-input'}>
          <form className={'search-input__form'}>
              <div className={'search-input__field-wrapper'}>
                  <span className={'icon-fenzo icon-fenzo--search search-input__icon-search'}>
                      <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <g fill="#3F3E3E" fillRule="evenodd">
                              <path
                                  d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z"
                                  fillRule="nonzero" />
                              <rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width="3" height="12" rx="1.5" />
                          </g>
                      </svg>
                  </span>

                  <input
                      id="search-all"
                      tabIndex={0}
                      role="search"
                      type="text"
                      title="q"
                      autoComplete="off"
                      aria-label="Busque por um produto ou serviço"
                      className="search-input__field"
                      placeholder="Buscar produto ou serviço"
                      onClick={() => setDisplay(!display)}
                      onChange={event => setSearch(event.target.value)}
                      value={search}
                  />

                  {(search && search.length >= 1) && (
                      <button
                          type="button"
                          tabIndex={0}
                          className="btn-icon btn-icon--gray btn-icon--size-m btn-icon--transparent search-input__erase-button"
                          aria-hidden="false"
                          aria-label="Limpar Campo"
                          onClick={() => setSearch("") && setDisplay(false)}
                      >
                          <span className="icon-fenzo icon-fenzo--error">
                              <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                  <g transform="translate(-290 -165)" fill="#3F3E3E" fillRule="evenodd">
                                      <g id="Group" transform="translate(290 165)">
                                          <path d="M24 22.586l-4.95-4.95a1 1 0 1 0-1.414 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 1 0 1.414-1.414L25.414 24l4.95-4.95a1 1 0 1 0-1.414-1.414L24 22.586zM24 41c-9.389 0-17-7.611-17-17S14.611 7 24 7s17 7.611 17 17-7.611 17-17 17z" id="Combined-Shape" />
                                      </g>
                                  </g>
                              </svg>
                          </span>
                      </button>
                  )}
              </div>
          </form>

          {display && options &&
          <div className="search-targeted">
              <p className="search-targeted__title">Buscas recentes</p>
              <ul className="search-targeted__options">
                  {options && options.filter(({ title }) => title.indexOf(search.toLowerCase()) > -1).map((value, i) => {
                    return (
                      <li className="search-targeted__option" key={i} onClick={() => updateSearchInput(value.title)}>
                          <button type="button" className="btn btn--link btn--size-m btn--targeted-search" variant="btn--targeted-search" theme="link" color="primary">
                              <span className="icon-fenzo icon-fenzo--search">
                                  <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                      <g fill="#3F3E3E" fillRule="evenodd"><path d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z" fillRule="nonzero" /><rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width={3} height={12} rx="1.5" /></g>
                                  </svg>
                              </span>
                              {value.title}
                              <Icon color="#1652F0" size={22} icon={value.icon_name} />
                              {/*<img height={26} width={26} src={value.sprite} alt="services" />*/}
                          </button>
                      </li>
                      );
                  })}
              </ul>
          </div>
          }

      </div>
  );
}

export default NavSearchApi;
