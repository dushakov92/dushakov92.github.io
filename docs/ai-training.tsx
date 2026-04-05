export const aiTrainingDocumentation = [
  {
    title: "Allow AI to Learn About Site",
    description:
      "<p>When enabled, AI will periodically analyze your site's content and generate a knowledge base summary.</p>" +
      "<p>This summary is used to give AI Search and the assistant context about who you are and what your site covers.</p>",
  },
  {
    title: "AI Training Frequency",
    description:
      "<p>Select how often AI should re-analyze your site and update the summary.</p>" +
      "<p>Available intervals: Daily, Weekly, Monthly, Quarterly, Biannually, Yearly.</p>" +
      "<p>Default: Biannually.</p>",
  },
  {
    title: "Number of Posts for AI Training",
    description:
      "<p>How many posts per post type the AI will read during each training run.</p>" +
      "<p>Default: 5.</p>",
  },
  {
    title: "Post Types for AI Training",
    description:
      "<p>Select which post types are included in AI Training.</p>" +
      "<p>All public post types are selected by default.</p>",
  },
  {
    title: "AI-Generated Site Summary",
    description:
      "<p>The AI-generated summary of your site, built from the most recent training run.</p>" +
      "<p>This field is editable — you can review and adjust what the AI learned about your site (up to 500 characters).</p>" +
      "<p>The summary is injected into AI Search prompts to give the assistant background context.</p>",
  },
];
