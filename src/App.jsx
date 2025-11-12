import React from "react";
import { motion } from "framer-motion";
import { Instagram, Phone, CalendarDays, Sparkles, MapPin, Gift, Star, Heart, Clock } from "lucide-react";

// =============================================
// Ipanema Estética – Landing Page de Natal
// Cores: primária #e19daa e branco
// Endereço: Rua Jupati 500, Campo Grande, Rio de Janeiro
// Agendamento: https://ipanemaestetica.booksy.com/a
// WhatsApp: +55 21 997775988 (abre conversa)
// Instagram: https://www.instagram.com/ipanemaestetica.br/
// Logo: substitua o placeholder <img src="/LogoIpanema.png" alt="Ipanema Estética" className="h-10 w-auto" /> pelo seu arquivo
//        (ex.: <img src="/logo-ipanema.png" alt="Ipanema Estética" className="h-10" />)
// =============================================

const PRIMARY = "#e19daa";
const BOOKSY_URL = "https://ipanemaestetica.booksy.com/a";
const WHATS_URL = "https://wa.me/5521997775988";
const IG_URL = "https://www.instagram.com/ipanemaestetica.br/";

function LogoPlaceholder() {
  return (
    <div
      className="h-10 w-10 rounded-full grid place-items-center font-semibold text-white"
      style={{ backgroundColor: PRIMARY }}
      aria-label="Logo Ipanema Estética"
      title="Troque por sua logo"
    >
      IE
    </div>
  );
}

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>{children}</section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: "#fff", color: PRIMARY, boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
    <Sparkles className="h-3 w-3" /> {children}
  </span>
);

const Button = ({ href, children, variant = "primary", icon: Icon }) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-transform active:scale-[0.98]";
  const styles = {
    primary: { backgroundColor: PRIMARY, color: "#fff" },
    outline: { border: `2px solid ${PRIMARY}`, color: PRIMARY, backgroundColor: "#fff" },
  };
  return (
    <a href={href} target="_blank" rel="noreferrer" className={base} style={styles[variant]}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </a>
  );
};

const Card = ({ children }) => (
  <div className="rounded-3xl p-6 bg-white shadow-sm ring-1 ring-black/5">{children}</div>
);

const ChristmasRibbon = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -right-32 -top-16 rotate-12 w-[420px] h-[420px] rounded-full opacity-15" style={{ background: "radial-gradient(closest-side, rgba(225,157,170,.35), transparent)" }} />
    <div className="absolute -left-24 top-1/3 -rotate-6 w-[320px] h-[320px] rounded-full opacity-15" style={{ background: "radial-gradient(closest-side, rgba(225,157,170,.25), transparent)" }} />
  </div>
);

const Snow = () => (
  <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
    {Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-white/90"
        style={{
          left: `${Math.random() * 100}%`,
          top: `-${Math.random() * 100}%`,
          animation: `snowfall ${6 + Math.random() * 8}s linear ${Math.random() * 6}s infinite`,
          boxShadow: "0 0 10px rgba(255,255,255,0.6)",
        }}
      />
    ))}
    <style>{`
      @keyframes snowfall {
        0% { transform: translateY(0) }
        100% { transform: translateY(140vh) }
      }
    `}</style>
  </div>
);

