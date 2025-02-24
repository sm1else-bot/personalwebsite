import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Music as MusicIcon, Radio, Disc } from "lucide-react";

const releases = [
  {
    title: "Latest EP",
    description: "Electronic music production showcasing various styles",
    embedUrl: "https://open.spotify.com/embed/album/placeholder",
  },
  {
    title: "DJ Mix Series",
    description: "Monthly curated mix of electronic music",
    embedUrl: "https://soundcloud.com/embed/placeholder",
  },
];

export default function Music() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Music Production & DJing
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <MusicIcon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Producer</CardTitle>
              <CardDescription>
                Creating electronic music with a focus on innovative sound design
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Radio className="w-12 h-12 text-primary mb-4" />
              <CardTitle>DJ</CardTitle>
              <CardDescription>
                Performing at venues and creating curated mix series
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Disc className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Sound Design</CardTitle>
              <CardDescription>
                Crafting unique sounds and audio experiences
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="space-y-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{release.title}</CardTitle>
                  <CardDescription>{release.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    src={release.embedUrl}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    allow="encrypted-media"
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
