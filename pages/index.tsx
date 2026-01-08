import Head from "next/head";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import SVG from "react-inlinesvg";
import { Navigation } from "@/components/navigation";
import { TableSection } from "@/components/table-section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - PostAI</title>
      </Head>
      <Navigation />
      <main className="flex flex-col items-center justify-between px-6 pt-24 pb-6 md:px-12 xl:px-24">
        <div className="w-full xl:w-2/3 flex flex-col items-center mb-4">
          <h1>Professional AI Content Assistant for WordPress</h1>
          <p className="text-lg">
            Supercharge your editorial workflow and engage visitors with
            intelligent content generation.
          </p>
          <p className="text-lg">
            Integrate AI models to generate AI-powered content like excerpts,
            images, and proofreading assistance directly from the post editor.
          </p>
        </div>
        <Table.Root variant="ghost" className="w-full xl:w-2/3">
          <Table.Header>
            <TableSection
              availableInFree={false}
              availableInPro={false}
              childrenFree="Free"
              childrenPro="Pro"
            />
          </Table.Header>

          <Table.Body>
            <TableSection
              header="AI Excerpt Generation"
              availableInFree={true}
            />

            <TableSection
              header="AI Excerpt Generation"
              availableInFree={true}
            />

            <TableSection header="OpenAI Model" availableInFree={true} />

            <TableSection header="Gemini Model" availableInFree={true} />

            <TableSection
              header="AI Content Proof Reading"
              availableInFree={true}
            />

            <TableSection
              header="AI Writing Assistance"
              availableInFree={true}
            />

            <TableSection header="Front-end Widget" />

            <TableSection header="Front-end Widget Settings" />

            <TableSection header="Enable for all post types or selected ones" />

            <TableSection header="Update excerpt length" />

            <TableSection header="Edit excerpt generation prompt" />

            <TableSection header="Use custom fields for enhanced AI results" />

            <TableSection header="Change image size" />

            <TableSection header="Use post excerpt as image generation prompt for enhanced AI results" />

            <TableSection header="Edit image generation prompt" />

            <TableSection header="Allow AI learn about website for enhanced AI results" />

            <TableSection header="Access additional AI models" />

            <TableSection childrenFree={true} childrenPro={true} />

            <TableSection
              header="Documentation"
              childrenFree={<Link href="/documentation/">View</Link>}
              childrenPro={<Link href="/documentation/">View</Link>}
            />

            <TableSection
              header="Price"
              childrenFree={<Link href="/documentation/">$0</Link>}
              childrenPro={<Link href="/documentation/">Coming Soon</Link>}
            />

            <TableSection
              header="Download"
              childrenFree={
                <Link
                  href="https://wordpress.org/plugins/search/post+ai/"
                  target="_blank"
                >
                  Wordpress Marketplace
                </Link>
              }
              childrenPro={<Link href="/documentation/">Coming Soon</Link>}
            />
          </Table.Body>
        </Table.Root>
      </main>
    </>
  );
}
