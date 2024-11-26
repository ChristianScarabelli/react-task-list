import './App.css'
import { tasks } from './data/tasks.js'

function App() {
  const currentTasks = tasks.filter((task => task.state === 'backlog' || task.state === 'in_progress'))
  const completedTasks = tasks.filter((task => task.state === 'completed'))
  // console.log(currentTasks, completedTasks)

  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className="task-manager">
            <h1>Task Manager</h1>
          </div>
        </div>
      </footer>
      <main>
        <section className='current-tasks'>
          <div className='container'>
            <h2>Current Tasks ({currentTasks.length})</h2>
            <div className='current-tasks-list'>
              <ul>
                {currentTasks.map(task => (
                  <li key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Priority: {task.priority}</p>
                    <p>Est. time: {task.estimatedTime}</p>
                    <span className="status">{task.state}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div className='container'>
          <hr />
        </div>
        <section className='completed-tasks'>
          <div className='container'>
            <h2>Completed tasks ({completedTasks.length})</h2>
            <div className='completed-tasks-list'>
              <ul>
                {completedTasks.map(task => (
                  <li key={task.id}>
                    <h3>{task.title}</h3>
                    <p>Priority: {task.priority}</p>
                    <p>Est. time: {task.estimatedTime}</p>
                    <span className="status">{task.state}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App


/*
return arr.filter(el => {
  return el % 2 === 0;
}).map(el => (<h1>{el}</h1>))
*/