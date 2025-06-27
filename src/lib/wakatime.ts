// src/lib/wakatime.ts
export async function getCodingStats() {
    const res = await fetch('https://wakatime.com/api/v1/users/current/stats', {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.WAKATIME_KEY!).toString('base64')}`
      }
    })
    return res.json()
  }