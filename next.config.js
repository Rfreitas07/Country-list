/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Adicione o protocolo se necessário (opcional)
          hostname: 'upload.wikimedia.org',
          port: '', // Deixe vazio se a porta padrão (443 para HTTPS)
          pathname: '/**', // Aceita todas as imagens dentro do domínio
        },
      ],
    },
  };