export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            { name: "Sarah L.", quote: "This app saved my wedding photos! No more blinking mishaps." },
            { name: "Mike R.", quote: "The one-tap enhancement is like magic. My photos look professional now." },
            { name: "Emily T.", quote: "I can't believe how easy it is to fix red-eye. This app is a game-changer!" },
          ].map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

