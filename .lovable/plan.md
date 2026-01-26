
## Plano: Correção Urgente dos 3 Problemas de Tracking

### Problema 1 - index.html
**Situacao Atual (linhas 6-10):**
```html
<!-- UTMify Pixel -->
<script>
  window.pixelId = "6972b36161aa06c267bef831";
</script>
<script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"></script>
```

**Correcao:** Adicionar `utmifyConfig` para desativar eventos automaticos

```html
<!-- UTMify Pixel com configuração manual -->
<script>
  window.pixelId = "6972b36161aa06c267bef831";
  window.utmifyConfig = {
    autoPageView: false,
    autoViewContent: false,
    autoEvents: false,
    captureUtm: true
  };
</script>
<script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"></script>
```

---

### Problema 2 - src/vite-env.d.ts
**Situacao Atual:**
```typescript
/// <reference types="vite/client" />

interface Window {
  fbq?: (action: string, event: string, params?: object) => void;
  utmify?: {
    send: (event: string, params?: object) => void;
  };
}
```

**Correcao:** Adicionar tipagem completa para `utmify.config`, `pixelId` e `utmifyConfig`

```typescript
/// <reference types="vite/client" />

interface Window {
  fbq?: (action: string, event: string, params?: object) => void;
  utmify?: {
    send: (event: string, params?: object) => void;
    config?: (options: {
      autoPageView?: boolean;
      autoViewContent?: boolean;
      autoEvents?: boolean;
      captureUtm?: boolean;
    }) => void;
  };
  pixelId?: string;
  utmifyConfig?: {
    autoPageView?: boolean;
    autoViewContent?: boolean;
    autoEvents?: boolean;
    captureUtm?: boolean;
  };
}
```

---

### Problema 3 - src/pages/Resultado.tsx
**Situacao Atual:**
- Linha 1: `import { useEffect, useState } from 'react';` (falta `useRef`)
- Nao possui disparo manual de ViewContent
- Debug bar na linha 211-213 (opcional remover)

**Correcoes:**

1. **Linha 1** - Adicionar `useRef` ao import:
```typescript
import { useEffect, useState, useRef } from 'react';
```

2. **Apos linha 38** - Adicionar ref de controle:
```typescript
const viewContentSent = useRef(false);
```

3. **Apos o useEffect existente (linha 61)** - Adicionar novo useEffect para ViewContent:
```typescript
useEffect(() => {
  if (profile && !viewContentSent.current) {
    // Dispara ViewContent manual
    if (window.utmify?.send) {
      window.utmify.send('ViewContent', {
        content_name: profile.title,
        content_category: 'quiz_result'
      });
    }
    
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', {
        content_name: profile.title,
        content_category: 'quiz_result'
      });
    }
    
    viewContentSent.current = true;
    console.log('[TRACKING] ViewContent manual disparado');
  }
}, [profile]);
```

---

### Resumo das Alteracoes

| Arquivo | Linha(s) | Acao |
|---------|----------|------|
| `index.html` | 6-10 | Adicionar `utmifyConfig` com eventos automaticos desativados |
| `src/vite-env.d.ts` | Todo | Substituir com tipagem completa |
| `src/pages/Resultado.tsx` | 1 | Adicionar `useRef` ao import |
| `src/pages/Resultado.tsx` | 39 | Adicionar `viewContentSent = useRef(false)` |
| `src/pages/Resultado.tsx` | 62+ | Adicionar useEffect com disparo manual de ViewContent |

---

### Resultado Final Esperado

| Evento | Origem | Frequencia |
|--------|--------|------------|
| PageView | Manual (se necessario) | Controlado |
| ViewContent | `Resultado.tsx` useEffect | 1x por sessao |
| InitiateCheckout | `triggerCheckout` | 1x por sessao |
| Eventos automaticos UTMify | Desativados via config | 0x |
| SubscribedButtonClick | N/A | 0x |
