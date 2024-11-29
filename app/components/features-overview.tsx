import { Camera, Eye, Share2, Zap } from 'lucide-react'

export function FeaturesOverview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {[
            { icon: Eye, title: "Automatic Blink Correction", description: "Say goodbye to closed eyes in your photos." },
            { icon: Camera, title: "Red-Eye Removal", description: "Eliminate red-eye effect with ease." },
            { icon: Zap, title: "One-Tap Enhancements", description: "Instantly improve your photos with AI-powered edits." },
            { icon: Share2, title: "Share Directly", description: "Share your perfect shots on social media instantly." },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

