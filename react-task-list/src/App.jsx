import './App.css'
import { tasks } from './data/tasks.js'

function App() {
  const currentTasks = tasks.filter((task => task.state === 'backlog' || task.state === 'in_progress')).sort((taskA, taskB) => taskA.priority - taskB.priority)
  const completedTasks = tasks.filter((task => task.state === 'completed')).sort((taskA, taskB) => taskA.priority - taskB.priority)
  // console.log(currentTasks, completedTasks)

  return (
    <>
      <header>
        <div className='container'>
          <div className="task-manager">
            <h1>Task Manager</h1>
          </div>
        </div>
      </header>
      <main>
        <section className='current-tasks'>
          <div className='container'>
            <h2 className='current-tasks-title'>Current Tasks ({currentTasks.length})</h2>
            <div className='current-tasks-list'>
              <ul>
                {currentTasks.map(task => (
                  <li key={task.id} className={`task ${task.state}`}>
                    <div className="task-header">
                      <h3>{task.title}</h3>
                      <span className="status">{task.state}</span>
                    </div>
                    <p>Priority: {task.priority}</p>
                    <p>Est. time: {task.estimatedTime}</p>
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
            <h2 className='completed-tasks-title'>Completed tasks ({completedTasks.length})</h2>
            <div className='completed-tasks-list'>
              <ul>
                {completedTasks.map(task => (
                  <li key={task.id} className='task completed'>
                    <div className="task-header">
                      <h3>{task.title}</h3>
                      <span className="status completed">completed</span>
                    </div>
                    <p>Priority: {task.priority}</p>
                    <p>Est. time: {task.estimatedTime}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}

export default App


/*
return arr.filter(el => {
  return el % 2 === 0;
}).map(el => (<h1>{el}</h1>))
*/