import React from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
  searchKey: "search-ya9x1za2kwrsetnobd4x3pgh",
  engineName: "shepherd",
  endpointBase: "https://static-search.ent.us-east-1.aws.found.io",
  cacheResponses: false,
});

export default function Search() {
  return (
    <SearchProvider
      config={{
        apiConnector: connector,
      }}
    >
      <div className="App">
        <SearchBox
          autocompleteResults={{
            titleField: "title",
            urlField: "url",
          }}
          autocompleteSuggestions={true}
          onSubmit={(searchTerm) => {
            window.location.assign("/search?q=" + searchTerm);
          }}
          onSelectAutocomplete={(
            selection,
            {},
            defaultOnSelectAutocomplete
          ) => {
            if (selection.suggestion) {
              window.location.assign("/search?q=" + selection.suggestion);
            } else {
              defaultOnSelectAutocomplete(selection);
            }
          }}
        />
      </div>
    </SearchProvider>
  );
}
