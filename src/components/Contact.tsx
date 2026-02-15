import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send ,Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");


  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});


  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Transmit Signal</span>
          </h2>
          <p className="text-muted-foreground text-lg">Send a message across the cosmos</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("sending");

            emailjs
              .send(
                "service_u1g0g7l",
                "template_w5wey89",
                {
                  from_name: form.name,
                  from_email: form.email,
                  message: form.message,
                },
                "rKRtF30uiSi9BNR-s"
              )
              .then(
                () => {
                  setStatus("success");
                  setForm({ name: "", email: "", message: "" });
                  setFocused(null);
                },
                () => {
                  setStatus("error");
                }
              );
          }}

        >
          {/* {[
            { id: "name", label: "Your Name", type: "text" },
            { id: "email", label: "Your Email", type: "email" },
          ].map((field) => (
            <div key={field.id} className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none font-display text-xs tracking-wider uppercase ${
                  focused === field.id
                    ? "-top-2.5 text-[10px] text-primary bg-card px-2"
                    : "top-4 text-muted-foreground"
                }`}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 pt-4 pb-3 text-foreground focus:outline-none focus:border-primary/50 focus:neon-glow transition-shadow"
                onFocus={() => setFocused(field.id)}
                onBlur={(e) => !e.target.value && setFocused(null)}
              />
            </div>
          ))} */}

      {[
          { id: "name", label: "Your Name", type: "text" },
          { id: "email", label: "Your Email", type: "email" },
        ].map((field) => (
          <div key={field.id} className="relative">
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none font-display text-xs tracking-wider uppercase ${
                focused === field.id || form[field.id as "name" | "email"]
                  ? "-top-2.5 text-[10px] text-primary bg-card px-2"
                  : "top-4 text-muted-foreground"
              }`}
            >
              {field.label}
            </label>
            <input
              type={field.type}
              value={form[field.id as "name" | "email"]}
              onChange={(e) =>
                setForm({ ...form, [field.id]: e.target.value })
              }
              className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 pt-6 pb-3 text-foreground focus:outline-none focus:border-primary/50 focus:neon-glow transition-shadow"
              onFocus={() => setFocused(field.id)}
              onBlur={() => setFocused(null)}
            />
          </div>
      ))}


          {/* <div className="relative">
            <label
              className={`absolute left-4 transition-all duration-300 pointer-events-none font-display text-xs tracking-wider uppercase ${
                focused === "message"
                  ? "-top-2.5 text-[10px] text-primary bg-card px-2"
                  : "top-4 text-muted-foreground"
              }`}
            >
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 pt-4 pb-3 text-foreground focus:outline-none focus:border-primary/50 focus:neon-glow transition-shadow resize-none"
              onFocus={() => setFocused("message")}
              onBlur={(e) => !e.target.value && setFocused(null)}
            />
          </div> */}


          <div className="relative">
          <label
            className={`absolute left-4 transition-all duration-300 pointer-events-none font-display text-xs tracking-wider uppercase ${
              focused === "message" || form.message
                ? "-top-2.5 text-[10px] text-primary bg-card px-2"
                : "top-4 text-muted-foreground"
            }`}
          >
            Message
          </label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full bg-muted/30 border border-border/50 rounded-lg px-4 pt-6 pb-3 text-foreground focus:outline-none focus:border-primary/50 focus:neon-glow transition-shadow resize-none"
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />
        </div>


          {/* <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase neon-glow hover:scale-[1.02] transition-transform whitespace-nowrap"
          >
            <Send className="w-4 h-4" />
            Launch Message
          </button>
        </motion.form> */}

        <button
      type="submit"
      disabled={status === "sending"}
      className={`w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm tracking-wider uppercase neon-glow transition-transform whitespace-nowrap ${
        status === "sending"
          ? "opacity-60 cursor-not-allowed"
          : "hover:scale-[1.02]"
      }`}
    >
      <Send className="w-4 h-4" />
      {status === "sending" ? "Sending..." : "Launch Message"}
    </button>


     {status === "success" && (
        <p className="text-green-400 text-sm text-center">
          ✅ Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          ❌ Something went wrong. Please try again.
        </p>
      )}
 


    </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-10"
        >
          {[
            { icon: Github, href: "https://github.com/YashPavaskar14", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/yashraj-pavaskar-8331a2283", label: "LinkedIn" },
            { icon: Mail,  href: "https://mail.google.com/mail/?view=cm&to=yashpavaskar123@gmail.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>


          {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-col items-center gap-3 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9511634313</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>yashpavaskar123@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Solapur, Maharashtra, India</span>
              </div>
            </motion.div>


      </div>
    </section>
  );
};

export default Contact;
