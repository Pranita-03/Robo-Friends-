import React from "react";

const SearchBox =({SearchChange}) => {
    return(
        <div className="pa2 ">
            <input className="pa3 ba b --green bg-lightest-blue" type="search" placeholder="Search Friends"
            onChange={SearchChange}
            />
        </div>
    );
}
export default SearchBox;