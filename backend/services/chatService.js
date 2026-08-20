export async function processMessage(model, message) {

  return {
    reply: `Сервер получил сообщение "${message}" для модели "${model}".`
  };

}
