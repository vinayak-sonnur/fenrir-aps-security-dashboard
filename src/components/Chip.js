import React from "react";

const Chip = ({status})=>{
    const statusColors = {
        Completed: {bg: '#DCFCE7',text:'#166534',border:'#BBF7D0'},
        Scheduled:{bg: '#F3F4F6',text:'#6B7280',border:'#E5E7EB'},
        Failed:{bg:'#FEEE2E2',text:'#991B1B',border:'#FECACA'}
    };

    const colors = statusColors[status] || statusColors.Scheduled;

    return(
        <span
        style={{
            display:'inline-block',
            padding:'0.375rem 0.75rem',
            backgroundColor:colors.bg,
            color:colors.text,
            border:'1px solid ${colors.border}',
            borderRadius:'0.375rem',
            fontSize:'0.875rem',
            fontWeight:'500'
        }}>
            {status}
        </span>
    );
};

export default Chip;