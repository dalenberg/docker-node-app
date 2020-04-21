FROM node:13.12.0-alpine
WORKDIR /
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . ./
EXPOSE 5000
CMD ["npm", "start"]