export const backendSettingsDocumentation = [
  {
    title: "Enable for Post Types",
    description:
      '<p>Enable AI features for all post types, or select specific types as needed.</p><p>This feature is optional; "post" is selected by default.</p>',
  },
  {
    title: "Excerpt Length",
    description:
      "<p>Set the maximum length (in words) for AI-generated excerpts.</p><p>The free version defaults to 25 words, while the Pro version defaults to 50 words.</p>",
  },
  {
    title: "Excerpt Generation Prompt",
    description:
      "<p>Create a custom prompt to be used when generating excerpts.</p><p>In the backend, the prompt will be combined with the post content.</p>",
  },
  {
    title: "Use Post Meta",
    description:
      "<p>Allow the AI to utilize custom fields attached to posts for improved results.</p>",
  },
  {
    title: "Image Size",
    description:
      "<p>Adjust the size of AI-generated images.</p><p>Available options are 1024x1024, 1024x1792, and 1792x1024. The default is 1024x1024.</p><p>This feature is available only when OpenAI models are enabled.</p>",
  },
  {
    title: "Image Generation Prompt",
    description:
      "<p>Create a custom prompt to be used when generating images.</p><p>In the backend, the prompt will be combined with the post content.</p><p>This feature is available only when OpenAI models are enabled.</p>",
  },
  {
    title: "Prioritize Excerpt for Image Generation",
    description:
      "<p>If the AI has generated an excerpt, it will be used to create images, resulting in smaller and more cost-effective requests.</p><p>This feature is available only when OpenAI models are enabled.</p>",
  },
  {
    title: "Allow AI to Learn About Site",
    description:
      "<p>Enable the AI to analyze your site and generate a summary based on the latest content.</p>" +
      "<p>Choose how frequently the AI should perform this analysis (daily, weekly, monthly, etc.), and specify the number of posts to include per post type.</p>" +
      "<p>This process runs automatically in the background at your selected intervals. Once complete, the AI-generated summary will be available for review.</p>",
  },
];
