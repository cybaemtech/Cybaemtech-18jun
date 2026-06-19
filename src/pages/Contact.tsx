import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { contactSeoData } from "@/data/seo/contactSeo";
import { MapPin, Phone, Mail, ArrowRight, Send, User, MessageSquare, Building2, Globe2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { containerVariants, itemVariants } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// IMPORTANT: Paste the Web App URL you generated from Google Apps Script below!
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSkROovSFd8xyJ-_TydH_Y8zMHmB7KgMmc98lhxnisPqGjm34IvEoOc4_C-EX4lprlMw/exec";

const serviceCategories = [
  "Enterprise Software",
  "Website Designing",
  "IT Augmentation",
  "Cloud / Managed IT & Security",
  "Digital Growth Plan",
];

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),
  email: z.string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email format")
    .max(255, "Email must not exceed 255 characters"),
  mobile: z.string()
    .trim()
    .min(1, "Mobile number is required")
    .regex(/^\+?[0-9\s\-()]{7,20}$/, "Invalid mobile number format")
    .refine(val => /[0-9]/.test(val), "Mobile number must contain at least one digit"),
  city: z.string().optional(),
  category: z.string().min(1, "Please select a service category"),
  message: z.string()
    .trim()
    .optional()
    .default(""),
});

const faqs = [
  {
    question: "What services does Cybaem Tech provide?",
    answer:
      "Cybaem Tech is a one-stop IT, Software Product Development (NPD), Networking, and Digital Marketing company in India. We specialize in Digital Marketing Services (SEO, SMM, PPC, Branding), IT Infrastructure Management, Server Implementation & Support (Windows & Linux), Microsoft 365 Services, Cloud Hosting Solutions, Website Development, and Cybersecurity Services. Our goal is to empower businesses with end-to-end technology and marketing solutions that deliver measurable growth.",
  },
  {
    question: "How quickly will you respond?",
    answer:
      "We typically respond to all inquiries within 2-4 business hours. For urgent matters, please call us directly at +91 90 2854 1383.",
  },
  {
    question: "Do you offer a free initial consultation?",
    answer:
      "Yes, we provide a complimentary 30-minute consultation to understand your requirements and discuss how our services can benefit your business.",
  },
  {
    question: "Can you sign an NDA before we share details?",
    answer:
      "Absolutely. We understand the importance of confidentiality and are happy to sign a Non-Disclosure Agreement before discussing your project details.",
  },
  {
    question: "What engagement models do you support?",
    answer:
      "We offer flexible engagement models including project-based, dedicated team, staff augmentation, and managed services to suit your specific needs and budget.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-deployment support including maintenance, updates, monitoring, and technical assistance based on agreed SLAs.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We serve various industries including healthcare, finance, e-commerce, manufacturing, education, and government sectors with tailored technology solutions.",
  },
];

