

## Plano: Atualizar Script UTM com Novos Atributos

### Alteração Única

**Arquivo:** `index.html`

**Linhas a substituir:** 14-20 (script UTM atual)

**Conteúdo atual:**
```html
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  async
  defer
></script>
```

**Novo conteúdo:**
```html
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  data-utmify-ignore-iframe
  data-utmify-ignore-retry
  async
  defer
></script>
```

---

### Diferença

| Atributo | Antes | Depois |
|----------|-------|--------|
| `data-utmify-prevent-xcod-sck` | Sim | Sim |
| `data-utmify-prevent-subids` | Sim | Sim |
| `data-utmify-ignore-iframe` | Não | **Adicionado** |
| `data-utmify-ignore-retry` | Não | **Adicionado** |

O script do pixel permanece inalterado.

