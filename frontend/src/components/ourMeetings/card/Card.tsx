import { useEffect, useState } from 'react'
import Meeting from '../../../models/meeting/Meeting'
import './Card.css'
import categoriesService from '../../../services/auth-aware/Groups'

interface PresentProps {
    meeting: Meeting
}

export default function Card(props: PresentProps): JSX.Element {

    const {
        startDate,
        endDate,
        description,
        room,
        developmentGroupsId
    } = props.meeting

    const [group, setGroup] = useState<{ name: string } | null>(null)

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const groupData = await categoriesService.getGroupById(developmentGroupsId);
                setGroup(groupData);
            } catch (e) {
                alert(e);
            }
        };
        fetchGroup();
    }, [developmentGroupsId]);


    const formattedStartDate = endDate ? new Date(startDate).toLocaleString() : 'Invalid end date';
    const formattedEndDate = endDate ? new Date(endDate).toLocaleString() : 'Invalid end date';

    return (
        <div className="meeting">
            <h3>{group ? group.name : 'No group found'}</h3>  
            <p>{formattedStartDate}</p>
            <p>{formattedEndDate}</p>
            <p>{description}</p>
            <p>{room}</p>
        </div>
    );
}