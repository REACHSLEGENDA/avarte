import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

const POSTS = [
  { id: 1, title: 'La psicología del color en la pintura infantil', category: 'Niños (7-15 años)', subcategory: 'Teoría del color', date: '2026-06-15', readTime: '5 min', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop', excerpt: 'Cómo los colores que eligen los niños reflejan su estado emocional y desarrollo cognitivo.' },
  { id: 2, title: 'Iniciando en el óleo: Mitos y verdades', category: 'Adultos (16-69 años)', subcategory: 'Materiales', date: '2026-06-10', readTime: '8 min', image: 'https://images.unsplash.com/photo-1544627836-822bfe460010?q=80&w=800&auto=format&fit=crop', excerpt: 'Todo lo que necesitas saber antes de comprar tu primer set de pintura al óleo.' },
  { id: 3, title: 'El arte como terapia en la tercera edad', category: 'Adultos Mayores (70+ años)', subcategory: 'Impacto del arte', date: '2026-06-05', readTime: '6 min', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop', excerpt: 'Beneficios cognitivos y motores de la práctica artística constante.' },
];

export function Blog() {
  return (
    <div className="bg-crema min-h-screen pb-24">
      {/* Header */}
      <section className="relative pt-32 pb-24 px-4 bg-noche text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-40 bg-[url('/studio/WhatsApp%20Image%202026-06-17%20at%209.54.37%20AM.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/30 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl text-white mb-6"
          >
            Blog Educativo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-crema/90 max-w-2xl mx-auto font-medium"
          >
            Reflexiones, técnicas y teoría del arte para acompañar tu proceso creativo.
          </motion.p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {['Todos', 'Niños (7-15 años)', 'Adultos (16-69 años)', 'Adultos Mayores (70+ años)'].map((cat, i) => (
              <button 
                key={cat}
                className={`px-4 py-2 text-sm font-medium transition-colors border ${i === 0 ? 'bg-white text-noche border-white' : 'bg-noche/50 backdrop-blur-sm text-white border-white/30 hover:border-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post (Magazine layout) */}
      <section className="px-4 max-w-7xl mx-auto mb-16">
        <div className="bg-white border border-noche/5 grid grid-cols-1 md:grid-cols-2 group cursor-pointer hover:shadow-xl transition-shadow">
          <div className="aspect-[4/3] md:aspect-auto bg-noche/5 overflow-hidden">
            <img src={POSTS[0].image} alt={POSTS[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex gap-3 text-xs font-mono font-semibold tracking-wider text-naranja mb-6">
              <span>{POSTS[0].category.toUpperCase()}</span>
              <span>•</span>
              <span>{POSTS[0].subcategory.toUpperCase()}</span>
            </div>
            <h2 className="font-display text-4xl text-noche mb-4">{POSTS[0].title}</h2>
            <p className="text-text-muted text-lg mb-8">{POSTS[0].excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-text-muted mt-auto pt-8 border-t border-noche/10">
              <span className="flex items-center gap-2"><Clock size={16} /> {POSTS[0].readTime}</span>
              <span className="flex items-center gap-2"><BookOpen size={16} /> Leer Artículo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.slice(1).map(post => (
            <article key={post.id} className="bg-white border border-noche/5 group cursor-pointer hover:shadow-xl transition-shadow flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-mono font-semibold tracking-wider text-teal mb-4 line-clamp-1">
                  {post.subcategory.toUpperCase()}
                </div>
                <h3 className="font-display text-2xl text-noche mb-3">{post.title}</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-text-muted mt-auto pt-6 border-t border-noche/5">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                  <span className="text-noche group-hover:text-naranja transition-colors flex items-center gap-1">Leer <ArrowRight size={14} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
