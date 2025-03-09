import { useEffect, useState } from 'react'
import './New.css'
import Type from '../../../models/group/Group'
import categoriesService from '../../../services/auth-aware/Groups'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/meeting/Draft'
import { useNavigate } from 'react-router-dom'
import meetingsService from '../../../services/auth-aware/Meetings'

export default function NewMeeting(): JSX.Element {

    const [ categories, setCategories ] = useState<Type[]>([])

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


    const { register, handleSubmit, formState } = useForm<Draft>()

    const navigate = useNavigate()

    async function submit(draft: Draft) {
        try {
            await meetingsService.new(draft)
            alert('added meeting')
            navigate('/meetings')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className='New'>
            <form onSubmit={handleSubmit(submit)}>
                <select defaultValue={''} {...register('name', {
                        required: {
                            value: true,
                            message: 'group is a must'
                        }
                    })}>
                        <option value="" disabled>Select group</option>
                        {categories.map(({ developmentGroupsId, name }) => (
                    <option key={name} value={developmentGroupsId}>{name}</option>
                ))}
                    </select>
                    <span className='error'>{formState.errors.name?.message}</span>

                    <label className='Label' htmlFor="start">Start of the meeting:</label>
                    <input id='start' type='datetime-local' placeholder='Enter the start of the meeting' {...register('startDate', {
                    required: {
                        value: true,
                        message: 'start of the meeting is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.startDate?.message}</span>

                <label className='Label' htmlFor="end">End of the meeting:</label>
                <input id='end' type='datetime-local' placeholder='Enter the end of the meeting' {...register('endDate', {
                    required: {
                        value: true,
                        message: 'end of the meeting is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.endDate?.message}</span>

                <input placeholder='Enter a description' {...register('description', {
                    required: {
                        value: true,
                        message: 'description is a must'
                    },
                    minLength: {
                        value: 10,
                        message: 'At least 10 chars is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.description?.message}</span>

                <input placeholder='Enter the room of the meeting' {...register('room', {
                    required: {
                        value: true,
                        message: 'room is a must'
                    },
                    minLength: {
                        value: 4,
                        message: 'At least 10 chars is a must'
                    }
                })}/>
                <span className='error'>{formState.errors.room?.message}</span>            

                <button>Add meeting</button>
            </form>
        </div>
    )
}