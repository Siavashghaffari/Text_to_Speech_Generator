# Text-to-Speech Generator - MVP

## Goal
User can paste text and download beautiful AI-generated audio in under 30 seconds.

## Core MVP Features (Backend-Focused)

### Single API Endpoint
- `POST /api/generate` - Takes text input, returns downloadable MP3
- Input: JSON with `text` field
- Output: MP3 file with proper headers for download
- Fixed voice selection (start with one high-quality voice like "alloy")

### Minimal Frontend
- Single HTML page with:
  - Text area for input
  - Submit button
  - Download link appears after generation
- No React complexity - just vanilla HTML/JS for speed

### Backend Magic
- Express server with OpenAI TTS integration
- Direct streaming: text → OpenAI API → MP3 → user download
- Automatic file cleanup after download
- Basic error handling (API failures, text too long)

## Technical Implementation

### Backend Stack
```
- Node.js + Express (minimal setup)
- OpenAI SDK for TTS API calls
- File system for temporary MP3 storage
- Basic CORS for frontend requests
```

### API Flow
1. Receive text via POST request
2. Call OpenAI TTS API with fixed voice
3. Save MP3 response to temporary file
4. Return file download URL
5. Serve file via Express static route
6. Clean up file after successful download

### Frontend (Ultra Simple)
- Single `index.html` with embedded CSS/JS
- Fetch API for backend communication
- Loading state during generation
- Auto-download or download link on completion

## MVP Constraints
- Fixed voice (OpenAI "alloy" - natural and versatile)
- Text limit: 4,000 characters (OpenAI limit)
- No voice selection UI
- No audio preview - direct download
- No user sessions or history
- Files deleted after 1 hour automatically

## Success Metrics
- Text to MP3 generation in under 10 seconds
- Clean, professional audio output
- Works on mobile and desktop browsers
- Handles errors gracefully
- Zero-configuration user experience

## File Structure
```
/
├── server.js              # Express server + OpenAI integration
├── public/
│   └── index.html        # Simple frontend
├── temp/                 # Temporary MP3 storage
├── package.json          # Dependencies
└── .env                  # OpenAI API key
```

## Critical Path
1. **OpenAI Integration** - Core TTS API connection
2. **File Handling** - Generate and serve MP3s reliably
3. **Simple UI** - Functional text input and download
4. **Error Handling** - Graceful failures
5. **Deployment** - Railway deployment with environment variables

## What Makes It Magical
- Instant transformation: paste text → beautiful speech
- Professional voice quality from OpenAI
- Zero learning curve - just paste and download
- Works immediately without signup or configuration
- High-quality MP3 output suitable for any use case

## Future Enhancements (Post-MVP)
- Voice selection dropdown
- Audio preview before download
- React frontend
- Custom file naming
- Batch text processing