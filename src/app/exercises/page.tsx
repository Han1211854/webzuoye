// src/app/exercises/page.tsx
import Link from 'next/link'

export default function ExerciseList() {
  const exercises = [
    { id: '1', title: 'HTML表单', components: ['输入验证', '表单提交'] },
    { id: '2', title: 'CSS动画', components: ['过渡效果', '关键帧'] }
  ]

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">我的课程练习</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {exercises.map(ex => (
          <Link
            key={ex.id}
            href={`/exercises/${ex.id}`}
            className="border p-6 rounded-lg hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold">{ex.title}</h3>
            <ul className="mt-2 space-y-1">
              {ex.components.map(c => (
                <li key={c} className="text-sm text-gray-600">• {c}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  )
}