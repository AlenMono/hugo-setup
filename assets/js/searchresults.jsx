import React from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import {
  SearchProvider,
  Results,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Sorting,
  WithSearch,
} from "@elastic/react-search-ui";

import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
  searchKey: "search-ya9x1za2kwrsetnobd4x3pgh",
  engineName: "shepherd",
  endpointBase: "https://static-search.ent.us-east-1.aws.found.io",
  cacheResponses: false,
});

export default function SearchResults(props) {
  const truncate = (str, n) => {
    if (props.toRemove)
      return str?.length > n
        ? str.substr(0, n - 1).replace(props.toRemove, "") + "..."
        : str;
    else return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <SearchProvider
      config={{
        apiConnector: connector,
        initialState: {
          resultsPerPage: 10,
        },
      }}
    >
      <WithSearch
        mapContextToProps={({ results }) => ({
          results,
        })}
      >
        {({ results }) => {
          return (
            <div>
              {results.map((r) => (
                <div key={r.id.raw}>
                  <a href={r.url.raw}>{r.title.raw}</a>
                  <div>{truncate(r.meta_description.raw, 500)}</div>
                </div>
              ))}
            </div>
          );
        }}
      </WithSearch>

      <Paging />
    </SearchProvider>
  );
}
