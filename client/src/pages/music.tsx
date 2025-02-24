import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Music as MusicIcon, Radio, Disc } from "lucide-react";
import { Button } from "@/components/ui/button";

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

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Listen on Spotify</CardTitle>
            <CardDescription>Check out my latest releases and playlists</CardDescription>
          </CardHeader>
          <CardContent>
            <iframe 
              src="https://open.spotify.com/embed/artist/35Ir0ossYsmU5VHS1oVr8m" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-lg"
            />
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
          <Button 
            size="lg"
            variant="default"
            asChild
          >
            <a 
              href="/assets/epk.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View EPK
            </a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            asChild
          >
            <a 
              href="https://open.spotify.com/artist/35Ir0ossYsmU5VHS1oVr8m?si=Y55lj5IdTQeDYn-N_6MgaQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Spotify Profile
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}