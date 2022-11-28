export const movieShelfEndpoint = {
  query: ({ sortOption, genreOption }) => {
    const endpoint = ["?"];
    sortOption && endpoint.push(`sortBy=${sortOption}&sortOrder=desc`);
    genreOption &&
      genreOption !== "all" &&
      endpoint.push(`&filter=${genreOption}`);

    return endpoint.join("");
  },
  transformResponse: ({ data }) => data,
};