import { AI_MODELS } from "../config/models";

export async function sendMessage(modelId, message) {

  const model = AI_MODELS[modelId];

  if (!model) {
    return {
      reply: "Неизвестная модель."
    };
  }

  // Пока заглушка

  await new Promise(resolve => setTimeout(resolve, 700));

  return {
    reply: `[${model.name}] получила сообщение: "${message}". Подключение настоящего API будет следующим шагом.`
  };

}
