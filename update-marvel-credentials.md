# 🔧 Instrucciones para actualizar credenciales de Marvel API

## Paso 1: Obtener nuevas credenciales
1. Ve a https://developer.marvel.com/
2. Inicia sesión o crea una cuenta
3. Solicita nuevas claves de API
4. Obtendrás:
   - **Public Key** (nueva)
   - **Private Key** (nueva)

## Paso 2: Actualizar .env.local

Reemplaza estas líneas en tu archivo `.env.local`:

```env
# Marvel API (ACTUALIZAR ESTAS LÍNEAS)
DISNEY_PUBLIC_KEY="tu_nueva_public_key"
DISNEY_PRIVATE_KEY="tu_nueva_private_key"
TS_HASH="1000"
HASH_MD5_MARVEL="tu_nuevo_hash_md5"
```

## Paso 3: Generar nuevo hash MD5

Una vez que tengas las nuevas claves, genera el hash MD5:

```javascript
// Crear archivo temporal: generate-hash.js
const crypto = require('crypto');

const tsHash = "1000";
const privateKey = "tu_nueva_private_key";
const publicKey = "tu_nueva_public_key";

const hash = crypto.createHash('md5').update(tsHash + privateKey + publicKey).digest('hex');
console.log('Nuevo HASH_MD5_MARVEL:', hash);
```

## Paso 4: Actualizar HASH_MD5_MARVEL

Reemplaza el valor de `HASH_MD5_MARVEL` en `.env.local` con el nuevo hash generado.

## Paso 5: Reiniciar el servidor

```bash
# Detener el servidor actual
taskkill /f /im node.exe

# Reiniciar
npm run dev
```

## Paso 6: Probar

Visita: http://localhost:3000/frontend-development-tips/18 