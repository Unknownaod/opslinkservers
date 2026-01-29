import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Star, Search, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="text-xl font-semibold tracking-wide">OpsLink Servers</div>
        <div className="flex items-center gap-8 text-sm text-white">
          <a href="#browse" className="hover:text-white">Browse</a>
          <a href="#submit" className="hover:text-white">Submit</a>
          <a href="#reviews" className="hover:text-white">Reviews</a>
          <Button variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white/10">Login</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-10 pt-28 pb-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-5xl font-bold leading-tight"
        >
          The <span className="text-white">curated</span> Discord server directory —<br />trusted, moderated, and high quality.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-xl text-white"
        >
          OpsLink Servers lists only verified Discord communities.
          Every server is manually approved. Every review is moderated.
          No spam. No fake ratings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <Button size="lg" className="rounded-full text-black bg-white hover:bg-zinc-200">Browse Servers</Button>
          <Button size="lg" variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white/10">Submit Server</Button>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="px-10 pb-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-zinc-900/80 border-zinc-800">
          <CardContent className="p-6 text-white">
            <ShieldCheck className="mb-4 text-white" />
            <h3 className="text-lg font-semibold text-white">Manually Approved</h3>
            <p className="mt-2 text-sm text-white">
              Every server is reviewed by our team before being listed.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/80 border-zinc-800">
          <CardContent className="p-6 text-white">
            <Star className="mb-4 text-white" />
            <h3 className="text-lg font-semibold text-white">Verified Reviews</h3>
            <p className="mt-2 text-sm text-white">
              Reviews come from real Discord members — no bots, no abuse.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/80 border-zinc-800">
          <CardContent className="p-6 text-white">
            <Search className="mb-4 text-white" />
            <h3 className="text-lg font-semibold text-white">Quality Discovery</h3>
            <p className="mt-2 text-sm text-white">
              Find high-quality servers without scrolling through spam.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Trust Section */}
      <section className="px-10 pb-32">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <CheckCircle className="mx-auto mb-3 text-white" />
            <h4 className="font-semibold">Strict Rules</h4>
            <p className="text-sm text-white mt-1">Low-effort servers are rejected.</p>
          </div>
          <div>
            <CheckCircle className="mx-auto mb-3 text-white" />
            <h4 className="font-semibold">Transparent Moderation</h4>
            <p className="text-sm text-white mt-1">Clear reasons for approval or rejection.</p>
          </div>
          <div>
            <CheckCircle className="mx-auto mb-3 text-white" />
            <h4 className="font-semibold">Community First</h4>
            <p className="text-sm text-white mt-1">Quality over quantity, always.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 border-t border-zinc-800 text-sm text-zinc-400 flex justify-between">
        <span>© {new Date().getFullYear()} OpsLink Servers</span>
        <span>Not affiliated with Discord</span>
      </footer>

    </div>
  );
}
