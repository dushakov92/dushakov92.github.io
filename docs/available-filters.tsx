export const availableFiltersDocumentation = [
  {
    title: "postai_summarize_max_requests",
    description:
      "<p>Allows developers to customize the maximum number of summary requests a user can make within a defined time window.</p>" +
      "<p>This helps prevent AI API abuse when using frontend widget, especially in private browsing.</p>" +
      "<p>Example: <code>add_filter( 'postai_summarize_max_requests', 5 );</code></p>" +
      "<p>Default: 5 requests.</p>",
  },
  {
    title: "postai_summarize_time_window",
    description:
      "<p>Lets developers set the duration (in seconds) for the rate-limiting window during which the request count is tracked.</p>" +
      "<p>This helps prevent AI API abuse when using frontend widget, especially in private browsing.</p>" +
      "<p>Example: <code>add_filter( 'postai_summarize_time_window', 15 * MINUTE_IN_SECONDS );</code></p>" +
      "<p>Default: 15 minutes.</p>",
  },
];
