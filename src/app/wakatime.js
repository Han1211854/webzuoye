import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.WAKATIME_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'WakaTime API key not configured' });
  }

  try {
    const response = await axios.get('https://wakatime.com/api/v1/users/current/stats/all_time', {
      headers: {
        Authorization: `Basic ${Buffer.from(apiKey).toString('base64')}`
      }
    });
    
    const totalSeconds = response.data.data.total_seconds;
    const hours = Math.floor(totalSeconds / 3600);
    
    res.status(200).json({ hours });
  } catch (error) {
    console.error('WakaTime API error:', error);
    res.status(500).json({ error: 'Failed to fetch coding time from WakaTime' });
  }
}