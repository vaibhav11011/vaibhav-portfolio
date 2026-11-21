import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F7FC] mb-3">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4" />
      {subtitle && (
        <p className="text-[#A2AEC2] text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}

