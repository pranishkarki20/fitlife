const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// keep a simple health endpoint, remove OpenAI/firebase-admin related code
app.get('/api/health', (req, res) => res.json({ ok: true }));

// add other API routes here (non-AI) if needed

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));