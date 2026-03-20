'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Precisa de internet para funcionar?',
    a: 'Não para as funções principais. A câmera e o áudio funcionam offline via Bluetooth. A internet é necessária apenas para sincronizar e compartilhar pelo app.',
  },
  {
    q: 'É compatível com meu celular?',
    a: 'Sim — Android e iOS. O app está disponível nas duas lojas e a configuração leva menos de 2 minutos.',
  },
  {
    q: 'Quanto dura a bateria?',
    a: 'Várias horas de uso contínuo para áudio, com autonomia reduzida durante gravações de vídeo. Suficiente para um dia completo no modo normal de uso.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem 30 dias para testar sem compromisso. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do valor pago — sem perguntas.',
  },
]

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'border-b border-border last:border-b-0',
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-sans text-[15px] font-medium text-text-1 leading-snug group-hover:text-brand transition-colors duration-200">
          {q}
        </span>
        <span
          className={cn(
            'shrink-0 flex items-center justify-center w-7 h-7 rounded-full border border-border',
            'transition-all duration-300',
            open ? 'bg-brand border-brand rotate-45' : 'bg-transparent rotate-0',
          )}
          aria-hidden="true"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={cn('transition-colors duration-300', open ? 'text-white' : 'text-text-3')}
          >
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-sans text-[14px] text-text-3 leading-[1.7] max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-brand">
            Dúvidas frequentes
          </p>
          <h2
            className="font-sans font-medium text-text-1 tracking-[-0.03em] leading-[1.1]"
            style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}
          >
            Tudo que você quer saber.
          </h2>
        </motion.div>

        {/* Acordeão */}
        <div className="divide-y divide-border">
          {faqs.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} idx={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
