import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPost } from './routes/vote-on-poll';

const app = fastify();

app.register(cookie, {
  secret: "polls-app-nlw",
  hook: 'onRequest'
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPost);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running');
})