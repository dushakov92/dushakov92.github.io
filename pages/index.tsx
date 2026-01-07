import Head from "next/head";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import SVG from "react-inlinesvg";
import { Navigation } from "@/components/navigation";

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
            <Table.Row>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Free</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Pro</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>AI Excerpt Generation</Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>AI Image Generation</Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>OpenAI Model</Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Gemini Model</Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                AI Content Proof Reading
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>AI Writing Assistance</Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Front-end Widget</Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                Front-end Widget Settings
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                Enable for all post types or selected ones
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Update excerpt length</Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                Edit excerpt generation prompt
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                Use custom fields for enhanced AI results
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>Change image size</Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                Use post excerpt as image generation prompt for enhanced AI
                results
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                Edit image generation prompt
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                Allow AI learn about website for enhanced AI results
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell>
                Access additional AI models
              </Table.RowHeaderCell>
              <Table.Cell>
                <SVG className="w-5 text-red-700" src="/images/ban.svg" />
              </Table.Cell>
              <Table.Cell>
                <SVG className="w-5 text-green-700" src="/images/check.svg" />
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell></Table.RowHeaderCell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell className="text-lg font-bold! align-middle!">
                Documentation
              </Table.RowHeaderCell>
              <Table.Cell className="align-middle!">
                <a href="/documentation/">View</a>
              </Table.Cell>
              <Table.Cell className="align-middle!">
                <a href="/documentation/">View</a>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell className="text-lg font-bold! align-middle!">
                Price
              </Table.RowHeaderCell>
              <Table.Cell className="align-middle!">$0</Table.Cell>
              <Table.Cell className="align-middle!">Coming Soon</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.RowHeaderCell className="text-lg font-bold! align-middle!">
                Download
              </Table.RowHeaderCell>
              <Table.Cell className="align-middle!">
                <Link
                  href="https://wordpress.org/plugins/search/post+ai/"
                  target="_blank"
                >
                  Wordpress Marketplace
                </Link>
              </Table.Cell>
              <Table.Cell className="align-middle!">Coming Soon</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </main>
    </>
  );
}
