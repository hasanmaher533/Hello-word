const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center; padding-top: 60px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f172a; color: #f8fafc; min-height: 100vh; margin: -8px;">
      <h1 style="color: #38bdf8; font-size: 2.5rem; margin-bottom: 10px;">
        AWS CodePipeline Deployment Live! ⚡
      </h1>
      <p style="font-size: 1.2rem; color: #94a3b8; max-width: 600px; margin: 0 auto 20px;">
        Changes detected via GitHub Webhook, pushed to Staging, and waiting for Production approval.
      </p>
      <div style="display: inline-block; padding: 8px 20px; background-color: #0284c7; border-radius: 20px; font-weight: bold; font-size: 1.1rem;">
        Version: 2.0.0
      </div>
      <p style="color: #4ade80; margin-top: 30px; font-size: 0.95rem;">
        Environment: ${process.env.NODE_ENV || 'production'} | Status: Healthy
      </p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
