import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const features = [
  {
    title: "Write More. Stress Less.",
    description:
      "Describe what you want and Paca AI drafts it instantly — structured headings, clean paragraphs, ready to edit. A blank page becomes a finished draft in seconds.",
  },
  {
    title: "Stop Writing Excerpts.",
    description:
      "Create Excerpt reads your post and generates a sharp, on-brand summary in one click. Tell Paca AI exactly how you want them written and it remembers every time.",
  },
  {
    title: "Beautiful Images Without a Designer.",
    description:
      "Create Image generates a professional, text-free illustration from your post content — uploaded directly to your media library and ready to publish.",
  },
  {
    title: "AI That Learns Your Site.",
    description:
      "AI Training quietly analyzes your posts in the background, building a picture of your topics and tone. Every result becomes more on-brand over time.",
  },
  {
    title: "Proof Read in One Click.",
    description:
      "Paca AI silently fixes spelling, grammar, and punctuation without touching your formatting, links, or headings. What you wrote, just polished.",
  },
  {
    title: "Built to Be Customized.",
    description:
      "Standard WordPress AJAX endpoints power every feature. Write your own prompts, control output length, or build a fully custom UI while Paca AI handles the AI logic.",
  },
];

/**
 * Feature card with hover border effect.
 */
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <motion.div
    variants={fadeUp}
    className="flex flex-col gap-3 rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-6 transition-colors duration-300 hover:border-[#333]"
  >
    <h3 className="text-base! font-semibold! mb-0! text-white">{title}</h3>
    <p className="text-sm text-[#888] leading-relaxed m-0">{description}</p>
  </motion.div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Paca AI — AI Writing Assistant for WordPress</title>
        <meta
          name="description"
          content="Generate excerpts, write posts, proofread content, and create images directly inside your WordPress editor."
        />
      </Head>
      <Navigation />

      <main className="flex flex-col items-center px-6 md:px-12 xl:px-24">
        {/* Hero */}
        <section className="flex flex-col items-center text-center pt-40 pb-28 w-full max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest uppercase text-[#555] m-0"
            >
              WordPress Plugin
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-0"
            >
              Your AI writing partner,{" "}
              <span className="text-[#555]">built right into WordPress.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[#888] text-lg max-w-xl m-0"
            >
              Generate excerpts, write entire posts, proofread your content, and
              create stunning images — without leaving the editor.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 justify-center mt-2"
            >
              <Link
                href="https://wordpress.org/plugins/paca-ai/"
                target="_blank"
                className="px-5 py-2.5 rounded-lg bg-white text-black! text-sm font-semibold no-underline! hover:bg-[#e5e5e5] transition-colors"
              >
                Install Free
              </Link>
              <Link
                href="https://dushakov.gumroad.com/l/paca-ai-streaming"
                target="_blank"
                className="px-5 py-2.5 rounded-lg border border-[#333] text-white! text-sm font-semibold no-underline! hover:border-[#555] transition-colors"
              >
                Get AI Streaming →
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Features grid */}
        <section className="w-full max-w-5xl pb-28">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-[#555] mb-10 text-center"
          >
            Features
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </motion.div>
        </section>

        {/* AI Search highlight */}
        <section className="w-full max-w-5xl pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start"
          >
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#555] m-0">
                AI Search
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white m-0">
                A search experience your visitors will love.
              </h2>
              <p className="text-[#888] text-base leading-relaxed m-0">
                Replace keyword search with something smarter. Paca AI Search
                understands the meaning behind your visitors&apos; questions —
                not just the words. Drop the block anywhere on your site and
                your content becomes genuinely discoverable.
              </p>
              <p className="text-[#888] text-base leading-relaxed m-0">
                Visitors can also hit the Summarize button on any page and get
                an instant plain-English summary — great for long-form content,
                tutorials, or resource pages.
              </p>
              <Link
                href="/documentation/"
                className="text-sm text-white! no-underline! hover:underline! mt-2 self-start"
              >
                See documentation →
              </Link>
            </div>
            <div className="flex flex-col gap-3 md:w-56 shrink-0">
              {[
                "Semantic search",
                "AI-generated answers",
                "Summarize any page",
                "Gutenberg block",
                "Custom templates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#aaa]"
                >
                  <span className="w-1 h-1 rounded-full bg-white shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Streaming CTA */}
        <section className="w-full max-w-5xl pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#2a2a2a] p-10 md:p-14 flex flex-col gap-6 relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse at top left, #1a1a1a 0%, #0a0a0a 60%)",
            }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#555] m-0">
              AI Streaming
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white m-0">
              Upgrade to Streaming — answers that feel instant.
            </h2>
            <p className="text-[#888] text-base leading-relaxed m-0 max-w-xl">
              With a Paca AI Streaming license, responses stream directly to
              your visitors word-by-word — just like ChatGPT. It feels
              dramatically faster, keeps visitors engaged, and makes your site
              feel genuinely modern. Streaming also powers real-time excerpt
              generation and content writing in the editor.
            </p>
            <div>
              <Link
                href="https://dushakov.gumroad.com/l/paca-ai-streaming"
                target="_blank"
                className="inline-block px-5 py-2.5 rounded-lg bg-white text-black! text-sm font-semibold no-underline! hover:bg-[#e5e5e5] transition-colors"
              >
                Get AI Streaming →
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Works with */}
        <section className="w-full max-w-5xl pb-28 flex flex-col items-center gap-6">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-[#555] m-0"
          >
            Works with
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-wrap gap-4 justify-center"
          >
            {[
              {
                name: "OpenAI",
                href: "https://platform.openai.com/settings/organization/api-keys",
              },
              {
                name: "Google Gemini",
                href: "https://aistudio.google.com/app/api-keys",
              },
            ].map(({ name, href }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                className="px-5 py-2 rounded-full border border-[#222] text-[#888]! text-sm no-underline! hover:border-[#444] hover:text-white! transition-colors"
              >
                {name}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-[#555] text-sm m-0"
          >
            Bring your own API key and get started in minutes.
          </motion.p>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#1a1a1a] py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#555] text-sm">
          <span>Paca AI</span>
          <div className="flex gap-6">
            <Link
              href="https://wordpress.org/plugins/paca-ai/"
              target="_blank"
              className="text-[#555]! no-underline! hover:text-white! transition-colors"
            >
              WordPress Marketplace
            </Link>
            <Link
              href="/documentation/"
              className="text-[#555]! no-underline! hover:text-white! transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="https://dushakov.gumroad.com/l/paca-ai-streaming"
              target="_blank"
              className="text-[#555]! no-underline! hover:text-white! transition-colors"
            >
              AI Streaming
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
