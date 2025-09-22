# Text-to-Speech Generator - Project Scope

## Overview
A simple web application that converts text input to natural-sounding audio using OpenAI's Text-to-Speech API. Users can input text, select voice options, and download generated MP3 files.

## Core Features

### Backend (Node.js + Express)
- **Text-to-Speech API Integration**
  - Connect to OpenAI's TTS API
  - Handle API authentication and requests
  - Process text input and voice selection parameters
  - Return generated audio files

- **File Management**
  - Generate MP3 files from API responses
  - Serve audio files for download
  - Clean up temporary files (optional optimization)

- **API Endpoints**
  - `POST /api/generate` - Accept text and voice parameters, return audio file
  - `GET /api/voices` - Return available voice options
  - Static file serving for audio downloads

### Frontend (React)
- **Text Input Interface**
  - Large text area for user input
  - Character count display
  - Input validation (length limits)

- **Voice Selection**
  - Dropdown or radio buttons for available AI voices
  - Voice preview descriptions (male/female, accent, tone)

- **Audio Generation**
  - Submit button to generate audio
  - Loading states during processing
  - Error handling and user feedback

- **Audio Playback & Download**
  - Built-in audio player for preview
  - Download button for MP3 files
  - File naming (timestamp or custom naming)

## Technical Requirements

### Backend Stack
- Node.js with Express framework
- OpenAI API client library
- File system operations for temporary audio storage
- CORS configuration for frontend communication

### Frontend Stack
- React application
- HTTP client for API calls (fetch/axios)
- Basic styling (CSS or simple framework)
- Responsive design for mobile/desktop

### External Dependencies
- OpenAI API account and API key
- OpenAI TTS API integration
- Railway deployment platform

## User Flow
1. User opens the web application
2. User enters text in the input field
3. User selects preferred voice from available options
4. User clicks "Generate Audio" button
5. Backend processes request through OpenAI TTS API
6. Frontend displays audio player with generated speech
7. User can play audio to preview
8. User can download MP3 file to their device

## Constraints & Limitations
- No user authentication or accounts
- No database - stateless application
- No audio editing or post-processing features
- Text length limited by OpenAI API constraints
- No audio format options beyond MP3
- No batch processing or queue system

## Deployment
- Deploy backend and frontend as single application on Railway
- Environment variables for OpenAI API key
- Static file serving for React build
- HTTPS for secure API communication

## Success Criteria
- Users can input text up to API limits
- All available OpenAI voices are selectable
- Generated audio quality matches OpenAI TTS output
- Download functionality works across browsers
- Application loads and responds quickly
- Mobile-friendly interface
- Proper error handling for API failures or invalid inputs