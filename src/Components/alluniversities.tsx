import "../Styles/AllUniversities.css"
import Data from "../data/TurkishUniversities.json";

export function AllUniversities(){
        // interface Program {
        //   id: number;
        //   University: string;
        //   Program: string;
        //   Degree: string;
        //   About: string;
        //   Phone: number;
    
        // }
        // const data = rawData as Program[];
        const rawData= Data.filter(items =>
        items &&
        items.id &&
        !isNaN(items.id) &&
        String(items.id).trim() !== "");

        const uniqueUniversities = [
            ...new Map(rawData.map(u => [u.University, u])).values()
        ];

    return(
        <div className="alluni">
            <h1>All Universities</h1>
            <span>You can reach the information for other universities by clicking it.</span>
            <ul>
                {uniqueUniversities.map((result:any, index:number) => (
                    <li key={index}><a href="">{result.University}</a></li>   
                ))}

            </ul>
        </div>
    )
}