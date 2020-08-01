export default function ChartHorizontalOne({ text, percentage = 50, color }) {
    return (
        <li>
            <div className="text">
                <span className="param">
                    { text }
                </span>
                <span className="percentage">
                    { percentage }%
                </span>
            </div>
            <div className="line">
                <div className={'line-filled ' + color} style={{ width: percentage + '%' }}></div>
            </div>
        </li>
    )
}