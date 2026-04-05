export const aiSearchDocumentation = [
  {
    title: "Enable AI Search",
    description:
      "<p>Enables the frontend AI search widget and results display on your site.</p>",
  },
  {
    title: "AI Search Type",
    description:
      "<p>Choose how AI Search responds to visitor queries.</p>" +
      "<p><strong>Search</strong>: finds and returns relevant articles and pages from your site.</p>" +
      "<p><strong>Assistant</strong>: delivers AI-generated answers based on your site content, similar to a chatbot.</p>",
  },
  {
    title: "AI Search Frequency",
    description:
      "<p>Select how often AI Search re-analyzes your site's content and recalibrates search rankings in the background.</p>" +
      "<p>Available intervals: Daily, Weekly, Monthly, Quarterly, Biannually, Yearly.</p>" +
      "<p>Default: Biannually.</p>",
  },
  {
    title: "AI Search Post Types",
    description:
      "<p>Select which post types to include in AI Search indexing, and set a post limit per type.</p>" +
      "<p>Default: all public post types, 100 posts each.</p>" +
      "<p>Each post consumes at minimum 1 API request during indexing.</p>",
  },
  {
    title: "AI Search Custom Prompt",
    description:
      "<p>Add a custom prompt to guide how AI Search ranks and presents results.</p>" +
      "<p>Maximum 500 characters.</p>",
  },
  {
    title: "Re-index AI Search",
    description:
      "<p>Trigger an immediate search re-indexing instead of waiting for the next scheduled run.</p>" +
      "<p>Check this box and save changes to update your AI Search index now.</p>",
  },
];
