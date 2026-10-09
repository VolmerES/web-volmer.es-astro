import type { Accent } from "./projects";

/**
 * Clases Tailwind literales por color de acento.
 *
 * Se escriben completas a propósito: Tailwind escanea el código fuente en busca
 * de nombres de clase, así que una clase construida como `text-${color}` nunca
 * llegaría a generarse. Todo lo que aparezca aquí sí se compila.
 */
export interface AccentClasses {
  text: string;
  textHover: string;
  bgSoft: string;
  /** Fondo sólido para viñetas y puntos. Literal, no derivado de `text`. */
  dot: string;
  border: string;
  borderHover: string;
  glow: string;
  chip: string;
  button: string;
}

export const accents: Record<Accent, AccentClasses> = {
  cyan: {
    text: "text-neon-cyan",
    textHover: "group-hover:text-neon-cyan",
    bgSoft: "bg-neon-cyan/10",
    dot: "bg-neon-cyan",
    border: "border-neon-cyan/30",
    borderHover: "hover:border-neon-cyan/50",
    glow: "hover:shadow-[0_0_30px_rgba(5,217,232,0.12)]",
    chip: "text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20",
    button: "bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan group-hover:bg-neon-cyan group-hover:text-dark-bg",
  },
  pink: {
    text: "text-neon-pink",
    textHover: "group-hover:text-neon-pink",
    bgSoft: "bg-neon-pink/10",
    dot: "bg-neon-pink",
    border: "border-neon-pink/30",
    borderHover: "hover:border-neon-pink/50",
    glow: "hover:shadow-[0_0_30px_rgba(255,42,109,0.12)]",
    chip: "text-neon-pink bg-neon-pink/10 border-neon-pink/20",
    button: "bg-neon-pink/10 border-neon-pink/30 text-neon-pink group-hover:bg-neon-pink group-hover:text-white",
  },
  yellow: {
    text: "text-yellow-400",
    textHover: "group-hover:text-yellow-400",
    bgSoft: "bg-yellow-400/10",
    dot: "bg-yellow-400",
    border: "border-yellow-400/30",
    borderHover: "hover:border-yellow-400/50",
    glow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.12)]",
    chip: "text-yellow-300 bg-yellow-400/10 border-yellow-400/20",
    button: "bg-yellow-400/10 border-yellow-400/30 text-yellow-300 group-hover:bg-yellow-400 group-hover:text-black",
  },
  emerald: {
    text: "text-emerald-400",
    textHover: "group-hover:text-emerald-400",
    bgSoft: "bg-emerald-500/10",
    dot: "bg-emerald-500",
    border: "border-emerald-500/30",
    borderHover: "hover:border-emerald-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
    chip: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    button: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white",
  },
  violet: {
    text: "text-violet-400",
    textHover: "group-hover:text-violet-400",
    bgSoft: "bg-violet-500/10",
    dot: "bg-violet-500",
    border: "border-violet-500/30",
    borderHover: "hover:border-violet-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
    chip: "text-violet-300 bg-violet-500/10 border-violet-500/20",
    button: "bg-violet-500/10 border-violet-500/30 text-violet-300 group-hover:bg-violet-500 group-hover:text-white",
  },
  purple: {
    text: "text-purple-400",
    textHover: "group-hover:text-purple-400",
    bgSoft: "bg-purple-500/10",
    dot: "bg-purple-500",
    border: "border-purple-500/30",
    borderHover: "hover:border-purple-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]",
    chip: "text-purple-300 bg-purple-500/10 border-purple-500/20",
    button: "bg-purple-500/10 border-purple-500/30 text-purple-300 group-hover:bg-purple-500 group-hover:text-white",
  },
};
