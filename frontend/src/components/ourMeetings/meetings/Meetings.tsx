import './Meetings.css'
import { ChangeEvent, useEffect, useState } from 'react'
import categoriesService from '../../../services/auth-aware/Groups'
import Group from '../../../models/group/Group'
import Meeting from '../../../models/meeting/Meeting'
import meetingsService from '../../../services/auth-aware/Meetings'
import Card from '../card/Card'

export default function Meetings(): JSX.Element {

    const [categories, setCategories] = useState<Group[]>([])
    const [meetings, setMeetings] = useState<Meeting[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('')

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await categoriesService.getAllGroups()
                setCategories(categories)
            } catch (e) {
                alert(e)
            }
        }

        fetchCategories()
    }, [])

    useEffect(() => {
        const fetchPresents = async () => {
            try {
                if (selectedCategory === '') {
                    const allMeetings = await meetingsService.getAllMeetings()
                    setMeetings(allMeetings)
                }
                 else {
                    const groupMeetings = await meetingsService.getGroupMeetings(selectedCategory)
                    setMeetings(groupMeetings)
                }
            } catch (e) {
                alert(e)
            }
        }

        fetchPresents()
    }, [selectedCategory]) 

    async function categoryChanged(event: ChangeEvent<HTMLSelectElement>) {
        const selectedCategoryId = event.target.value
        setSelectedCategory(selectedCategoryId) 
    }

    // function removePresent(code: string) {
    //     setPresents(presents.filter(p => p.code !== code))
    // }

    return (
        <div className='List'>
            <select className='selectCategories' value={selectedCategory} onChange={categoryChanged}>
                <option key='dis' disabled value=''>please select group...</option>
                <option key='all' value=''>All groups</option>
                {categories.map(({ developmentGroupsId, name }) => (
                    <option key={name} value={developmentGroupsId}>{name}</option>
                ))}
            </select>
            <div className='cards'>
                {meetings.map(m => (
                    <Card key={m.id} meeting={m}/>
                ))}
            </div>
        </div>
    )
}
