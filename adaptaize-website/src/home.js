import React from "react";

export default function AdaptaizeHome() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gradient-to-br from-purple-100 to-purple-200">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800">
            AI-Powered Automation. Zero Upfront Cost.
          </h1>
          <p className="text-lg text-gray-700">
            We help small businesses save time and money by automating everyday tasks with AI. If we don’t save you money, you don’t pay.
          </p>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-purple-700 transition">
              Get Your Free Workflow Audit
            </button>
            <button className="border border-purple-600 text-purple-700 px-6 py-3 rounded-2xl hover:bg-purple-100 transition">
              How It Works
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img src="/graph-automation-illustration.png" alt="Business Growth" className="w-full max-w-md" />
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-20 bg-white">
        <h2 className="text-3xl font-semibold text-center text-purple-800 mb-12">
          Here’s How Adaptaize Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "We Audit Your Business Processes",
              desc: "We examine your workflows to find automation opportunities."
            },
            {
              title: "We Build Smart AI Automations",
              desc: "From emails to invoices, we automate the repetitive work."
            },
            {
              title: "You Only Pay When You Save",
              desc: "No savings? No payment. Simple as that."
            }
          ].map((step, i) => (
            <div
              key={i}
              className="bg-purple-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-purple-700 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center text-purple-800 mb-12">
          Real Results. Real Savings.
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Linda R.",
              role: "Boutique Agency Owner",
              quote: "Adaptaize helped us cut down 40% of admin time — and we didn’t pay a cent until we saw the savings."
            },
            {
              name: "Marcus J.",
              role: "E-commerce Store Owner",
              quote: "Their automations saved me hours every week. Super easy process and incredible value."
            },
            {
              name: "Priya D.",
              role: "Consultant",
              quote: "I was skeptical, but they proved their worth in just 2 weeks. Zero upfront cost made it a no-brainer."
            }
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
            >
              <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
              <p className="font-semibold text-purple-700">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-purple-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Work Smarter — Without the Upfront Cost?
        </h2>
        <p className="mb-6">
          Get your free automation audit and start saving today.
        </p>
        <button className="bg-white text-purple-700 px-8 py-3 rounded-2xl font-semibold hover:bg-purple-100 transition">
          Get Your Free Audit
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-sm">© {new Date().getFullYear()} Adaptaize. All rights reserved.</p>
          <div className="space-x-6 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
