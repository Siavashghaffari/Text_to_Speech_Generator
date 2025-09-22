const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));
app.use('/temp', express.static('temp'));

// Ensure temp directory exists
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// Clean up old files (files older than 1 hour)
const cleanupOldFiles = () => {
  const files = fs.readdirSync(tempDir);
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;

  files.forEach(file => {
    const filePath = path.join(tempDir, file);
    const stats = fs.statSync(filePath);

    if (now - stats.mtime.getTime() > oneHour) {
      fs.unlinkSync(filePath);
      console.log(`Cleaned up old file: ${file}`);
    }
  });
};

// Run cleanup every 30 minutes
setInterval(cleanupOldFiles, 30 * 60 * 1000);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/voices', (req, res) => {
  const voices = [
    { id: 'alloy', name: 'Alloy', description: 'Neutral, versatile voice' },
    { id: 'echo', name: 'Echo', description: 'Clear, professional voice' },
    { id: 'fable', name: 'Fable', description: 'Warm, storytelling voice' },
    { id: 'onyx', name: 'Onyx', description: 'Deep, authoritative voice' },
    { id: 'nova', name: 'Nova', description: 'Bright, energetic voice' },
    { id: 'shimmer', name: 'Shimmer', description: 'Gentle, soothing voice' }
  ];
  res.json(voices);
});

app.post('/api/generate', async (req, res) => {
  try {
    const { text, voice = 'alloy' } = req.body;

    // Validation
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: 'Text is required' });
    }

    if (text.length > 4000) {
      return res.status(400).json({ error: 'Text too long. Maximum 4000 characters allowed.' });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    console.log(`Generating speech for ${text.length} characters with voice: ${voice}`);

    // Generate speech using OpenAI TTS
    const mp3 = await openai.audio.speech.create({
      model: 'tts-1',
      voice: voice,
      input: text,
      response_format: 'mp3',
    });

    // Create unique filename
    const timestamp = Date.now();
    const filename = `speech_${timestamp}.mp3`;
    const filepath = path.join(tempDir, filename);

    // Convert response to buffer and save
    const buffer = Buffer.from(await mp3.arrayBuffer());
    fs.writeFileSync(filepath, buffer);

    console.log(`Audio generated successfully: ${filename}`);

    // Return download URL
    res.json({
      success: true,
      downloadUrl: `/temp/${filename}`,
      filename: filename,
      size: buffer.length
    });

  } catch (error) {
    console.error('Error generating speech:', error);

    if (error.code === 'insufficient_quota') {
      return res.status(429).json({
        error: 'OpenAI API quota exceeded. Please try again later.'
      });
    }

    if (error.code === 'invalid_api_key') {
      return res.status(401).json({
        error: 'Invalid OpenAI API key configuration.'
      });
    }

    res.status(500).json({
      error: 'Failed to generate speech. Please try again.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    openaiConfigured: !!process.env.OPENAI_API_KEY
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`OpenAI API configured: ${!!process.env.OPENAI_API_KEY}`);

  // Run initial cleanup
  cleanupOldFiles();
});