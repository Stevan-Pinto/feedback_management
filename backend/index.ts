import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

