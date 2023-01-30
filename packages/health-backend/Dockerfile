FROM node:18
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm build
EXPOSE 3000
CMD [ "node", "dist/main.js" ]