export const availableFiltersDocumentation = [
  {
    title: "postai_summarize_max_requests",
    description:
      "<p>Allows developers to customize the maximum number of summary requests a user can make within a defined time window.</p>" +
      "<p>This helps prevent AI API abuse when using frontend widget, especially in private browsing.</p>" +
      "<p>Default: 5 requests.</p>",
  },
  {
    title: "postai_summarize_time_window",
    description:
      "<p>Lets developers set the duration (in seconds) for the rate-limiting window during which the request count is tracked.</p>" +
      "<p>This helps prevent AI API abuse when using frontend widget, especially in private browsing.</p>" +
      "<p>Default: 15 minutes.</p>",
  },
];
