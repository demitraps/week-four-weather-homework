import React from "react";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <input type="search" placeholder="Search city..." />
      <input type="submit" value="Go" />
    </form>
  );
}
