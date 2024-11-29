export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            { step: 1, title: "Upload Photo", description: "Select the photo you want to fix from your gallery." },
            { step: 2, title: "AI Magic", description: "Our AI automatically detects and fixes issues like blinking and red-eye." },
            { step: 3, title: "Perfect Result", description: "Download or share your perfectly fixed photo instantly." },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

