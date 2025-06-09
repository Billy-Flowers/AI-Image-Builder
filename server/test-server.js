import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Test server is running' });
});

app.post('/test', (req, res) => {
  console.log('Received body:', req.body);
  res.status(200).json({ 
    message: 'Test endpoint working', 
    receivedData: req.body 
  });
});

app.listen(8081, () => {
  console.log('Test server running on port 8081');
});