import { useState } from 'react';
import './SearchBox.css';

export default function SearchBox(){

  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    setIsActive(true);
  }

  const handleClickCancel = () => {
    setIsActive(false);
  }

  return(
    <section className="searchBoxContainer">
      <div className={`searchBox ${isActive ? 'active' : ''}`}>
        <input type="text" placeholder="Busque um curso.." id="searchInput"  className={`${isActive ? 'active' : ''}`} />
        <div className={`searchButton ${isActive ? 'active' : ''}`} onMouseOver={handleMouseOver}>
          <img className="magnifying-glass" src="magnifying-glass-solid.svg" alt="magnifying-glass-solid"/>
          </div>
          <div className={`cancelButton ${isActive ? 'active' : ''}`} onClick={handleClickCancel}>
            <img src='xmark-solid.svg' alt='xmark'/>
          </div>
      </div>
    </section>
  )
}