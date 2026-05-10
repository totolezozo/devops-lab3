FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG APP_SECRET_NAME
RUN echo "APP_SECRET_NAME=${APP_SECRET_NAME}" > .env
EXPOSE 3001
CMD ["node", "index.js"]
