import React from "react";

const filterOptions = [
  {
    name: "species",
    options: [
      "all",
      "human",
      "alien",
      "humanoid",
      "mytholog",
      "animal",
      "robot"
    ]
  },
  {
    name: "gender",
    options: ["all", "male", "female", "genderless", "unknown"]
  },
  { name: "status", options: ["all", "alive", "dead", "unknown"] }
];

const FormFilterField = filter => {
  const currentFilter = filter.filter;

  return (
    <fieldset className="filter__item-wrap">
      <legend className="filter__type-head">{currentFilter.name}</legend>
      {currentFilter.options.map((item, i) => {
        return (
          <label key={i} className="filter__item">
            <input
              type="radio"
              name={currentFilter.name}
              value={item === "all" ? "" : item}
              defaultChecked={item === "all"}
            />
            {item}
          </label>
        );
      })}
    </fieldset>
  );
};

const Aside = props => {
  return (
    <aside className="sidebar">
      <form onSubmit={props.formSubmitHandler} className="filter">
        <section>
          <h2 className="filter__heading">Search:</h2>
          <label>
            <input type="search" name="name" placeholder="Search by name" />
          </label>
          <label>
            <input type="search" name="id" placeholder="Search by ID" />
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
          {filterOptions.map((item, i) => (
            <FormFilterField key={i} filter={item} />
          ))}
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

export default Aside;
