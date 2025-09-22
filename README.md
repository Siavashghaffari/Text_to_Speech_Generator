# Text-to-Speech Generator

A simple web application that converts text to natural-sounding speech using OpenAI's Text-to-Speech API.

## Features

- 🎵 Convert text to high-quality MP3 audio
- 🗣️ Multiple AI voice options (Alloy, Echo, Fable, Onyx, Nova, Shimmer)
- 📱 Responsive design for mobile and desktop
- ⚡ Fast generation and instant download
- 🧹 Automatic cleanup of temporary files

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- OpenAI API key with TTS access

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Add your OpenAI API key to `.env`:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit: `http://localhost:3000`

## Usage

1. Enter your text in the text area (up to 4,000 characters)
2. Select your preferred AI voice from the dropdown
3. Click "Generate Audio" to create speech
4. Preview the audio using the built-in player
5. Download the MP3 file to your device

## API Endpoints

- `GET /` - Main application interface
- `GET /api/voices` - Get available voice options
- `POST /api/generate` - Generate speech from text
- `GET /api/health` - Health check endpoint

## Deployment

### Railway Deployment

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `PORT`: 3000 (Railway will override this)
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build and start:
   ```bash
   npm start
   ```

2. Ensure environment variables are set on your hosting platform

## File Structure

```
├── server.js              # Express server with OpenAI integration
├── public/
│   └── index.html         # Frontend interface
├── temp/                  # Temporary MP3 storage (auto-created)
├── package.json           # Dependencies and scripts
├── .env.example          # Environment variables template
└── README.md             # This file
```

## Technical Details

- **Backend**: Node.js + Express + OpenAI SDK
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Audio Format**: MP3 (OpenAI TTS default)
- **File Cleanup**: Automatic cleanup of files older than 1 hour
- **Error Handling**: Comprehensive error messages and validation

## Troubleshooting

### Common Issues

1. **"OpenAI API key not configured"**
   - Make sure your `.env` file exists and contains your API key
   - Restart the server after adding the API key

2. **"API quota exceeded"**
   - Check your OpenAI account usage and billing
   - Wait for quota reset or upgrade your plan

3. **Audio not playing**
   - Ensure your browser supports MP3 playback
   - Check browser console for errors

4. **Download not working**
   - Disable popup blockers for this site
   - Try right-click and "Save as" on the download link

## Development

Run in development mode with auto-restart:
```bash
npm run dev
```

The application includes:
- Real-time character counting
- Loading states and progress indicators
- Responsive design for all devices
- Comprehensive error handling
- Automatic file cleanup

## License

MIT License - feel free to use and modify as needed.