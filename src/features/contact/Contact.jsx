import { useState } from "react";
import { Layout } from "../../components/layout/Layout";
import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";
import { Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    setStatus("sending");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <Section className="pt-32 pb-16">
        <Grid>
          {/* ... existing info side ... */}
          <div className="col-span-4 md:col-span-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-12">
              Let's Connect
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8">
              Ready to bring your ideas to life? Whether it's a new web
              application, brand redesign, or AI automation solution, I'd love
              to hear about your project.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="mailto:sangwajesly82@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--fg)] text-[var(--bg)] font-medium uppercase text-xs tracking-widest hover:bg-[var(--accent)] hover:text-white transition-all"
              >
                <Mail size={18} />
                Send Email
              </a>
              <a
                href="https://wa.me/237682833601"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 border border-[var(--fg)] text-[var(--fg)] font-medium uppercase text-xs tracking-widest hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Me
              </a>
            </div>

            <div className="space-y-6 pt-8 border-t border-[var(--border)]">
              <div>
                <h3 className="font-bold uppercase mb-2">Email</h3>
                <p className="text-[var(--muted)]">sangwajesly82@gmail.com</p>
              </div>
              <div>
                <h3 className="font-bold uppercase mb-2">Phone</h3>
                <p className="text-[var(--muted)]">+237 682 833 601</p>
              </div>
              <div>
                <h3 className="font-bold uppercase mb-2">Location</h3>
                <p className="text-[var(--muted)]">Bamenda, Cameroon</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center p-8 border border-[var(--accent)] bg-[var(--accent)]/5 text-center">
                <CheckCircle size={48} className="text-[var(--accent)] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[var(--muted)] mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setStatus("")}
                  className="text-xs uppercase tracking-widest font-bold hover:text-[var(--accent)]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New Contact Form Submission" />
                <input type="checkbox" name="botcheck" className="hidden" />
                
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-8 py-4 bg-[var(--accent)] text-white font-medium uppercase text-sm tracking-wider hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-xs text-center mt-2">
                    Something went wrong. Please try again or use the buttons above.
                  </p>
                )}
              </form>
            )}
          </div>
        </Grid>
      </Section>
    </Layout>
  );
};
