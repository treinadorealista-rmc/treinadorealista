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
