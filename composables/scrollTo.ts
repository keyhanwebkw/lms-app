export function scrollToSection(el: HTMLElement | { $el?: HTMLElement } | null | undefined, offset = 100): void {
  if (!el) return;

  const element = (el as any).$el ?? el; 
  if (element instanceof HTMLElement) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
}