import React from "react";
import ReactDOM from "react-dom";
import Search from "./searchbox";
import SearchResults from "./searchresults";

if (document.getElementById("searcharea"))
  ReactDOM.render(<Search />, document.getElementById("searcharea"));
if (document.getElementById("searchresults"))
  ReactDOM.render(
    <SearchResults toRemove="" />,
    document.getElementById("searchresults")
  );
