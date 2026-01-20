# Rocket League Clips Folder

Place your Rocket League video clips in this folder.

## How to Use:

### Option 1: Local Files (Recommended for portfolio)
1. Copy your Medal clips from your computer into this `clips` folder
2. In `src/components/RocketLeagueClips/index.js`, use the path like this:
   ```javascript
   {
       id: 1,
       title: 'My Amazing Goal',
       thumbnail: '/clips/thumbnails/goal1.jpg', // Optional: create thumbnails
       videoUrl: '/clips/MedalTVRocketLeague20260119140249074-1768859063.mp4',
       duration: '0:45'
   }
   ```

### Option 2: Medal Shareable Links
1. In Medal app, right-click your clip → "Create Link" or "Share"
2. Copy the shareable URL
3. Use it directly in the videoUrl:
   ```javascript
   {
       id: 1,
       title: 'My Amazing Goal',
       thumbnail: 'https://medal.tv/.../thumbnail.jpg', // Medal provides thumbnails
       videoUrl: 'https://medal.tv/.../clip.mp4', // Medal shareable link
       duration: '0:45'
   }
   ```

### Option 3: Generate Thumbnails (Optional)
- You can create a `thumbnails` subfolder for custom thumbnails
- Or use Medal's thumbnail URLs if using Medal links
- Or let the browser generate thumbnails automatically

## Notes:
- File names can be long (like Medal's default names) - that's fine!
- Supported formats: .mp4, .webm, .ogg (MP4 is most compatible)
- Keep file sizes reasonable for web (under 50MB per clip recommended)
