const fs = require('fs');
const path = require('path');

// Función para actualizar una página
function updatePage(pagePath) {
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Reemplazar imports
    content = content.replace(
      /import \{ FooterBlack \} from "@\/app\/components\/footerblack";\s*import \{ FooterPost \} from "@\/app\/components\/footerpost";\s*import Navbarblack from "@\/app\/components\/navbar";/g,
      'import { Footer } from "@/app/components/ui/Footer";\nimport Navbar from "@/app/components/ui/Navbar";'
    );
    
    // Reemplazar bg-black por bg-white
    content = content.replace(/className="bg-black"/g, 'className="bg-white"');
    
    // Reemplazar Navbarblack por Navbar
    content = content.replace(/<Navbarblack \/>/g, '<Navbar />');
    
    // Reemplazar bg-gray-100 por bg-white en el article
    content = content.replace(/bg-gray-100 text-gray-900/g, 'bg-white text-gray-900');
    
    // Reemplazar FooterPost y FooterBlack por Footer
    content = content.replace(/<FooterPost \/>\s*<\/article>\s*<FooterBlack \/>/g, '<Footer />\n        </article>');
    content = content.replace(/<FooterPost \/>/g, '<Footer />');
    content = content.replace(/<FooterBlack \/>/g, '');
    
    // Escribir el archivo actualizado
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`✅ Actualizada: ${pagePath}`);
  } catch (error) {
    console.error(`❌ Error actualizando ${pagePath}:`, error.message);
  }
}

// Función para procesar todas las páginas
function updateAllPages() {
  const baseDir = 'app/frontend-development-tips';
  const pages = [];
  
  // Obtener todas las carpetas de páginas (1-19)
  for (let i = 1; i <= 19; i++) {
    const pagePath = path.join(baseDir, i.toString(), 'page.jsx');
    if (fs.existsSync(pagePath)) {
      pages.push(pagePath);
    }
  }
  
  console.log(`🔄 Actualizando ${pages.length} páginas...`);
  
  pages.forEach(pagePath => {
    updatePage(pagePath);
  });
  
  console.log('✅ ¡Todas las páginas han sido actualizadas!');
}

// Ejecutar el script
updateAllPages(); 