const express = require('express');
const app = express();

// Beanstalk يمرر المنفذ عبر متغير البيئة PORT تلقائياً (عادة 8080)
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center; padding-top: 50px; font-family: sans-serif;">
      <h1 style="color: #232f3e;">Hello from AWS Elastic Beanstalk! 🚀</h1>
      <p style="font-size: 18px; color: #555;">Deployed automatically via AWS CodePipeline.</p>
      <p style="color: green; font-weight: bold;">Version: 1.0.0</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