const contactCards = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["Suratwala Mark Plazzo, Hinjawadi,", "Pune, Maharashtra 411057"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["Business: +91-9028541383", "Business: 020 2069010200", "Career & Support: +91 8484815905"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["sales@cybaemtech.com"],
    href: "mailto:sales@cybaemtech.com",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", city: "", category: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSending(true);
    try {
      const formData = new URLSearchParams();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.mobile);
      formData.append("city", form.city);
      formData.append("category", form.category);
      formData.append("message", form.message);
      formData.append("sourcePage", window.location.href);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      // With no-cors, the response is opaque, so we assume success if no network error occurred.
      setForm({ name: "", email: "", mobile: "", city: "", category: "", message: "" });
      setShowSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={contactSeoData.title}
        description={contactSeoData.description}
        canonical={contactSeoData.canonical}
        keywords={contactSeoData.keywords}
        ogDescription={contactSeoData.ogDescription}
        ogImageAlt={contactSeoData.ogImageAlt}
        twitterDescription={contactSeoData.twitterDescription}
        twitterImageAlt={contactSeoData.twitterImageAlt}
        jsonLd={contactSeoData.jsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden" style={{ backgroundColor: "hsl(var(--primary))" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-foreground blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary-foreground blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="max-w-2xl"
            >
              <motion.span
                variants={itemVariants}
                className="text-xs font-bold tracking-[0.2em] uppercase text-[#60A5FA] mb-6 block"
              >
                GET IN TOUCH
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
              >
                Connect with our<br />IT Service technical<br />leadership
              </motion.h1>
              <motion.div variants={itemVariants} className="pl-4 border-l-2 border-[#60A5FA]">
                <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                  Submit your inquiry, download case studies or send us a quote — we promise to respond within 24 hours.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <img
                src="/images/contact-hero.avif"
                alt="Cybaem Tech IT Team"
                className="w-full max-w-[550px] rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.2)] border-[6px] border-white/10 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form + Cards Section */}
      <section ref={formRef} className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start"
          >
            {/* Form */}
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl border-2 border-blue-100 shadow-lg p-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2 text-gray-700">
                  <User size={16} className="text-[#004E98]" /> Full Name
                </Label>
                <Input
                  id="name" name="name" placeholder="Enter your name"
                  value={form.name} onChange={handleChange}
                  className="h-12 bg-white border-gray-200"
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2 text-gray-700">
                  <Mail size={16} className="text-[#004E98]" /> Work Email ID
                </Label>
                <Input
                  id="email" name="email" type="email" placeholder="Enter your email here"
                  value={form.email} onChange={handleChange}
                  className="h-12 bg-white border-gray-200"
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-sm font-semibold flex items-center gap-2 text-gray-700">
                  <Phone size={16} className="text-[#004E98]" /> Contact Number
                </Label>
                <Input
                  id="mobile" name="mobile" type="tel" placeholder="Enter Mobile No."
                  value={form.mobile} onChange={handleChange}
                  className="h-12 bg-white border-gray-200"
                />
                {errors.mobile && <p className="text-sm text-destructive">{errors.mobile}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-semibold flex items-center gap-2 text-gray-700">
                  <MapPin size={16} className="text-[#004E98]" /> City or Location
                </Label>
                <Input
                  id="city" name="city" placeholder="Enter City Name"
                  value={form.city} onChange={handleChange}
                  className="h-12 bg-white border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-medium tracking-[0.15em] uppercase text-gray-500 mb-1 block">
                  SERVICE CATEGORY
                </Label>
                <Select value={form.category} onValueChange={(value) => setForm({ ...form, category: value })}>
                  <SelectTrigger className="h-12 bg-white border-gray-200">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-sm text-destructive">{errors.category}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold flex items-center gap-2 text-gray-700">
                  <MessageSquare size={16} className="text-[#004E98]" /> How can we help you?
                </Label>
                <Textarea
                  id="message" name="message" placeholder="Let us know your concerns..."
                  value={form.message} onChange={handleChange}
                  className="min-h-[120px] bg-white border-gray-200 resize-none"
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit" disabled={sending}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-[#004E98] text-white rounded-md hover:bg-[#00387B] transition-colors disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </motion.form>

            {/* Right Side Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-sm overflow-hidden relative">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      <Building2 size={28} className="text-[#004E98]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#004E98] mb-2">Head Office Address</h3>
                      <div className="flex items-start gap-2 text-sm text-gray-700">
                        <MapPin size={16} className="text-[#004E98] mt-0.5 shrink-0" />
                        <p>Suratwala Mark Plazzo, Hinjawadi,<br />Pune, Maharashtra 411057</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#004E98] font-semibold text-sm">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100"><Phone size={14} /></div>
                        Call Us
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 pl-2">
                        <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">✓</div> Business: +91 9028541383</li>
                        <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">✓</div> Business: 020 2069010200</li>
                        <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">✓</div> Career & Support: +91 8484815905</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#004E98] font-semibold text-sm">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100"><Mail size={14} /></div>
                        Email Us
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 pl-2">
                        <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">✓</div> sales@cybaemtech.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border-2 border-blue-100 shadow-sm overflow-hidden relative">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                      <Globe2 size={28} className="text-[#004E98]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#004E98] mb-2">North America Office</h3>
                      <div className="text-sm text-gray-700">
                        <p>In Association with</p>
                        <p className="font-semibold text-gray-900 my-1">RMDG Technology Consultants LLC</p>
                        <p>16107 Kensington Drive, Suite 227<br />Sugar Land, TX 77479, United States</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#004E98] font-semibold text-sm">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100"><Phone size={14} /></div>
                        Call Us
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 pl-2">
                        <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">✓</div> Tel: +1 (713) 234-7916</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#004E98] font-semibold text-sm">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100"><Mail size={14} /></div>
                        Email Us
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700 pl-2">
                        <li className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]">✓</div> ralph@cybaemtech.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 flex items-center justify-center gap-4">
            <div className="h-px bg-blue-200 w-16"></div>
            <div className="w-2 h-2 rounded-full bg-[#004E98]"></div>
            <h2 className="font-display text-3xl font-bold text-gray-900">Find Us Here</h2>
            <div className="w-2 h-2 rounded-full bg-[#004E98]"></div>
            <div className="h-px bg-blue-200 w-16"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              {/* <div className="bg-white border text-blue` py-3 px-6 flex items-center gap-2 font-semibold">
                <MapPin size={18} /> Head Office – Pune, India
              </div> */}
              <div className="h-64 relative">
                <iframe
                  title="Pune Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.635261367137!2d73.74575887496471!3d18.59047548251667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b71e64b665df%3A0xf2de2df843c281ce!2sCybaem%20Tech!5e0!3m2!1sen!2sin!4v1758686264653!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                ></iframe>
              </div>
              <div className="p-4 flex items-center justify-between border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">CYBAEM TECH PRIVATE LIMITED</h4>
                    <p className="text-xs text-gray-500 mt-1">Suratwala Mark Plazzo, Hinjawadi, Pune, Maharashtra 411057</p>
                  </div>
                </div>
                <Building2 size={28} className="text-blue-200 shrink-0" />
              </div>
            </div>

            {/* Map 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              {/* <div className="bg-[#004E98] text-white py-3 px-6 flex items-center gap-2 font-semibold">
                <MapPin size={18} /> North America Office – Sugar Land, TX
              </div> */}
              <div className="h-64 relative">
                <iframe
                  title="US Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.862378873724!2d-95.6146244244253!3d29.665725275116744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e6761dbb0a03%3A0x6b801a6104bc1ec9!2s16107%20Kensington%20Dr%20%23227%2C%20Sugar%20Land%2C%20TX%2077479%2C%20USA!5e0!3m2!1sen!2sin!4v1718854497645!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                ></iframe>
              </div>
              <div className="p-4 flex items-center justify-between border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">CYBAEM TECH PRIVATE LIMITED</h4>
                    <p className="text-xs text-gray-500 mt-1">16107 Kensington Drive, Suite 227, Sugar Land, TX 77479, United States</p>
                  </div>
                </div>
                <Globe2 size={28} className="text-blue-200 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="section-border py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto"
          >
            <motion.span
              variants={itemVariants}
              className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4 block text-center"
            >
              Frequently Asked Questions
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl lg:text-4xl font-bold leading-tight mb-4 text-center"
            >
              Got Questions? We've Got Answers
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground text-center mb-12">
              Get answers to common questions about our services and solutions.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="glass-panel rounded-xl px-6 border">
                    <AccordionTrigger className="text-left font-display font-semibold text-base hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-2xl p-10 lg:p-16 text-center"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Let's discuss how CYBAEM TECH can help you optimize operations, enhance security, and achieve scalable
              business growth.
            </p>
            <a
              href="https://wa.me/918530171515?text=Hi%20Cybaem%20Tech%2C%20I%20am%20reaching%20out%20to%20you%20for%20the%20services%20-%20Software%20Product%20Development%2C%20Managed%20IT%20Services%2C%20Website%20Designing%2C%20Digital%20Marketing%2C%20IT%20Augmentation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-primary-foreground text-primary rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us Today
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Thank You Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="items-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle className="text-2xl font-display font-bold">Thank You!</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground leading-relaxed">
              Your message has been sent successfully. Our senior team will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setShowSuccess(false)}
            className="mt-4 inline-flex items-center justify-center px-8 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Got it
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
