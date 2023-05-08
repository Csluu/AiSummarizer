import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
	reducerPath: "articleApi",
	// Which api do we want to call
	baseQuery: fetchBaseQuery({
		baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
		prepareHeaders: (headers) => {
			headers.set("X-RapidAPI-Key", "rapidApiKey");
			headers.set(
				"X-RapidAPI-HOST",
				"article-extractor-and-summarizer.p.rapidapi.com"
			);

			return headers;
		},
	}),

	// using encodeURIComponent on the URL as the url might contain special characters or for any unexpected errors that might occur
    // so use this for any user generated url content 
	endpoints: (builder) => ({
		getSummary: builder.query({
			query: (params) =>
				`/summarize?url=${encodeURIComponent(params.articleURL)}&length=3`,
		}),
	}),
});

// useLazy allows us to fire this on command and not when the website loads if we were to use useGetSummaryQuery
export const { useLazyGetSummaryQuery } = articleApi;
