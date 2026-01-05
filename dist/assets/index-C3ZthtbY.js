(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(e,t,s=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(a=>{n.setAttribute(a,String(t[a]))}),s.length&&s.forEach(a=>{const r=b(...a);n.appendChild(r)}),n};var g=([e,t,s])=>b(e,t,s);/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>Array.from(e.attributes).reduce((t,s)=>(t[s.name]=s.value,t),{}),y=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",k=e=>e.flatMap(y).map(s=>s.trim()).filter(Boolean).filter((s,n,a)=>a.indexOf(s)===n).join(" "),A=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,s,n)=>s.toUpperCase()+n.toLowerCase()),x=(e,{nameAttr:t,icons:s,attrs:n})=>{var u;const a=e.getAttribute(t);if(a==null)return;const r=A(a),i=s[r];if(!i)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const c=w(e),[h,m,f]=i,d={...m,"data-lucide":a,...n,...c},p=k(["lucide",`lucide-${a}`,c,n]);p&&Object.assign(d,{class:p});const v=g([h,d,f]);return(u=e.parentNode)==null?void 0:u.replaceChild(v,e)};/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=["svg",o,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=["svg",o,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=["svg",o,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=["svg",o,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=["svg",o,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=["svg",o,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=["svg",o,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=["svg",o,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=["svg",o,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.471.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=({icons:e={},nameAttr:t="data-lucide",attrs:s={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(a=>x(a,{nameAttr:t,icons:e,attrs:s})),t==="data-lucide"){const a=document.querySelectorAll("[icon-name]");a.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(a).forEach(r=>x(r,{nameAttr:"icon-name",icons:e,attrs:s})))}},F=document.querySelector("#app");F.innerHTML=`
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
`;O({icons:{Zap:N,ChevronRight:C,ShieldCheck:T,Clock:j,Cpu:L,BarChart3:M,MessageSquare:E,Globe:I,PhoneCall:z,ArrowRight:S}});window.addEventListener("scroll",()=>{const e=document.getElementById("navbar");window.scrollY>50?(e==null||e.classList.add("bg-brand-bg/80","backdrop-blur-xl","border-b","border-white/5","py-4"),e==null||e.classList.remove("py-6")):(e==null||e.classList.remove("bg-brand-bg/80","backdrop-blur-xl","border-b","border-white/5","py-4"),e==null||e.classList.add("py-6"))});const q={threshold:.1,rootMargin:"0px 0px -50px 0px"},R=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("active")})},q);document.querySelectorAll(".reveal").forEach(e=>R.observe(e));const l=document.getElementById("contact-form");l==null||l.addEventListener("submit",async e=>{e.preventDefault();const t=l.querySelector("button");if(!t)return;const s=t.innerHTML;t.innerHTML="Sending...",t.disabled=!0;const n=new FormData(l);try{const a=await fetch(l.action,{method:"POST",body:n,headers:{Accept:"application/json"}});if(a.ok)t.innerHTML="Request Sent!",t.classList.replace("bg-gradient-to-br","bg-green-600"),t.classList.add("scale-95"),l.reset();else{const r=await a.json();r.errors?t.innerHTML=r.errors.map(i=>i.message).join(", "):t.innerHTML="Error! Try again.",t.classList.add("bg-red-600")}}catch{t.innerHTML="Network Error! Try again.",t.classList.add("bg-red-600")}setTimeout(()=>{t.innerHTML=s,t.disabled=!1,t.classList.remove("bg-green-600","bg-red-600","bg-blue-600","scale-95")},5e3)});
