# Alternativas a Supabase - Guía de Migración

## 🚨 Problema Actual
Tu proyecto de Supabase "Aiadevop's blogapp" ha sido pausado por inactividad (más de 90 días sin uso).

## 🔧 Soluciones Implementadas

### **1. Solución Temporal: Base de Datos en Memoria**
- ✅ **Implementado**: Servicio de posts usando JSON como base de datos
- ✅ **Funcional**: API endpoints funcionando correctamente
- ✅ **Escalable**: Estructura preparada para migración futura

### **2. Estructura Actual**
```
app/
├── lib/
│   └── postsService.js    # Servicio de posts en memoria
├── api/
│   ├── posts/route.js     # Endpoint para posts
│   └── categories/route.js # Endpoint para categorías
└── hooks/
    └── useApiData.js      # Hook para manejar datos
```

## 🚀 Alternativas Recomendadas

### **Opción 1: Restaurar Supabase (Recomendado)**

#### Pasos para Restaurar:
1. **Descargar Backup**:
   - Ve a tu dashboard de Supabase
   - Descarga el backup completo del proyecto

2. **Crear Nuevo Proyecto**:
   ```bash
   # Crear nuevo proyecto en Supabase
   # Nombre: blogapp-v2
   # Región: Europa (más cerca)
   ```

3. **Restaurar Datos**:
   ```bash
   # Usar pg_restore para restaurar
   pg_restore -h db.xxx.supabase.co -U postgres -d postgres backup.sql
   ```

4. **Actualizar Variables de Entorno**:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://tu-nuevo-proyecto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-nueva-anon-key
   ```

### **Opción 2: Migrar a PostgreSQL Local**

#### Instalar PostgreSQL:
```bash
# Windows (usando Chocolatey)
choco install postgresql

# O descargar desde postgresql.org
```

#### Configurar Base de Datos:
```sql
-- Crear base de datos
CREATE DATABASE blogapp;

-- Crear tabla posts
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  href VARCHAR(500) NOT NULL,
  description TEXT,
  category VARCHAR(100) NOT NULL,
  imageUrl VARCHAR(500) NOT NULL,
  alt VARCHAR(255),
  date VARCHAR(100) NOT NULL,
  datetime DATE NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  author_imageUrl VARCHAR(500) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **Opción 3: Migrar a MongoDB Atlas**

#### Configurar MongoDB:
1. Crear cuenta en [mongodb.com](https://mongodb.com)
2. Crear cluster gratuito
3. Obtener connection string

#### Implementar:
```javascript
// app/lib/mongodb.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

export async function connectDB() {
  if (!client.connect()) {
    await client.connect()
  }
  return client.db('blogapp')
}
```

### **Opción 4: Migrar a PlanetScale (MySQL)**

#### Ventajas:
- ✅ Base de datos MySQL serverless
- ✅ Plan gratuito generoso
- ✅ Excelente rendimiento
- ✅ Integración con Vercel

#### Configurar:
1. Crear cuenta en [planetscale.com](https://planetscale.com)
2. Crear base de datos
3. Obtener connection string

## 🔄 Migración Gradual

### **Fase 1: Preparación**
```javascript
// app/lib/database.js
export async function migrateToDatabase() {
  // Migrar desde JSON a base de datos real
  const posts = require('../post.json')
  
  for (const post of posts) {
    await insertPost(post)
  }
}
```

### **Fase 2: Implementación**
```javascript
// app/lib/postsService.js
export async function getAllPosts() {
  // Usar base de datos real en lugar de JSON
  return await db.query('SELECT * FROM posts ORDER BY datetime DESC')
}
```

### **Fase 3: Optimización**
- Implementar caché con Redis
- Añadir índices a la base de datos
- Optimizar consultas

## 📊 Comparación de Opciones

| Opción | Costo | Facilidad | Rendimiento | Escalabilidad |
|--------|-------|-----------|-------------|---------------|
| **Supabase** | Gratis/$$ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **PostgreSQL Local** | Gratis | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **MongoDB Atlas** | Gratis/$$ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **PlanetScale** | Gratis/$$ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

## 🎯 Recomendación Final

### **Para Desarrollo Rápido:**
1. **Restaurar Supabase** - Más fácil y rápido
2. **Mantener backup** - Para futuras migraciones

### **Para Producción Escalable:**
1. **PlanetScale** - Mejor rendimiento y escalabilidad
2. **MongoDB Atlas** - Flexibilidad en esquema

### **Para Control Total:**
1. **PostgreSQL Local** - Control completo
2. **Docker + PostgreSQL** - Para desarrollo

## 🛠️ Comandos Útiles

```bash
# Verificar estado de Supabase
supabase status

# Restaurar backup local
pg_restore -h localhost -U postgres -d blogapp backup.sql

# Migrar datos
npm run migrate-data

# Verificar conexión
npm run test-db
```

---

*Documentación creada por Lara Alonso @aiadevop* 