export default function LandingIpanema() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 selection:bg-pink-100">
      <Snow />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/LogoIpanema.png" alt="Ipanema Estética" className="h-10 w-auto" />
            <span className="font-semibold tracking-tight">Ipanema Estética</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="hover:opacity-80">Serviços</a>
            <a href="#pacotes" className="hover:opacity-80">Pacotes de Natal</a>
            <a href="#depoimentos" className="hover:opacity-80">Depoimentos</a>
            <a href="#localizacao" className="hover:opacity-80">Localização</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button href={BOOKSY_URL} icon={CalendarDays}>Agendar</Button>
            <Button href={WHATS_URL} icon={Phone} variant="outline">WhatsApp</Button>
          </div>
        </div>
      </header>

      {/* Hero Natal */}
      <div className="relative bg-[radial-gradient(circle_at_20%_20%,#ffe9ef,transparent_40%),linear-gradient(180deg,#fff,rgba(225,157,170,0.08))]">
        <ChristmasRibbon />
        <Section className="pt-16 pb-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge>Especial de Fim de Ano</Badge>
              <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
                Natal de pele radiante
                <span className="block" style={{ color: PRIMARY }}>no seu melhor momento</span>
              </h1>
              <p className="mt-4 text-neutral-600 max-w-prose">
                As datas mais iluminadas do ano pedem cuidado e autoestima. Prepare-se para as festas com protocolos
                sob medida e pacotes sazonais com condições especiais.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button href={BOOKSY_URL} icon={CalendarDays}>Agendar agora</Button>
                <Button href={WHATS_URL} icon={Phone} variant="outline">Falar no WhatsApp</Button>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
                <div className="inline-flex items-center gap-2"><Star size={16} style={{ color: PRIMARY }} /> Atendimento humanizado</div>
                <div className="inline-flex items-center gap-2"><Heart size={16} style={{ color: PRIMARY }} /> Protocolos personalizados</div>
                <div className="inline-flex items-center gap-2"><Clock size={16} style={{ color: PRIMARY }} /> Horários flexíveis</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem]" style={{ background: `conic-gradient(from 180deg at 50% 50%, ${PRIMARY}33, transparent 60%)`, filter: "blur(18px)" }} />
                <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-xl ring-1 ring-black/5">
                  <div className="aspect-[4/3] grid place-items-center bg-[url('https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1600&auto=format&fit=crop')] bg-cover">
                    <div className="backdrop-blur-sm bg-white/40 rounded-2xl px-4 py-2" style={{ border: `1px solid ${PRIMARY}55` }}>
                      <span className="text-sm font-medium" style={{ color: PRIMARY }}>Presenteie autoestima</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>

      {/* Serviços */}
      <Section id="servicos" className="py-14">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">Serviços em destaque</h2>
          <p className="text-neutral-600 mt-2">Seleção pensada para brilhar nas confraternizações e fotos de fim de ano.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Limpeza de pele glow", desc: "Purificação profunda com hidratação intensiva para viço imediato.", perk: "Ideal pré-eventos" },
            { title: "Peeling químico suave", desc: "Textura uniforme e luminosidade com mínima descamação.", perk: "Pele renovada" },
            { title: "Drenagem linfática", desc: "Conforto, leveza e contorno para dias cheios.", perk: "Bem-estar" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl grid place-items-center" style={{ backgroundColor: `${PRIMARY}22`, color: PRIMARY }}>
                    <Gift className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{s.desc}</p>
                    <div className="mt-3 text-xs inline-flex items-center gap-1 rounded-full px-3 py-1" style={{ backgroundColor: `${PRIMARY}15`, color: PRIMARY }}>{s.perk}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pacotes Natal */}
      <div className="bg-neutral-50">
        <Section id="pacotes" className="py-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold">Pacotes de Natal</h2>
            <p className="text-neutral-600 mt-2">Condições sazonais para presentear você ou quem você ama.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Brilho Noel", price: "R$ 249", items: ["Limpeza de pele glow", "Máscara bioativada", "LED terapia"], featured: false },
              { name: "Árvore de Luz", price: "R$ 399", items: ["Peeling suave", "Hidraglow", "Revitalização"], featured: true },
              { name: "Feliz Corpo Novo", price: "R$ 329", items: ["Drenagem linfática", "Massagem relaxante", "Aromaterapia"], featured: false },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <div className={`rounded-3xl p-6 shadow-sm ring-1 ring-black/5 ${p.featured ? "bg-white" : "bg-white"}`}>
                  {p.featured && <div className="mb-3"><Badge>Mais querido</Badge></div>}
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-2xl font-extrabold" style={{ color: PRIMARY }}>{p.price}</p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    {p.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-2"><Star className="h-4 w-4 mt-0.5" style={{ color: PRIMARY }} /> {it}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-2">
                    <Button href={BOOKSY_URL} icon={CalendarDays}>Reservar</Button>
                    <Button href={WHATS_URL} icon={Phone} variant="outline">Tirar dúvidas</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Depoimentos */}
      <Section id="depoimentos" className="py-14">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold">O que nossas clientes dizem</h2>
          <p className="text-neutral-600 mt-2">Resultados reais, cuidado de verdade.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Marina", text: "Fiz a limpeza glow antes da ceia e a pele ficou maravilhosa nas fotos!" },
            { name: "Camila", text: "A drenagem salvou meu dezembro corrido. Saí leve e relaxada." },
            { name: "Priscila", text: "Equipe atenciosa e explicativa. Adorei o pacote Árvore de Luz." },
          ].map((d, i) => (
            <Card key={i}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full grid place-items-center text-white" style={{ backgroundColor: PRIMARY }}>{d.name[0]}</div>
                <div className="font-semibold">{d.name}</div>
              </div>
              <p className="mt-3 text-sm text-neutral-700">{d.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Localização e CTA */}
      <div className="bg-neutral-50">
        <Section id="localizacao" className="py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Venha nos visitar</h2>
            <p className="mt-2 text-neutral-700">Rua Jupati 500, Campo Grande, Rio de Janeiro</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href={BOOKSY_URL} icon={CalendarDays}>Agendar horário</Button>
              <Button href={WHATS_URL} icon={Phone} variant="outline">Chamar no Whats</Button>
              <a href={IG_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: PRIMARY }} /> Fácil acesso em Campo Grande</li>
              <li className="flex items-center gap-2"><Heart className="h-4 w-4" style={{ color: PRIMARY }} /> Ambiente acolhedor e higienizado</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" style={{ color: PRIMARY }} /> Horários estendidos em dezembro</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white">
            <iframe
              title="Mapa Ipanema Estética"
              src="https://www.google.com/maps?q=Rua%20Jupati%20500%2C%20Campo%20Grande%2C%20Rio%20de%20Janeiro&output=embed"
              className="w-full h-[360px]"
              loading="lazy"
            />
          </div>
        </Section>
      </div>

      {/* Rodapé */}
      <footer className="border-t border-neutral-200">
        <Section className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/LogoIpanema.png" alt="Ipanema Estética" className="h-10 w-auto" />
            <div>
              <div className="font-semibold">Ipanema Estética</div>
              <div className="text-xs text-neutral-600">Rua Jupati 500 · Campo Grande · Rio de Janeiro</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href={BOOKSY_URL} className="hover:opacity-80">Agende online</a>
            <span className="text-neutral-300">•</span>
            <a href={WHATS_URL} className="hover:opacity-80">WhatsApp</a>
            <span className="text-neutral-300">•</span>
            <a href={IG_URL} className="hover:opacity-80">Instagram</a>
          </div>
        </Section>
      </footer>

      {/* Estilos utilitários */}
      <style>{`
        :root { --primary: ${PRIMARY}; }
        .text-primary { color: var(--primary); }
        .bg-primary { background-color: var(--primary); }
      `}</style>
    </div>
  );
}
