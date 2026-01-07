import Head from "next/head";
import { Navigation } from "@/components/navigation";
import { TableOfContent } from "@/components/table-of-content";

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation - PostAI</title>
      </Head>
      <Navigation />
      <main className="flex flex-col items-center justify-between px-6 pt-24 pb-6 md:px-12 xl:px-24">
        <h1>Documentation</h1>
        <div className="grid grid-cols-12 w-full max-w-full gap-6 md:gap-10">
          <aside className="col-span-12 md:col-span-3 md:sticky top-24 h-fit">
            <TableOfContent />
          </aside>
          <div className="col-span-12 md:col-span-9 flex flex-col gap-15">
            <section role="region" aria-labelledby="getting-started">
              <h3 id="getting-started">Getting Started</h3>
              <p>
                Install the free version of PostAI from the WordPress Plugins
                Marketplace, or purchase the Pro version and upload the ZIP file
                via the WordPress Plugins section.
              </p>
              <p>
                After activating the plugin, navigate to the plugin settings
                page and connect your AI API key to begin using AI features.
              </p>
              <p className="mt-5">
                <em>
                  Note: If you were using the free version of the PostAI plugin,
                  make sure to deactivate it before activating the Pro version.
                  Your settings will be preserved.
                </em>
              </p>
            </section>

            <section role="region" aria-labelledby="ai-api-keys">
              <h3 id="ai-api-keys">AI API Keys</h3>
              <p>Obtain an API key from one of the following providers:</p>
              <p>
                <a
                  href="https://aistudio.google.com/app/api-keys"
                  target="_blank"
                >
                  Get Google Gemini API Key
                </a>
              </p>
              <p>
                <a
                  href="https://platform.openai.com/settings/organization/api-keys"
                  target="_blank"
                >
                  Get OpenAI API Key
                </a>
              </p>
            </section>

            <section role="region" aria-labelledby="backend-settings">
              <h3 id="backend-settings">Backend Settings</h3>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">Enable for Post Types</h4>
                  <div className="flex-1">
                    <p>
                      Enable AI features for all post types, or select specific
                      types as needed.
                    </p>
                    <p>
                      This feature is optional; "post" is selected by default.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">Excerpt Length</h4>
                  <div className="flex-1">
                    <p>
                      Set the maximum length (in words) for AI-generated
                      excerpts.
                    </p>
                    <p>
                      The free version defaults to 50 words, while the Pro
                      version defaults to 100 words.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">
                    Excerpt Generation Prompt
                  </h4>
                  <div className="flex-1">
                    <p>
                      Create a custom prompt to be used when generating
                      excerpts.
                    </p>
                    <p>
                      In the backend, the prompt will be combined with the post
                      content.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">Use Post Meta</h4>
                  <div className="flex-1">
                    <p>
                      Allow the AI to utilize custom fields attached to posts
                      for improved results.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">Image Size</h4>
                  <div className="flex-1">
                    <p>Adjust the size of AI-generated images.</p>
                    <p>
                      Available options are 1024x1024, 1024x1792, and 1792x1024.
                      The default is 1024x1024.
                    </p>
                    <p>
                      This feature is available only when OpenAI models are
                      enabled.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">Image Generation Prompt</h4>
                  <div className="flex-1">
                    <p>
                      Create a custom prompt to be used when generating images.
                    </p>
                    <p>
                      In the backend, the prompt will be combined with the post
                      content.
                    </p>
                    <p>
                      This feature is available only when OpenAI models are
                      enabled.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">
                    Prioritize Excerpt for Image Generation
                  </h4>
                  <div className="flex-1">
                    <p>
                      If the AI has generated an excerpt, it will be used to
                      create images, resulting in smaller and more
                      cost-effective requests.
                    </p>
                    <p>
                      This feature is available only when OpenAI models are
                      enabled.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section role="region" aria-labelledby="widget-settings">
              <h3 id="widget-settings">Frontend Widget Settings</h3>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">
                    Frontend Widget Selector for Main Content
                  </h4>
                  <div className="flex-1">
                    <p>
                      Specify a selector for the main content area from which
                      the AI will extract content.
                    </p>
                    <p>
                      The default selectors are:{" "}
                      <code>
                        main, article, [role="main"], .entry-content,
                        .post-content, .content, #content, .main, or #main
                      </code>
                    </p>
                    <p>
                      If your page's main content does not reside within the
                      default HTML elements, you can specify a custom selector
                      for the AI to use.
                    </p>
                    <p>
                      For example: <code>.my-main-content</code> or{" "}
                      <code>#my-main-content</code>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">
                    Frontend Widget Selector for Summary Content
                  </h4>
                  <div className="flex-1">
                    <p>
                      Specify a selector where the AI will place the generated
                      summary content.
                    </p>
                    <p>By default, a modal window will appear.</p>
                    <p>
                      To use a custom area, add a selector where the AI should
                      attach the generated summary.
                    </p>
                    <p>
                      For example: <code>.my-summary</code> or{" "}
                      <code>#my-summary</code>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
                  <h4 className="md:w-48 shrink-0">Frontend Widget Cooldown</h4>
                  <div className="flex-1">
                    <p>
                      Set the cooldown period (in seconds) before another AI
                      request can be made.
                    </p>
                    <p>
                      By default, the cooldown is 10 minutes before another
                      request can be made.
                    </p>
                    <p>
                      Decreasing this limit may significantly increase the cost
                      per visitor.
                    </p>
                    <p>
                      The summary is cached in <code>localStorage</code> for 24
                      hours, so users will see the same summary during that
                      period.
                    </p>
                    <p>
                      For private browsing, the summary is cached in memory;
                      however, refreshing the page will clear it.
                    </p>
                    <p>
                      The cooldown helps prevent request abuse and keeps your
                      costs lower.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section role="region" aria-labelledby="widget-setup">
              <h3 id="widget-setup">Setting Up Frontend Widget</h3>
              <p>
                To set up the frontend widget, add the{" "}
                <code>.postai-summary-trigger</code> class to an HTML element.
              </p>
              <p>
                When this element is clicked, the AI will generate a summary
                based on the page content and display it in a modal window, or
                attach it to a custom selector if specified in the settings. For
                example:{" "}
                <code>{`<button class="postai-summary-trigger">Summarize Page</button>`}</code>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
