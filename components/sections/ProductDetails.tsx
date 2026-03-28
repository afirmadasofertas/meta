'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Section {
  title: string
  content: React.ReactNode
}

const sections: Section[] = [
  {
    title: 'Features',
    content: (
      <ul className="flex flex-col gap-3">
        {[
          '12MP Ultra-Wide camera — capture photos and videos hands-free in landscape or portrait',
          'Open-ear speakers — immersive audio only you can hear, no earbuds needed',
          '5-microphone system — crystal-clear calls and hands-free Meta AI voice activation',
          'Up to 8h battery life; 32h total with the included charging case',
          'Fast charge — reach 50% battery in just 20 minutes',
          'IPX4 water resistance — ready for light rain and sweat',
          'Bluetooth 5.3 pairing via the Meta View companion app',
          'Available in Standard and Large fit; High Bridge and Low Bridge options',
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[14px] text-text-2 leading-[1.6]">
            <span className="mt-[6px] shrink-0 w-[6px] h-[6px] rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Meta AI',
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-[14px] text-text-2 leading-[1.65]">
          Just say <strong className="font-semibold text-text-1">&ldquo;Hey Meta&rdquo;</strong> to activate your hands-free AI assistant — no phone required.
        </p>
        <ul className="flex flex-col gap-3">
          {[
            'Get real-time answers, weather, news, and directions — all with your voice',
            'Live AI: point your gaze at anything and ask Meta AI what it sees',
            'Identify landmarks, read text, translate languages in real time',
            'Shazam music, make calls, send messages, set reminders — hands-free',
            'Powered by Meta Llama; requires phone connectivity and Meta AI availability in your region',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-[14px] text-text-2 leading-[1.6]">
              <span className="mt-[6px] shrink-0 w-[6px] h-[6px] rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: 'Product Details',
    content: (
      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {[
          ['Model', 'RW4012'],
          ['Generation', '2nd Generation'],
          ['Frame material', 'Injected acetate'],
          ['Lens width', '50 mm'],
          ['Bridge', '22 mm'],
          ['Temple length', '148 mm'],
          ['Weight', '49 g'],
          ['Camera', '12 MP Ultra-Wide'],
          ['Water resistance', 'IPX4'],
          ['Bluetooth', '5.3'],
          ['Battery (glasses)', 'Up to 8 h'],
          ['Battery (case)', '+24 h additional'],
          ['Compatibility', 'iOS 16+ / Android 9+'],
          ['Charging', 'USB-C'],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col gap-[2px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-4">{label}</span>
            <span className="text-[13px] font-semibold text-text-1">{value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Prescription Lenses',
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-[14px] text-text-2 leading-[1.65]">
          Ray-Ban Meta Wayfarer (Gen 2) is compatible with prescription lenses, available through our partner <strong className="font-semibold text-text-1">EyeBuyDirect</strong>.
        </p>
        <ul className="flex flex-col gap-3">
          {[
            'Single vision, progressive, and bifocal lenses available',
            'Anti-reflective, blue-light blocking, and photochromic (Transitions®) coatings',
            'Digital high-definition lenses for sharper vision',
            'Upload your prescription after completing your purchase',
            'Processing time: 7–10 business days',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-[14px] text-text-2 leading-[1.6]">
              <span className="mt-[6px] shrink-0 w-[6px] h-[6px] rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: 'Insurance & Prescription Upload',
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-[14px] text-text-2 leading-[1.65]">
          Your vision insurance benefits may apply toward the cost of prescription lenses. We accept most major vision plans.
        </p>
        <ul className="flex flex-col gap-3">
          {[
            'Upload your prescription directly during checkout or after purchase',
            'Accepted formats: PDF, JPG, PNG (max 10 MB)',
            'Your prescription must be valid and issued within the last 2 years',
            'Insurance reimbursement handled directly through your provider',
            'For questions, contact our support team — we\'ll guide you through the process',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-[14px] text-text-2 leading-[1.6]">
              <span className="mt-[6px] shrink-0 w-[6px] h-[6px] rounded-full bg-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: 'Included in Your Order',
    content: (
      <ul className="flex flex-col gap-3">
        {[
          'Ray-Ban Meta Wayfarer (Gen 2) smart glasses',
          'Charging case with built-in 2,000 mAh battery (up to 3 additional charges)',
          'USB-C to USB-A charging cable',
          'Premium microfiber cleaning cloth',
          'Quick start guide and safety information booklet',
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[14px] text-text-2 leading-[1.6]">
            <span className="mt-[6px] shrink-0 w-[6px] h-[6px] rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
]

function AccordionItem({ title, content }: Section) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'w-full flex items-center justify-between py-5 text-left',
          'font-mono text-[11px] font-semibold uppercase tracking-[0.14em]',
          'text-text-1 transition-colors hover:text-brand',
        )}
        aria-expanded={open}
      >
        {title}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-5 h-5 flex items-center justify-center text-text-3"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ProductDetails() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-16 py-12">
        <div className="border-t border-border">
          {sections.map((s) => (
            <AccordionItem key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
