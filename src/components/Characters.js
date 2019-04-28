import React from "react";

export const Characters = props => {
  const characterHtmlList = props.charactersData.map(charData => {
    return (
      <li key={charData.id} className="card-list__item">
        <div className="card-list__item-wrap">
          <img className="card-list__photo" src={charData.image} alt="#" />
          <div className="card-list__name-wrap">
            <p className="card-list__name">{charData.name}</p>
            <p className="card-item__id-info">ID: {charData.id}</p>
          </div>
          <div className="card-list__character-specs">
            <div className="card-list__character-spec-item">
              <span className="card-list__spec">Status</span>
              <span className="card-list__spec-value">{charData.status}</span>
            </div>
            <div className="card-list__character-spec-item">
              <span className="card-list__spec">Species</span>
              <span className="card-list__spec-value">{charData.species}</span>
            </div>
            <div className="card-list__character-spec-item">
              <span className="card-list__spec">Gender</span>
              <span className="card-list__spec-value">{charData.gender}</span>
            </div>
            {/* <div className="card-list__character-spec-item">
                <span className="card-list__spec">Origin</span>
                <span className="card-list__spec-value">
                  {charData.origin.name}
                </span>
              </div>
              <div className="card-list__character-spec-item">
                <span className="card-list__spec">location</span>
                <span className="card-list__spec-value">
                  {charData.location.name}
                </span>
              </div> */}
          </div>
        </div>
      </li>
    );
  });

  return <ul className="card-list">{characterHtmlList}</ul>;
};
