import './style.css'
import {
  createIcons,
  Zap,
  ChevronRight,
  ShieldCheck,
  Clock,
  Cpu,
  BarChart3,
  MessageSquare,
  Globe,
  PhoneCall,
  ArrowRight
} from 'lucide'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav id="navbar" class="fixed top-0 w-full z-50 py-6 transition-all duration-500">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-4 group cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
        <div class="relative w-16 h-16 overflow-hidden rounded-full shadow-2xl shadow-brand-accent/40 group-hover:scale-110 transition-transform duration-500">
          <img src="/logo-new.jpg" alt="Automize Flow Logo" class="absolute inset-0 w-full h-full object-cover scale-[1.25]">
        </div>
        <span class="text-3xl font-outfit font-extrabold tracking-tight">Automize<span class="text-brand-accent">Flow</span></span>
      </div>
      <div class="hidden md:flex items-center gap-10">
        <a href="#solutions" class="text-brand-text-secondary hover:text-white transition-colors font-medium text-sm tracking-wide">Solutions</a>
        <a href="#why" class="text-brand-text-secondary hover:text-white transition-colors font-medium text-sm tracking-wide">Why Us</a>
        <a href="#contact" class="btn-secondary py-2.5 px-6 rounded-xl text-sm leading-none">Book Discovery Call</a>
      </div>
    </div>
  </nav>

  <main>
    <!-- Background Elements -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="orb w-[600px] h-[600px] bg-brand-accent top-[-200px] left-[-200px]"></div>
      <div class="orb w-[500px] h-[500px] bg-brand-accent-secondary bottom-[-100px] right-[-100px]" style="animation-delay: -5s"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
            Consultant-Led AI Systems
          </div>
          
          <h1 class="reveal text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[1.05] mb-8 tracking-tighter" style="transition-delay: 200ms">
            Automate <span class="text-brand-accent">Smarter.</span><br>
            Move <span class="bg-gradient-to-r from-brand-accent to-brand-accent-secondary bg-clip-text text-transparent italic">Faster.</span>
          </h1>
          
          <p class="reveal text-xl md:text-2xl text-brand-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto font-medium" style="transition-delay: 400ms">
            AI-powered workflows that remove manual work and improve operational flow for forward-thinking businesses.
          </p>
          
          <div class="reveal flex flex-col sm:flex-row items-center justify-center gap-6" style="transition-delay: 600ms">
            <a href="#contact" class="btn-primary group text-lg px-10 py-5 no-underline">
              Book a Free Consultation
              <i data-lucide="chevron-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a href="#solutions" class="group flex items-center gap-2 text-brand-text-primary font-bold text-lg hover:text-brand-accent transition-colors no-underline">
              View Solutions
              <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div class="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- Value Prop Section -->
    <section class="py-32 relative">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="reveal glass p-8 glass-hover">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
              <i data-lucide="clock" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl mb-3 font-outfit">Eliminate Repetitive Work</h3>
            <p class="text-sm text-brand-text-secondary leading-relaxed">Stop wasting hours on manual data entry and repetitive admin tasks.</p>
          </div>
          
          <div class="reveal glass p-8 glass-hover" style="transition-delay: 100ms">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
              <i data-lucide="cpu" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl mb-3 font-outfit">Seamless App Connectivity</h3>
            <p class="text-sm text-brand-text-secondary leading-relaxed">Connect your CRM, email, and internal tools into a single automated flow.</p>
          </div>

          <div class="reveal glass p-8 glass-hover" style="transition-delay: 200ms">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
              <i data-lucide="zap" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl mb-3 font-outfit">Instant Lead Capture</h3>
            <p class="text-sm text-brand-text-secondary leading-relaxed">Never let a lead go cold. Capture and follow up with customers in seconds.</p>
          </div>

          <div class="reveal glass p-8 glass-hover" style="transition-delay: 300ms">
            <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-accent mb-6">
              <i data-lucide="bar-chart-3" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl mb-3 font-outfit">Scalable Operations</h3>
            <p class="text-sm text-brand-text-secondary leading-relaxed">Grow your output and service quality without increasing fixed headcount.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Section -->
    <section id="solutions" class="py-32 relative overflow-hidden">
      <!-- Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-24 reveal">
          <h2 class="text-5xl md:text-6xl mb-6 font-outfit">Expert Solutions for Modern Teams</h2>
          <p class="text-xl text-brand-text-secondary font-medium">We build high-performance automation systems that integrate deeply with your business logic.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Card 1 -->
          <div class="reveal glass p-10 glass-hover">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                <i data-lucide="cpu" class="w-7 h-7"></i>
              </div>
              <span class="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">Service</span>
            </div>
            <h3 class="text-3xl mb-4 font-outfit">Business Process Automation</h3>
            <p class="text-brand-text-secondary mb-8 leading-relaxed">Custom automated workflows built on n8n that connect over 500+ apps securely across your stack.</p>
            <div class="pt-8 border-t border-white/5 mb-8">
              <p class="italic text-brand-text-secondary/80">"I build reliable automations using n8n to eliminate repetitive work."</p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-sm text-brand-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                Event-based document orchestration
              </li>
              <li class="flex items-center gap-3 text-sm text-brand-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                Seamless CRM & Database Sync
              </li>
            </ul>
          </div>

          <!-- Card 2 -->
          <div class="reveal glass p-10 glass-hover" style="transition-delay: 200ms">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                <i data-lucide="message-square" class="w-7 h-7"></i>
              </div>
              <span class="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">Service</span>
            </div>
            <h3 class="text-3xl mb-4 font-outfit">AI Chatbots & Assistants</h3>
            <p class="text-brand-text-secondary mb-8 leading-relaxed">Knowledge-based assistants for FAQ, lead qualification, and internal support with strict safety boundaries.</p>
            <div class="pt-8 border-t border-white/5 mb-8">
              <p class="italic text-brand-text-secondary/80">"Simple AI assistants that answer questions and guide customers—without complexity."</p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-sm text-brand-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                24/7 Multi-channel support
              </li>
              <li class="flex items-center gap-3 text-sm text-brand-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                Automated meeting scheduling
              </li>
            </ul>
          </div>

          <!-- Card 3 -->
          <div class="reveal glass p-10 glass-hover">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                <i data-lucide="globe" class="w-7 h-7"></i>
              </div>
              <span class="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">Service</span>
            </div>
            <h3 class="text-3xl mb-4 font-outfit">AI-Powered Websites</h3>
            <p class="text-brand-text-secondary mb-8 leading-relaxed">Modern, high-conversion web architectures deeply integrated with your automated lead-capture systems.</p>
            <div class="pt-8 border-t border-white/5 mb-8">
              <p class="italic text-brand-text-secondary/80">"Your website becomes a lead-generating system, not just a brochure."</p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-sm text-brand-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                Highly responsive & fast loading
              </li>
              <li class="flex items-center gap-3 text-sm text-brand-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                Built-in ROI tracking metrics
              </li>
            </ul>
          </div>

          <!-- Card 4 (Highlight) -->
          <div class="reveal glass p-10 border-brand-accent/30 bg-brand-accent/5" style="transition-delay: 200ms">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-accent/20">
                <i data-lucide="phone-call" class="w-7 h-7"></i>
              </div>
              <span class="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase font-outfit">Differentiator</span>
            </div>
            <h3 class="text-3xl mb-4 font-outfit">AI Receptionist (Retell AI)</h3>
            <p class="text-brand-text-secondary mb-8 leading-relaxed">Human-like voice assistants that answer calls 24/7, qualify leads, and sync data instantly to your CRM.</p>
            <div class="pt-8 border-t border-white/10 mb-8">
              <p class="italic text-brand-text-primary/90 font-medium">"Never miss a call again—your AI receptionist works 24/7."</p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 text-sm text-brand-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                Smart call routing & notes
              </li>
              <li class="flex items-center gap-3 text-sm text-brand-text-secondary">
                <div class="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                Automated SMS follow-ups
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Section -->
    <section id="why" class="py-32 relative">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div class="reveal">
            <h2 class="text-5xl md:text-6xl mb-8 font-outfit tracking-tight">Why Automize Flow?</h2>
            <div class="space-y-10">
              <div class="flex gap-6 group">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <i data-lucide="shield-check" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="text-xl mb-2 font-bold font-outfit">Consultant-Led Approach</h4>
                  <p class="text-brand-text-secondary leading-relaxed">We don't just sell software. We design custom systems tailored to your specific logic, ensuring every automation serves a strategic purpose.</p>
                </div>
              </div>

              <div class="flex gap-6 group">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <i data-lucide="cpu" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="text-xl mb-2 font-bold font-outfit">Secure & Scalable Systems</h4>
                  <p class="text-brand-text-secondary leading-relaxed">Built using enterprise-grade frameworks that prioritize data security and are designed to grow effortlessly with your business.</p>
                </div>
              </div>

              <div class="flex gap-6 group">
                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <i data-lucide="bar-chart-3" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="text-xl mb-2 font-bold font-outfit">Focus on Outcomes (No Hype)</h4>
                  <p class="text-brand-text-secondary leading-relaxed">We focus on measurable ROI and practical results. No exaggerated AI claims—just efficient systems that work.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="reveal glass p-12 text-center relative overflow-hidden group" style="transition-delay: 200ms">
            <!-- Inner Glow -->
            <div class="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative z-10">
              <div class="text-7xl md:text-8xl font-outfit font-extrabold text-white mb-6 tracking-tighter">90%</div>
              <p class="text-xl text-brand-text-secondary leading-relaxed mb-8 max-w-sm mx-auto font-medium">Average reduction in manual administrative tasks for our consulting partners.</p>
              <div class="flex flex-wrap justify-center gap-4">
                <div class="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase shadow-sm">ROI Focused</div>
                <div class="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase shadow-sm">24/7 Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strong CTA Section -->
    <section class="py-32">
      <div class="container mx-auto px-6">
        <div class="reveal glass p-16 md:p-24 text-center relative overflow-hidden border-brand-accent/30 bg-brand-accent/5">
          <div class="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-accent-secondary/5 pointer-events-none"></div>
          
          <h2 class="text-5xl md:text-7xl mb-8 relative z-10 font-outfit tracking-tight">Turn Manual Work Into<br><span class="text-brand-accent underline decoration-brand-accent/30 underline-offset-8">Automated Flow.</span></h2>
          <p class="text-xl text-brand-text-secondary mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Ready to reclaim your time and scale of operations? Let's build a reliable automation roadmap for your business.
          </p>
          <a href="#contact" class="btn-primary px-10 py-5 text-xl relative z-10 group shadow-2xl shadow-brand-accent/40 no-underline inline-flex">
            Book a Free Automation Consultation
            <i data-lucide="arrow-right" class="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-20">
          <div class="reveal">
            <h2 class="text-5xl md:text-6xl mb-8 font-outfit tracking-tight">Let's Build Your System</h2>
            <p class="text-xl text-brand-text-secondary mb-12 leading-relaxed font-medium">
              Start your automation journey with a no-obligation workflow audit and discovery roadmap.
            </p>
            <div class="space-y-6">
              <div class="flex items-center gap-4 text-brand-text-secondary">
                <div class="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </div>
                <span class="font-medium">Fast expert response within 24 hours</span>
              </div>
              <div class="flex items-center gap-4 text-brand-text-secondary">
                <div class="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                  <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </div>
                <span class="font-medium">Strategic roadmap identifying ROI opportunities</span>
              </div>
            </div>
          </div>

          <div class="reveal" style="transition-delay: 200ms">
            <form id="contact-form" action="https://formspree.io/f/mbdlbwer" method="POST" class="glass p-8 md:p-12 space-y-10">
              <div class="grid md:grid-cols-2 gap-10">
                <div class="relative group">
                  <input type="text" id="name" name="name" required placeholder=" " class="peer w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white placeholder-transparent font-medium">
                  <label for="name" class="absolute left-0 top-3 text-brand-text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-accent cursor-text">Full Name</label>
                </div>
                <div class="relative group">
                  <input type="text" id="company" name="company" required placeholder=" " class="peer w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white placeholder-transparent font-medium">
                  <label for="company" class="absolute left-0 top-3 text-brand-text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-accent cursor-text">Company Name</label>
                </div>
              </div>
              <div class="relative group">
                <input type="email" id="email" name="email" required placeholder=" " class="peer w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white placeholder-transparent font-medium">
                <label for="email" class="absolute left-0 top-3 text-brand-text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-accent cursor-text">Work Email</label>
              </div>
              <div class="relative group">
                <textarea id="message" name="message" rows="3" required placeholder=" " class="peer w-full bg-transparent border-b-2 border-white/10 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white placeholder-transparent resize-none font-medium"></textarea>
                <label for="message" class="absolute left-0 top-3 text-brand-text-secondary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brand-accent cursor-text">What would you like to automate?</label>
              </div>
              <button type="submit" class="btn-primary w-full py-5 text-xl group shadow-xl">
                Send Request
                <i data-lucide="arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="py-20 border-t border-white/5 relative z-10 overflow-hidden">
    <!-- Footer Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
    
    <div class="container mx-auto px-6 text-center relative z-10">
      <div class="flex items-center justify-center gap-5 mb-10 group cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
        <div class="relative w-20 h-20 overflow-hidden rounded-full group-hover:scale-110 transition-transform duration-500">
          <img src="/logo-new.jpg" alt="Automize Flow Logo" class="absolute inset-0 w-full h-full object-cover scale-[1.25]">
        </div>
        <span class="text-4xl font-outfit font-extrabold tracking-tight">AutomizeFlow</span>
      </div>
      <p class="text-brand-text-secondary mb-6 max-w-md mx-auto font-medium leading-relaxed">Expert systems for business workflow automation and practical AI consulting.</p>
      <div class="flex justify-center gap-8 mb-12">
        <a href="#solutions" class="text-sm font-semibold text-brand-text-secondary hover:text-white transition-colors no-underline">Solutions</a>
        <a href="#why" class="text-sm font-semibold text-brand-text-secondary hover:text-white transition-colors no-underline">Why Automize Flow</a>
        <a href="#contact" class="text-sm font-semibold text-brand-text-secondary hover:text-white transition-colors no-underline">Contact</a>
      </div>
      <p class="text-xs font-bold tracking-[0.3em] uppercase text-white/10">© 2026 Automize Flow Agency</p>
    </div>
  </footer>
