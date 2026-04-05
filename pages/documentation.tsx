import Head from "next/head";
import { Navigation } from "@/components/navigation";
import { TableOfContent } from "@/components/table-of-content";
import { DocumentationSection } from "@/components/documentation-section";
import { aiContentAssistantDocumentation } from "@/docs/ai-content-assistant";
import { aiTrainingDocumentation } from "@/docs/ai-training";
import { aiSearchDocumentation } from "@/docs/ai-search";
import { settingUpAiSearchDocumentation } from "@/docs/setting-up-ai-search";
import { frontendWidgetSettingsDocumentation } from "@/docs/frontend-widget-settings";
import { settingUpFrontendWidgetDocumentation } from "@/docs/setting-up-frontend-widget";
import { availableFiltersDocumentation } from "@/docs/available-filters";
import Link from "next/link";

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation - Paca AI</title>
      </Head>
      <Navigation />
      <main className="flex flex-col items-center justify-between px-6 pt-24 pb-6 md:px-12 xl:px-24">
        <h1>Documentation</h1>
        <div className="grid grid-cols-12 w-full max-w-full gap-6 md:gap-10">
          <aside className="col-span-12 md:col-span-3 md:sticky top-24 h-fit">
            <TableOfContent />
          </aside>
          <div className="col-span-12 md:col-span-9 flex flex-col gap-15">
            <DocumentationSection
              header="Getting Started"
              children={
                <>
                  <p>
                    Install Paca AI from the{" "}
                    <Link
                      href="https://wordpress.org/plugins/paca-ai/"
                      target="_blank"
                    >
                      WordPress Plugins Marketplace
                    </Link>
                    .
                  </p>
                  <p className="mt-5">
                    After activating the plugin, navigate to the plugin settings
                    page and connect your AI API key to begin using AI features.
                  </p>
                  <p className="mt-5">
                    <strong>AI Streaming</strong> is an optional add-on that enables
                    real-time streaming responses for AI Search, excerpt generation,
                    and content writing. It is purchased separately and activated
                    via a license key in the plugin settings.
                  </p>
                </>
              }
            />

            <DocumentationSection
              header="AI API Keys"
              children={
                <>
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
                </>
              }
            />

            <DocumentationSection
              header="AI Content Assistant"
              content={aiContentAssistantDocumentation}
            />

            <DocumentationSection
              header="AI Training"
              content={aiTrainingDocumentation}
            />

            <DocumentationSection
              header="AI Search"
              content={aiSearchDocumentation}
            />

            <DocumentationSection
              header="Setting Up AI Search"
              content={settingUpAiSearchDocumentation}
            />

            <DocumentationSection
              header="Frontend Widget Settings"
              content={frontendWidgetSettingsDocumentation}
            />

            <DocumentationSection
              header="Setting Up Frontend Widget"
              content={settingUpFrontendWidgetDocumentation}
            />

            <DocumentationSection
              header="Available Filters"
              content={availableFiltersDocumentation}
            />
          </div>
        </div>
      </main>
    </>
  );
}
