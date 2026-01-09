import Head from "next/head";
import { Navigation } from "@/components/navigation";
import { TableOfContent } from "@/components/table-of-content";
import { DocumentationSection } from "@/components/documentation-section";
import { backendSettingsDocumentation } from "@/docs/backend-settings";
import { frontendWidgetSettingsDocumentation } from "@/docs/frontend-widget-settings";
import { settingUpFrontendWidgetDocumentation } from "@/docs/setting-up-frontend-widget";
import { availableFiltersDocumentation } from "@/docs/available-filters";

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
            <DocumentationSection
              header="Getting Started"
              children={
                <>
                  <p>
                    Install the free version of PostAI from the WordPress
                    Plugins Marketplace, or purchase the Pro version and upload
                    the ZIP file via the WordPress Plugins section.
                  </p>
                  <p>
                    After activating the plugin, navigate to the plugin settings
                    page and connect your AI API key to begin using AI features.
                  </p>
                  <p className="mt-5">
                    <em>
                      Note: If you were using the free version of the PostAI
                      plugin, make sure to deactivate it before activating the
                      Pro version. Your settings will be preserved.
                    </em>
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
              header="Backend Settings"
              content={backendSettingsDocumentation}
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
