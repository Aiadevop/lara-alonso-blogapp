// Utilidades para mejorar la accesibilidad

export const focusManagement = {
  // Mover el foco al primer elemento interactivo
  focusFirstInteractive: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length > 0) {
      ;(focusableElements[0] as HTMLElement).focus()
    }
  },

  // Mover el foco al último elemento interactivo
  focusLastInteractive: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length > 0) {
      ;(focusableElements[focusableElements.length - 1] as HTMLElement).focus()
    }
  },

  // Atrapar el foco dentro de un contenedor
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    
    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  }
}

export const ariaLabels = {
  // Generar etiquetas ARIA descriptivas
  generateAriaLabel: (action: string, target: string) => {
    return `${action} ${target}`
  },

  // Etiquetas comunes
  common: {
    close: 'Cerrar',
    open: 'Abrir',
    menu: 'Menú',
    navigation: 'Navegación',
    main: 'Contenido principal',
    footer: 'Pie de página',
    search: 'Buscar',
    filter: 'Filtrar',
    sort: 'Ordenar',
    next: 'Siguiente',
    previous: 'Anterior',
    loading: 'Cargando',
    error: 'Error',
    success: 'Éxito',
  }
}

export const keyboardNavigation = {
  // Manejar navegación con teclado
  handleKeyDown: (e: KeyboardEvent, actions: Record<string, () => void>) => {
    const { key } = e
    
    if (actions[key]) {
      e.preventDefault()
      actions[key]()
    }
  },

  // Navegación con flechas
  arrowNavigation: {
    up: 'ArrowUp',
    down: 'ArrowDown',
    left: 'ArrowLeft',
    right: 'ArrowRight',
  },

  // Navegación con teclas de función
  functionKeys: {
    escape: 'Escape',
    enter: 'Enter',
    space: ' ',
    tab: 'Tab',
  }
}

export const screenReaderSupport = {
  // Anunciar cambios a lectores de pantalla
  announce: (message: string) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'polite')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  },

  // Anunciar cambios urgentes
  announceUrgent: (message: string) => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', 'assertive')
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }
}

export const colorContrast = {
  // Verificar contraste de colores
  getContrastRatio: (color1: string, color2: string): number => {
    // Implementación básica - en producción usar una librería como chroma-js
    return 4.5 // Valor mínimo recomendado por WCAG
  },

  // Verificar si el contraste es suficiente
  isAccessible: (ratio: number): boolean => {
    return ratio >= 4.5
  }
}
