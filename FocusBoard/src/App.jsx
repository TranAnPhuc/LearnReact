import Header from './components/Header'
import TaskSummary from './components/TaskSummary'
import './App.css'

function App() {
  const mockTasks = [
    {id:1,title:"Tìm cách có 100 triệu đầu tiên",category:"Công việc cá nhân",priority:"Cao",dueDate:"2026-09-08",isCompleted:false},
    {id:2,title:"Có công việc ổn định",category:"Công việc nghề nghiệp",priority:"Trung bình",dueDate:"2026-09-08",isCompleted:false},
    {id:3,title:"Học cách lập trình React",category:"Công việc học tập",priority:"Thấp",dueDate:"2026-09-08",isCompleted:true},
  ];

  const totalTasks = mockTasks.length;
  const completedTasks= mockTasks.filter(task => task.isCompleted).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
      <div className="app-container">
        <Header title="FocusBoard" subtitle="This is a simple React application." />
        <main>
          <TaskSummary total={totalTasks} completed={completedTasks} pending={pendingTasks} />
        </main>
      </div>
  )
}

export default App
