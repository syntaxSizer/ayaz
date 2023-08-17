# If the directory, `dist`, doesn't exist, create `dist`
stat dist || mkdir dist
# Archive artifacts
zip ayazona.zip -r .ebextensions dist package.json .env.production.local yarn.lock packages/landing/next.config.js packages/landing/package.json packages/landing/server.js Procfile public
