export async function sendMessage(model, message) {

  await new Promise(resolve => setTimeout(resolve, 700));

  return {
    reply: `Вы выбрали модель "${model}". В будущем здесь будет настоящий ответ ИИ на сообщение: "${message}".`
  };

}
