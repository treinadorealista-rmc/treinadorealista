

## Plano: Carregamento Síncrono do Pixel UTMify

### Problema Identificado
O script atual usa `async` e `defer`, causando uma **race condition** onde o PageView do React dispara antes do pixel estar completamente carregado. Isso resulta em baixa cobertura do cookie `_fbp` (apenas 4%).

### Alteração no arquivo `index.html`

**Código Atual (linhas 6-14):**
```html
<!-- UTMify Pixel -->
<script>
  window.pixelId = "6972b36161aa06c267bef831";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
</script>
```

**Novo Código:**
```html
<!-- UTMify Pixel -->
<script>
  window.pixelId = "6972b36161aa06c267bef831";
</script>
<script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"></script>
```

### Código Resultante Completo do `<head>`:
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- UTMify Pixel -->
  <script>
    window.pixelId = "6972b36161aa06c267bef831";
  </script>
  <script src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"></script>
  <title>Descubra seu Arquétipo Metabólico | Protocolo RaonyPro</title>
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
  <meta name="description" content="Faça a análise gratuita e descubra por que treinos comuns falham com você. Receba seu protocolo personalizado baseado em +2.000 alunos." />
  <meta name="author" content="RaonyPro" />

  <meta property="og:title" content="Descubra seu Arquétipo Metabólico | Protocolo RaonyPro" />
  <meta property="og:description" content="Faça a análise gratuita e descubra por que treinos comuns falham com você." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://treinadorealista.lovable.app/og-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@RaonyPro" />
  <meta name="twitter:image" content="https://treinadorealista.lovable.app/og-image.png" />
</head>
```

### Resumo da Alteração

| Item | Antes | Depois |
|------|-------|--------|
| Carregamento | Assíncrono (async/defer) | Síncrono (bloqueante) |
| Pixel ID | `6972b36161aa06c267bef831` | Mantido |
| Posição | Após viewport | Mantida |
| Linhas alteradas | 6-14 | 6-9 |

### Benefício Esperado
O pixel carregará de forma bloqueante, garantindo que o cookie `_fbp` seja criado **antes** do React montar e disparar o evento PageView.

