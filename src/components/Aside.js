import React from "react";

export const Aside = props => {
  return (
    <aside className="sidebar">
      <form onSubmit={props.formSubmitHandler} className="filter">
        <section>
          <h2 className="filter__heading">Search:</h2>
          <label>
            <input
              type="search"
              name="name"
              placeholder="Search by name or ID"
            />
          </label>
        </section>

        <section>
          <h2 className="filter__heading">Sorting:</h2>
          <fieldset className="filter__item-wrap">
            <legend className="filter__type-head">Name</legend>
            <label className="filter__item">
              <input type="radio" name="sort" value="asc-name" />
              asc
            </label>
            <label className="filter__item">
              <input type="radio" name="sort" value="desc-name" />
              desc
            </label>
          </fieldset>
          <fieldset className="filter__item-wrap">
            <legend className="filter__type-head">ID</legend>
            <label className="filter__item">
              <input type="radio" name="sort" defaultChecked value="asc-id" />
              asc
            </label>
            <label className="filter__item">
              <input type="radio" name="sort" value="desc-id" />
              desc
            </label>
          </fieldset>
        </section>

        <section>
          <h2 className="filter__heading">Filtering:</h2>
          <fieldset className="filter__item-wrap">
            <legend className="filter__type-head">Species</legend>
            <label className="filter__item">
              <input type="radio" name="species" defaultChecked value="" />
              All
            </label>
            <label className="filter__item">
              <input type="radio" name="species" value="human" />
              Human
            </label>
            <label className="filter__item">
              <input type="radio" name="species" value="alien" />
              Alien
            </label>
            <label className="filter__item">
              <input type="radio" name="species" value="humanoid" />
              Humanoid
            </label>
            <label className="filter__item">
              <input type="radio" name="species" value="mytholog" />
              Mytholog
            </label>
            <label className="filter__item">
              <input type="radio" name="species" value="animal" />
              Animal
            </label>
            <label className="filter__item">
              <input type="radio" name="species" value="robot" />
              Robot
            </label>
          </fieldset>
          <fieldset className="filter__item-wrap">
            <legend className="filter__type-head">Status</legend>
            <label className="filter__item">
              <input type="radio" name="status" defaultChecked value="" />
              All
            </label>
            <label className="filter__item">
              <input type="radio" name="status" value="alive" />
              Alive
            </label>
            <label className="filter__item">
              <input type="radio" name="status" value="dead" />
              Dead
            </label>
            <label className="filter__item">
              <input type="radio" name="status" value="unknown" />
              Unknown
            </label>
          </fieldset>
          <fieldset className="filter__item-wrap">
            <legend className="filter__type-head">Gender</legend>
            <label className="filter__item">
              <input type="radio" name="gender" defaultChecked value="" />
              All
            </label>
            <label className="filter__item">
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label className="filter__item">
              <input type="radio" name="gender" value="female" />
              Female
            </label>
            <label className="filter__item">
              <input type="radio" name="gender" value="genderless" />
              Genderless
            </label>
            <label className="filter__item">
              <input type="radio" name="gender" value="unknown" />
              Unknown
            </label>
          </fieldset>
        </section>
        <button className="filter__btn" type="submit">
          Submit
        </button>
        <button className="filter__btn" type="button">
          <a href="/react-rick-and-morty/">Reset</a>
        </button>
      </form>
    </aside>
  );
};
