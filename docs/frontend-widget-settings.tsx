export const frontendWidgetSettingsDocumentation = [
  {
    title: "Frontend Widget Selector for Main Content",
    description:
      "<p>Specify a selector for the main content area from which the AI will extract content.</p>" +
      '<p>The default selectors are: <code>main, article, [role=\"main\"], .entry-content, .post-content, .content, #content, .main, or #main</code></p>' +
      "<p>If your page's main content does not reside within the default HTML elements, you can specify a custom selector for the AI to use.</p>" +
      "<p>For example: <code>.my-main-content</code> or <code>#my-main-content</code></p>",
  },
  {
    title: "Frontend Widget Selector for Summary Content",
    description:
      "<p>Specify a selector where the AI will place the generated summary content.</p>" +
      "<p>By default, a modal window will appear.</p>" +
      "<p>To use a custom area, add a selector where the AI should attach the generated summary.</p>" +
      "<p>For example: <code>.my-summary</code> or <code>#my-summary</code></p>",
  },
  {
    title: "Frontend Widget Cooldown",
    description:
      "<p>Set the cooldown period (in seconds) before another AI request can be made.</p>" +
      "<p>By default, the cooldown is 10 minutes before another request can be made.</p>" +
      "<p>Decreasing this limit may significantly increase the cost per visitor.</p>" +
      "<p>The summary is cached in <code>localStorage</code> for 24 hours, so users will see the same summary during that period.</p>" +
      "<p>For private browsing, the summary is cached in memory; however, refreshing the page will clear it.</p>" +
      "<p>The cooldown helps prevent request abuse and keeps your costs lower.</p>",
  },
  {
    title: "Frontend Widget Summary Length",
    description:
      "<p>Set the maximum word count for the AI-generated summary in the frontend widget.</p>" +
      "<p>Default: 60.</p>",
  },
];
