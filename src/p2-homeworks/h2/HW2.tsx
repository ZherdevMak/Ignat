import React, {useState} from 'react'
import Affairs from './Affairs'
import exp from "constants";

// types
export type DefaultAffairsType = Array<AffairType>// need to fix any
export type AffairType = {
    _id: number,
    name: string,
    priority: string
} // need to fix any
export type FilterType = 'all' | 'low' | 'middle' | 'high'
export type FunctionType = (affairs: DefaultAffairsType, filter: FilterType) => void


// constants
const defaultAffairs: DefaultAffairsType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any

    if (filter === 'all') {
        return affairs
    } else {
        if (filter === 'low') {
            affairs = affairs.filter((filteredAffairs) => filteredAffairs.priority === 'low')
            return affairs
        }
        if (filter === 'middle') {
            affairs = affairs.filter((filteredAffairs) => filteredAffairs.priority === 'middle')
            return affairs
        }
        if (filter === 'high') {
            affairs = affairs.filter((filteredAffairs) => filteredAffairs.priority === 'high')
            return affairs
        }
            }
    return affairs
}
export const deleteAffair = (affairs: DefaultAffairsType, _id: number): DefaultAffairsType => {// need to fix any
    return affairs.filter((item) => item._id !== _id )
     // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<DefaultAffairsType>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
