import React from 'react'
const detail: string[] = [
    "ชินดนัย",
    "20",
    "CSMJU",

]

export default function About() {
    return (
        <div>
            <div>
                <h1>รายละเอียด</h1>
                <div>
                    {detail.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}
