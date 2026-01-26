
## Plano: Simplificação e Centralização do Tracking de Checkout

### Objetivo
Centralizar a lógica de checkout em um único arquivo utilitário com trava de segurança, garantindo um único disparo de `InitiateCheckout` por sessão.

---

### Alterações

#### 1. Criar arquivo utilitário centralizado
**Arquivo:** `src/utils/checkoutAction.ts` (NOVO)

```typescript
// Variável fora da função para garantir trava única por sessão
let checkoutHasFired = false;

export const triggerCheckout = () => {
  if (checkoutHasFired) return;

  // 1. Dispara UTMfy (se existir)
  if (window.utmify?.send) {
    window.utmify.send('InitiateCheckout', {
      content_name: 'Protocolo RaonyPro',
      value: 47.90,
      currency: 'BRL'
    });
  }

  // 2. Dispara Facebook (se existir)
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Protocolo RaonyPro',
      value: 47.90,
      currency: 'BRL'
    });
  }

  checkoutHasFired = true;
  console.log('[TRACKING] InitiateCheckout enviado com sucesso');

  // 3. Redirecionamento
  window.open('https://lastlink.com/p/C2013B548/checkout-payment/', '_blank');
};
```

---

#### 2. Adicionar tipagem global segura
**Arquivo:** `src/vite-env.d.ts`

Atualizar para incluir tipos do `fbq` e `utmify`:
```typescript
/// <reference types="vite/client" />

interface Window {
  fbq?: (action: string, event: string, params?: object) => void;
  utmify?: {
    send: (event: string, params?: object) => void;
  };
}
```

---

#### 3. Atualizar página de Oferta
**Arquivo:** `src/pages/Oferta.tsx`

- Importar a função centralizada
- Substituir o `onClick` do botão CTA (linha 242)

**Antes:**
```tsx
onClick={() => window.open('https://lastlink.com/p/C2013B548/checkout-payment/', '_blank')}
```

**Depois:**
```tsx
import { triggerCheckout } from '@/utils/checkoutAction';
// ...
onClick={triggerCheckout}
```

---

#### 4. Atualizar componente FAQ
**Arquivo:** `src/components/offer/FAQ.tsx`

- Importar a função centralizada
- Substituir o `onClick` do botão CTA (linha 68)

**Antes:**
```tsx
onClick={() => window.open('https://lastlink.com/p/C2013B548/checkout-payment/', '_blank')}
```

**Depois:**
```tsx
import { triggerCheckout } from '@/utils/checkoutAction';
// ...
onClick={triggerCheckout}
```

---

#### 5. Limpar página de Resultado (já está limpa)
**Arquivo:** `src/pages/Resultado.tsx`

- Verificado: **NÃO há disparos manuais** de `fbq` ou `utmify` neste arquivo
- Os console.log de debug (linhas 49 e 53) podem ser mantidos ou removidos conforme preferência
- A UTMify irá automaticamente disparar `ViewContent` ao carregar esta página

---

### Resumo das Alterações

| Arquivo | Ação |
|---------|------|
| `src/utils/checkoutAction.ts` | CRIAR - função centralizada com trava |
| `src/vite-env.d.ts` | ATUALIZAR - adicionar tipos globais |
| `src/pages/Oferta.tsx` | ATUALIZAR - usar `triggerCheckout` no botão |
| `src/components/offer/FAQ.tsx` | ATUALIZAR - usar `triggerCheckout` no botão |
| `src/pages/Resultado.tsx` | SEM ALTERAÇÕES - já está limpo |

---

### Resultado Final

| Evento | Responsável | Momento | Trava |
|--------|-------------|---------|-------|
| PageView | UTMify (automático) | Cada navegação | N/A |
| ViewContent | UTMify (automático) | Cada página | N/A |
| InitiateCheckout | `triggerCheckout` (manual) | Clique no CTA | Variável de módulo (`checkoutHasFired`) |

---

### Seção Técnica

**Por que variável de módulo em vez de `useRef`?**

A variável `checkoutHasFired` está fora da função, no escopo do módulo. Isso garante que:
1. A trava persiste mesmo se o componente for desmontado/remontado
2. Funciona tanto no `Oferta.tsx` quanto no `FAQ.tsx` (mesma variável compartilhada)
3. Código mais simples sem necessidade de hooks React
