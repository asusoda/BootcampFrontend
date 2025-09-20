# Story Generator Backend

A FastAPI backend that generates magical children's stories with AI-generated images using Google's Gemini API.

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Set up environment variables:**
   Create a `.env` file in the backend directory:
   ```
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```
   
   Get your Gemini API key from: https://makersuite.google.com/app/apikey

3. **Run the server:**
   ```bash
   python main.py
   ```
   
   Or using uvicorn directly:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

## API Endpoints

### POST /generate
Generates a story with images based on a prompt.

**Request Body:**
```json
{
  "prompt": "A brave princess who saves dragons"
}
```

**Response:**
```json
{
  "title": "The Dragon-Saving Princess",
  "parts": [
    {
      "text": "Once upon a time...",
      "image": "data:image/png;base64,..."
    }
  ]
}
```

## Features

- 🎨 **AI Story Generation**: Uses Gemini 2.5 Flash for creative storytelling
- 🖼️ **Image Generation**: Creates beautiful illustrations for each story part
- 📚 **Story Parsing**: Automatically divides stories into 6-10 engaging parts
- 👶 **Child-Friendly**: Content is appropriate and magical for children aged 4-12
- 🌐 **CORS Enabled**: Ready for frontend integration

## Development

The server runs on `http://localhost:8000` by default.
API documentation is available at `http://localhost:8000/docs`
