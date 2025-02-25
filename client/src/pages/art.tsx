import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Art() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Digital Art Gallery
        </h1>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <Palette className="w-16 h-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-3xl mb-4">Coming Soon</CardTitle>
            <CardDescription className="text-lg">
              The digital art gallery is currently under construction. 
              Check back soon to explore a collection of digital artwork 
              spanning various styles and mediums.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>
    </div>
  );
}