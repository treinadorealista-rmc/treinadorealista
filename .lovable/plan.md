

## Plano: Mover Script UTMify para Prioridade Máxima

### Objetivo
Reposicionar o script da UTMify para o topo do `<head>`, logo após as meta tags essenciais (charset e viewport), garantindo que o rastreamento inicie o mais rápido possível.

### Alteração no arquivo `index.html`

**Estrutura Atual (linhas 3-31):**
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" ... />
  <title>...</title>
  <link rel="icon" ... />
  <link rel="preconnect" ... />
  <link href="fonts.googleapis..." />
  <meta name="description" ... />
  <meta name="author" ... />
  <meta property="og:..." />
  <meta name="twitter:..." />
  <!-- UTMify Pixel --> ← POSIÇÃO ATUAL (final do head)
  <script>...</script>
</head>
```

**Nova Estrutura:**
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- UTMify Pixel --> ← NOVA POSIÇÃO (topo do head)
  <script>
    window.pixelId = "6972b36161aa06c267bef831";
    var a = document.createElement("script");
    a.setAttribute("async", "");
    a.setAttribute("defer", "");
    a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
    document.head.appendChild(a);
  </script>
  <title>...</title>
  <link rel="icon" ... />
  ... restante do head ...
</head>
```

### Resumo

| Item | Detalhe |
|------|---------|
| Arquivo | `index.html` |
| Ação | Mover script das linhas 23-31 para logo após linha 5 |
| Pixel ID | Mantido: `6972b36161aa06c267bef831` |
| Benefício | Carregamento prioritário do rastreamento |

