import React from 'react';

function LogView({ logs }) {
    return (
        <div className='timeline_logs'>
            {logs.map((log, index) => {
                return (
                    <div
                        key={`log-${index}`}
                        className={`log ${log.type.toLowerCase()}`}
                    >
                        {log.amount} {log.type}
                    </div>
                );
            })}
        </div>
    );
}

export default LogView;
