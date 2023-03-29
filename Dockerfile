FROM node

RUN npm install

COPY . .

CMD ["npm", "start"]