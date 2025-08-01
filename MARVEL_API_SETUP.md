# Configuración de la API de Marvel

## 🚀 Cómo obtener tus credenciales de Marvel

### 1. Crear cuenta en Marvel Developer
1. Ve a [developer.marvel.com](https://developer.marvel.com/)
2. Regístrate para obtener una cuenta gratuita
3. Acepta los términos y condiciones

### 2. Obtener tus API Keys
1. Una vez registrado, obtendrás:
   - **Public Key**: Clave pública para las peticiones
   - **Private Key**: Clave privada para generar el hash

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Marvel API Configuration
DISNEY_PUBLIC_KEY=tu_public_key_aqui
DISNEY_PRIVATE_KEY=tu_private_key_aqui
TS_HASH=1234567890
HASH_MD5_MARVEL=tu_hash_md5_aqui
```

### 4. Generar el Hash MD5

El hash se genera con la fórmula:
```
MD5(tsHash + privateKey + publicKey)
```

**Ejemplo:**
- tsHash: `1234567890`
- privateKey: `abc123def456`
- publicKey: `xyz789ghi012`

Hash: `MD5("1234567890abc123def456xyz789ghi012")`

### 5. Herramientas para generar MD5

- **Online**: [MD5 Hash Generator](https://www.md5hashgenerator.com/)
- **Node.js**: 
  ```javascript
  const crypto = require('crypto');
  const hash = crypto.createHash('md5').update(tsHash + privateKey + publicKey).digest('hex');
  ```

## 🔧 Configuración actual

### Datos de Demostración
Si no tienes credenciales configuradas, la aplicación mostrará datos de demostración con:
- ✅ 6 cómics de ejemplo
- ✅ Imágenes placeholder
- ✅ Funcionalidad completa
- ✅ Sin límites de API

### Datos Reales
Con credenciales configuradas obtendrás:
- ✅ Datos reales de Marvel
- ✅ Hasta 3000 llamadas diarias
- ✅ Imágenes oficiales
- ✅ Información completa

## 🚨 Límites de la API

- **Llamadas diarias**: 3000
- **Llamadas por segundo**: 5
- **Datos disponibles**: Cómics, personajes, series, etc.

## 📝 Ejemplo de uso

```javascript
// URL de ejemplo
const url = `https://gateway.marvel.com/v1/public/comics?ts=${tsHash}&apikey=${publicKey}&hash=${hash}&limit=20&offset=0`;

// Respuesta
{
  "code": 200,
  "status": "Ok",
  "data": {
    "results": [
      {
        "id": 123,
        "title": "Spider-Man",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
          "extension": "jpg"
        }
      }
    ]
  }
}
```

## 🎯 Próximos pasos

1. **Obtener credenciales** de Marvel Developer
2. **Configurar variables** de entorno
3. **Probar la API** con datos reales
4. **Implementar más endpoints** (personajes, series, etc.)

---

*Documentación creada por Lara Alonso @aiadevop* 