# FUTURO — English Future Tenses for Spanish Speakers

Aplicación didáctica y rigurosa sobre los tiempos futuros en inglés, fundamentada en la gramática de **Renaat Declerck** (*Tense in English: Its Structure and Use in Discourse*), con estética modernista suiza.

---

## 🚀 Despliegue en GitHub Pages

Este proyecto ya está preconfigurado para funcionar en **GitHub Pages** sin problemas de rutas ni 404s:
- En `vite.config.ts`, la propiedad `base: './'` garantiza que todos los scripts, estilos y recursos carguen con rutas relativas, sin importar si tu repositorio se llama `futuro`, `english-tenses` o si está en la raíz de tu dominio.
- En `public/.nojekyll`, se evita que el motor Jekyll de GitHub bloquee los archivos estáticos generados por Vite.

---

### Opción 1: Despliegue Automático con GitHub Actions (Recomendado)

El archivo `.github/workflows/deploy.yml` ya está incluido en el repositorio. Para activarlo:

1. Ve a tu repositorio en GitHub.
2. Haz clic en **Settings** (Configuración) > pestaña **Pages** (en el menú lateral izquierdo).
3. En la sección **Build and deployment** > **Source**, selecciona:
   - **GitHub Actions**
4. Cada vez que hagas un `git push` a la rama `main` o `master`, GitHub Actions compilará y publicará la aplicación automáticamente en:
   ```
   https://<tu-usuario>.github.io/<nombre-del-repo>/
   ```

---

### Opción 2: Despliegue Manual con `npm run deploy`

También puedes desplegar usando la librería `gh-pages`:

1. Asegúrate de tener tu repositorio remoto configurado en Git:
   ```bash
   git remote add origin https://github.com/<tu-usuario>/<nombre-del-repo>.git
   ```
2. Ejecuta el comando:
   ```bash
   npm run deploy
   ```
3. Esto compilará el proyecto (`npm run build`) y subirá la carpeta `dist/` automáticamente a la rama `gh-pages` de tu repositorio.
4. En GitHub > **Settings** > **Pages**, selecciona la rama `gh-pages` y carpeta `/ (root)`.
