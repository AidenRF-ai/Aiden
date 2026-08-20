import { processMessage } from "../services/chatService.js";

export async function chatController(req, res) {
  try {
    const { model, message } = req.body;

    const reply = await processMessage(model, message);

    res.json(reply);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
