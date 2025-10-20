import { Counter } from 'counterapi';

export function createCounter() {
  return new Counter({
    workspace: import.meta.env.COUNTER_WORKSPACE,
    accessToken: import.meta.env.COUNTER_TOKEN,
  });
}
