

## Plano: Substituir Pixel UTMify por Nova Versão

### Alteração Única

**Arquivo:** `index.html`

**Linhas a substituir:** 6-17 (bloco atual do UTMify)

**Conteúdo atual:**
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

**Novo conteúdo:**
```html
<script>
  window.pixelId = "6972b36161aa06c267bef831";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  async
  defer
></script>
```

---

### Resumo

| Script | Função |
|--------|--------|
| Primeiro script | Pixel principal UTMify (carregamento dinâmico async/defer) |
| Segundo script | Captura de UTMs com prevenção de xcod e subids |

