import { useState, useEffect } from 'react'
import './App.css'

const STORAGE_KEY = 'task-board-tasks'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    const text = inputText.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: Date.now(), text, completed: false }])
    setInputText('')
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="container">
      <h1 className="title">Task Board</h1>

      <div className="input-row">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="タスクを入力して Enter または 追加ボタンを押す"
          className="task-input"
        />
        <button onClick={addTask} className="add-btn">追加</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-msg">タスクはまだありません</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="task-checkbox"
              />
              <span className="task-text">{task.text}</span>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">削除</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
