const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Diet plan endpoint (mock)
app.post('/api/diet-plan', (req, res) => {
  const { age, sex, weightKg, heightCm, activity, goal, mealsPerDay, preferences } = req.body;

  // Very simple mock plan (you can replace with AI logic)
  const plan = `
Diet Plan for ${sex || 'User'}, ${age || ''} years old
Goal: ${goal || 'Maintain'}

Breakfast: Oats with milk and fruits
Snack: Nuts and seeds
Lunch: Rice, lentils, vegetables
Snack: Yogurt with honey
Dinner: Grilled chicken/fish and salad

Preferences: ${preferences || 'None'}
Meals per day: ${mealsPerDay || 3}
`;

  res.json({ plan });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
