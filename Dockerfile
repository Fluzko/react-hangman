FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

FROM node:18-alpine
EXPOSE 3000
COPY --from=build /app/dist /app
CMD [ "npx","serve","/app" ]