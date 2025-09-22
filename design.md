# Text-to-Speech Generator - UI Design

## Desktop Layout (1200px+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Text-to-Speech Generator                           │
│                     Transform your text into natural speech                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ Enter your text here...                                             │    │
│  │                                                                     │    │
│  │                                                                     │    │
│  │                                                                     │    │
│  │                                                                     │    │
│  │                                                                     │    │
│  │                                                                     │    │
│  │                                                                     │    │
│  │                                                                     │    │
│  │                                                                     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                         Characters: 0/4000  │
│                                                                             │
│                   ┌─────────────────────────┐                              │
│                   │    🎵 Generate Audio    │                              │
│                   └─────────────────────────┘                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              Generated Audio                                │
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ 🔊 ▶️  ────────●─────────── 0:45 / 1:23    📥 Download MP3        │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Mobile Layout (< 768px)

```
┌───────────────────────────────────┐
│      Text-to-Speech Generator     │
│    Transform text into speech     │
└───────────────────────────────────┘

┌───────────────────────────────────┐
│                                   │
│ ┌─────────────────────────────┐   │
│ │ Enter your text here...     │   │
│ │                             │   │
│ │                             │   │
│ │                             │   │
│ │                             │   │
│ │                             │   │
│ │                             │   │
│ └─────────────────────────────┘   │
│                   Chars: 0/4000   │
│                                   │
│ ┌─────────────────────────────┐   │
│ │    🎵 Generate Audio        │   │
│ └─────────────────────────────┘   │
│                                   │
└───────────────────────────────────┘

┌───────────────────────────────────┐
│         Generated Audio           │
│                                   │
│ ┌─────────────────────────────┐   │
│ │ 🔊 ▶️  ●─── 0:45/1:23      │   │
│ └─────────────────────────────┘   │
│                                   │
│ ┌─────────────────────────────┐   │
│ │      📥 Download MP3        │   │
│ └─────────────────────────────┘   │
│                                   │
└───────────────────────────────────┘
```

## Component Breakdown

### Header Section
```
┌─────────────────────────────────────────────────────────────────┐
│                   Text-to-Speech Generator                      │
│              Transform your text into natural speech           │
└─────────────────────────────────────────────────────────────────┘
```
- **Purpose**: Clear app title and subtitle
- **Styling**: Large, centered text with subtle description
- **Colors**: Dark text on light background

### Main Input Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Textarea - Large, prominent text input area            │    │
│  │ Placeholder: "Enter your text here..."                 │    │
│  │ Auto-resize as user types                              │    │
│  │ Clean border, rounded corners                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                           Characters: 0/4000    │
│                                                                 │
│           ┌─────────────────────────┐                          │
│           │    🎵 Generate Audio    │                          │
│           └─────────────────────────┘                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```
- **Text Area**: Primary focus, large and inviting
- **Character Counter**: Real-time feedback, right-aligned
- **Generate Button**: Prominent, centered, with icon
- **States**: Normal, typing, generating (loading), error

### Audio Output Section (Appears after generation)
```
┌─────────────────────────────────────────────────────────────────┐
│                        Generated Audio                         │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Audio Player with controls and download button          │    │
│  │ Play/Pause | Progress Bar | Time | Download             │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```
- **Audio Player**: Built-in HTML5 audio with custom styling
- **Download Button**: Prominent, clearly labeled
- **Progress Indication**: Visual feedback during playback

## Loading States

### Generating Audio
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│           ┌─────────────────────────┐                          │
│           │    🔄 Generating...     │                          │
│           └─────────────────────────┘                          │
│                                                                 │
│                  ⬤ ⬤ ⬤ (animated dots)                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Error State
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│           ┌─────────────────────────┐                          │
│           │    ⚠️ Try Again         │                          │
│           └─────────────────────────┘                          │
│                                                                 │
│              Text too long or network error                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Color Scheme & Typography

### Colors
- **Background**: Clean white (#ffffff)
- **Primary**: Deep blue (#2563eb) for buttons
- **Text**: Dark gray (#374151) for readability
- **Borders**: Light gray (#e5e7eb)
- **Accent**: Green (#10b981) for success states

### Typography
- **Headers**: Sans-serif, bold, large (32px title, 18px subtitle)
- **Body**: Sans-serif, regular (16px)
- **UI Elements**: Sans-serif, medium weight (14px buttons)

## Interaction Flow

1. **Landing**: User sees title, subtitle, and empty text area
2. **Typing**: Character counter updates, button remains inactive until text
3. **Generate**: Button shows loading state, text area becomes read-only
4. **Success**: Audio player appears below with download option
5. **New Input**: User can clear and start over

## Accessibility Features

- High contrast text and backgrounds
- Large click targets (minimum 44px)
- Keyboard navigation support
- Screen reader friendly labels
- Clear error messages
- Loading state indicators