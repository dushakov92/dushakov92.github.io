export const settingUpFrontendWidgetDocumentation = [
  {
    title: "Using class name",
    description:
      "<p>Add the <code>.postai-summary-trigger</code> class to an HTML element.</p>" +
      "<p>When this element is clicked, the AI will generate a summary based on the page content and display it in a modal window, or attach it to a custom selector if specified in the settings.</p>" +
      "<p>Example: <code>&lt;button class='postai-summary-trigger'&gt;Summarize Page&lt;/button&gt;</code></p>",
  },
  {
    title: "Using shortcode",
    description:
      "<p>Add <code>[postai_summary_button text='My Button' class='my-button']</code> shortcode anywhere in your post editor." +
      "<p>Optional: <code>text</code> attribute allows you to customize the button text, and <code>class</code> attribute lets you add custom classes for styling.</p>",
  },
];
