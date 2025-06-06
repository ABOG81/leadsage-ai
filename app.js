import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import leadsRoutes from './routes/leads.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/leads', leadsRoutes);

app.get('/', (req, res) => {
  res.send('LeadSage API is live');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

