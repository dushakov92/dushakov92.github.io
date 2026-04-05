export const settingUpAiSearchDocumentation = [
  {
    title: "Using the Gutenberg Block",
    description:
      "<p>Add the <strong>Paca AI Search</strong> block (<code>paca/ai-search</code>) to any page or post via the block editor.</p>" +
      "<p>The block includes the following settings in the sidebar:</p>" +
      "<ul>" +
      "<li><strong>Results Per Page</strong> — number of results shown per batch (default: 4)</li>" +
      "<li><strong>Max Results</strong> — maximum total results returned (default: 12)</li>" +
      "<li><strong>Display Answer</strong> — show an AI-generated answer above results (default: on)</li>" +
      "<li><strong>Display Results</strong> — show article result cards below the answer (default: off)</li>" +
      "<li><strong>Placeholder</strong> — custom placeholder text for the search input</li>" +
      "<li><strong>Lazy Load</strong> — automatically load more results as the user scrolls (default: off)</li>" +
      "</ul>",
  },
  {
    title: "Using the Shortcode",
    description:
      "<p>Add <code>[paca_ai_search]</code> anywhere in your post or page content.</p>" +
      "<p>Available attributes:</p>" +
      "<ul>" +
      "<li><code>results_per_page</code> — results per batch (default: 4)</li>" +
      "<li><code>max_results</code> — maximum total results (default: 12)</li>" +
      "<li><code>display_answer</code> — show AI answer, <code>1</code> or <code>0</code> (default: 1)</li>" +
      "<li><code>display_results</code> — show result cards, <code>1</code> or <code>0</code> (default: 0)</li>" +
      "<li><code>placeholder</code> — custom placeholder text</li>" +
      "<li><code>lazy_load</code> — auto-load on scroll, <code>1</code> or <code>0</code> (default: 0)</li>" +
      "</ul>" +
      '<p>Example: <code>[paca_ai_search display_answer="1" display_results="1" results_per_page="6"]</code></p>',
  },
  {
    title: "Custom Result Template",
    description:
      "<p>By default, AI Search renders results using a built-in card template. You can replace it with your own from your theme's <code>functions.php</code>.</p>" +
      "<p><strong>Step 1</strong> — Register your template in the footer:</p>" +
      "<p><code>add_action( 'wp_footer', function () { ?&gt;</code></p>" +
      "<p><code>&lt;script type=\"text/html\" id=\"tmpl-my-search-result\"&gt;</code></p>" +
      "<p><code>&nbsp;&nbsp;&lt;# console.log(data); #&gt;</code></p>" +
      "<p><code>&nbsp;&nbsp;&lt;article&gt;&lt;a href=\"{{ data.permalink }}\"&gt;{{ data.post_title }}&lt;/a&gt;&lt;/article&gt;</code></p>" +
      "<p><code>&lt;/script&gt;</code></p>" +
      "<p><code>&lt;?php } );</code></p>" +
      "<p>Use <code>{{ data.field }}</code> for escaped output, <code>{{{ data.field }}}</code> for raw HTML, and <code>&lt;# if (condition) { #&gt;</code> for logic.</p>" +
      "<p>Add <code>&lt;# console.log(data); #&gt;</code> inside the template to inspect all available fields in your browser console.</p>" +
      "<p><strong>Step 2</strong> — Pass the template ID to the shortcode:</p>" +
      "<p><code>[paca_ai_search results_template=\"my-search-result\"]</code></p>" +
      "<p>Available data fields by default: <code>post_title</code>, <code>permalink</code>, <code>post_excerpt</code>, <code>thumbnail_url</code>, <code>categories</code> (array), <code>post_author</code>, <code>post_date</code>, <code>score</code>.</p>" +
      "<p><strong>Adding custom fields</strong> — Use the <code>paca_ai_search_result_item</code> filter in your <code>functions.php</code> to add any additional data to each result:</p>" +
      "<p><code>add_filter( 'paca_ai_search_result_item', function( $item, $post ) {</code></p>" +
      "<p><code>&nbsp;&nbsp;&nbsp;&nbsp;$item['reading_time'] = get_post_meta( $post-&gt;ID, '_reading_time', true );</code></p>" +
      "<p><code>&nbsp;&nbsp;&nbsp;&nbsp;return $item;</code></p>" +
      "<p><code>}, 10, 2 );</code></p>" +
      "<p>The field will then be available in your template as <code>{{ data.reading_time }}</code>.</p>",
  },
];