`

// Initialize Icons
createIcons({
  icons: {
    Zap,
    ChevronRight,
    ShieldCheck,
    Clock,
    Cpu,
    BarChart3,
    MessageSquare,
    Globe,
    PhoneCall,
    ArrowRight
  }
})

// Navbar Effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar')
  if (window.scrollY > 50) {
    nav?.classList.add('bg-brand-bg/80', 'backdrop-blur-xl', 'border-b', 'border-white/5', 'py-4')
    nav?.classList.remove('py-6')
  } else {
    nav?.classList.remove('bg-brand-bg/80', 'backdrop-blur-xl', 'border-b', 'border-white/5', 'py-4')
    nav?.classList.add('py-6')
  }
})

// Reveal Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    }
  })
}, observerOptions)

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// Form Logic
const form = document.getElementById('contact-form') as HTMLFormElement
form?.addEventListener('submit', async (e) => {
  e.preventDefault()
  const btn = form.querySelector('button')
  if (!btn) return

  const originalText = btn.innerHTML
  btn.innerHTML = 'Sending...'
  btn.disabled = true

  const formData = new FormData(form)

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      btn.innerHTML = 'Request Sent!'
      btn.classList.replace('bg-gradient-to-br', 'bg-green-600')
      btn.classList.add('scale-95')
      form.reset()
    } else {
      const data = await response.json()
      if (data.errors) {
        btn.innerHTML = data.errors.map((error: any) => error.message).join(', ')
      } else {
        btn.innerHTML = 'Error! Try again.'
      }
      btn.classList.add('bg-red-600')
    }
  } catch (error) {
    btn.innerHTML = 'Network Error! Try again.'
    btn.classList.add('bg-red-600')
  }

  setTimeout(() => {
    btn.innerHTML = originalText
    btn.disabled = false
    btn.classList.remove('bg-green-600', 'bg-red-600', 'bg-blue-600', 'scale-95')
  }, 5000)
})
