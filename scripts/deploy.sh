#!/usr/bin/env bash
# Atualiza o portfólio na VPS: gera o build num container Node e troca o dist de uma vez.
# O Caddy (docker-compose do garagem_aqui_backend) monta este repositório em /srv/portfolio e serve /srv/portfolio/dist.
#
# Sem argumento, puxa a branch atual. Com um commit, usa o checkout já feito pelo deploy automático
# (garagemaqui-deploy portfolio, no repositório do backend).
set -euo pipefail

cd "$(dirname "$0")/.."

if [ $# -eq 0 ]; then
  git pull --ff-only
fi

docker run --rm --pull always \
  -u "$(id -u):$(id -g)" \
  -e npm_config_cache=/tmp/.npm \
  -v "$PWD":/site -w /site \
  node:22-alpine \
  sh -c 'npm ci --no-audit --no-fund && npx astro build --outDir .dist-novo'

rm -rf dist-anterior
[ -d dist ] && mv dist dist-anterior
mv .dist-novo dist
rm -rf dist-anterior

echo "Portfólio publicado: $(git log -1 --format='%h %s')"
