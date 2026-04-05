export const availableFiltersDocumentation = [
  {
    title: "paca_summarize_max_requests",
    description:
      "<p>Allows developers to customize the maximum number of summary requests a user can make within a defined time window.</p>" +
      "<p>This helps prevent AI API abuse when using frontend widget, especially in private browsing.</p>" +
      "<p>Example: <code>add_filter( 'paca_summarize_max_requests', 5 );</code></p>" +
      "<p>Default: 5 requests.</p>",
  },
  {
    title: "paca_summarize_time_window",
    description:
      "<p>Lets developers set the duration (in seconds) for the rate-limiting window during which the request count is tracked.</p>" +
      "<p>This helps prevent AI API abuse when using frontend widget, especially in private browsing.</p>" +
      "<p>Example: <code>add_filter( 'paca_summarize_time_window', 15 * MINUTE_IN_SECONDS );</code></p>" +
      "<p>Default: 15 minutes.</p>",
  },
  {
    title: "paca_content_assistant_image_size",
    description:
      "<p>Override the image size used when generating images via DALL-E in the content assistant.</p>" +
      "<p>Available values: <code>1024x1024</code>, <code>1024x1792</code>, <code>1792x1024</code>.</p>" +
      "<p>Example: <code>add_filter( 'paca_content_assistant_image_size', '1792x1024' );</code></p>" +
      "<p>Default: <code>1024x1024</code>.</p>",
  },
  {
    title: "paca_ai_search_result_item",
    description:
      "<p>Modify individual search result data before it is returned in the JSON response.</p>" +
      "<p>Receives the result item array and the WP_Post object. Return the modified item.</p>" +
      "<p>Available fields: <code>ID</code>, <code>post_title</code>, <code>post_excerpt</code>, <code>permalink</code>, <code>thumbnail_url</code>, <code>categories</code>, <code>post_author</code>, <code>post_date</code>, <code>score</code>.</p>" +
      "<p>Example:</p>" +
      "<p><code>add_filter( 'paca_ai_search_result_item', function( $item, $post ) {</code></p>" +
      "<p><code>&nbsp;&nbsp;&nbsp;&nbsp;$item['reading_time'] = get_post_meta( $post->ID, '_reading_time', true );</code></p>" +
      "<p><code>&nbsp;&nbsp;&nbsp;&nbsp;return $item;</code></p>" +
      "<p><code>}, 10, 2 );</code></p>",
  },
];
