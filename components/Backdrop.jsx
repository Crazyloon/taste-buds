import React from 'react';

export const Backdrop = ({mainImage, description, name}) => {
  return (
    <section className="backdrop">
      <img className="backdrop-image" src={mainImage} alt={`backdrop for ${name}`} />
      <div className="overview">
        <p className="text">{description.substr(0, 400)}{description.length > 400 ? '...' : ''}</p>
      </div>
    </section>
  )
}