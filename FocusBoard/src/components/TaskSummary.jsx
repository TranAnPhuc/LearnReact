import '../App.css'

export default function TaskSummary({total,completed,pending}){
    return (
        <div className="task-summary">
            <div className="summary-card">
                <span className="summary-label">Tổng số công việc</span>
                <span className="summary-value">{total}</span>
            </div>
            <div className="summary-card">
                <span className="summary-label">Tổng số công việc hoàn thành</span>
                <span className="summary-value">{completed}</span>
            </div>
            <div className="summary-card">
                <span className="summary-label">Tổng số công việc đang chờ</span>
                <span className="summary-value">{pending}</span>
            </div>
        </div>
    );
}
