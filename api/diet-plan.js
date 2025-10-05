export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { age, gender, goal } = req.body;

  // You can later connect OpenAI or Gemini here
  const plan = {
    breakfast: "Oats with milk and banana",
    lunch: "Rice, dal, and salad",
    dinner: "Soup with vegetables",
    tips: `For ${goal || 'fitness'}, stay hydrated and eat balanced meals.`,
  };

  res.status(200).json({ success: true, plan });
}
