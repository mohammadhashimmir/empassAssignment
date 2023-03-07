import Dashboard from "./dashboard";
import "./Stats.css"
const tableData=[ 
   {test:"Java",
    score:"80",
    rating:"Good",
    class:"positive",
},
{   test:"Computer Graphics",
    score:"92",
    rating:"Good",
    class:"positive",
},
{   test:"Probability and Statistics",
    score:"60",
    rating:"Average",
    class:"warning",
},
{   test:"Web Development",
    score:"94",
    rating:"Good",
    class:"positive",
},
{   test:"JavaScript",
    score:"80",
    rating:"Good",
    class:"positive",
},
{   test:"Python",
    score:"40",
    rating:"Below Average",
    class:"negative",
},
{   test:"Data Mining",
    score:"60",
    rating:"Average",
    class:"warning",
},
{   test:"Algorithms",
    score:"80",
    rating:"Good",
    class:"positive",
},
{   test:"OOP",
    score:"80",
    rating:"Good",
    class:"positive",
},
{   test:"Data Structure",
    score:"40",
    rating:"Below Average",
    class:"negative",
},
]
const renderedList=tableData.map((list)=>{
return (
      <tr key={list.test}>
      <td data-label="TestS Taken">{list.test}</td>
      <td data-label="Test Score/100">{list.score}</td>
      <td data-label="Score Rating" className={list.class}>{list.rating}</td>
    </tr> 
)
})
const Stats=()=>{
    return (
        <div>
            
            <Dashboard/>
            <table className="ui celled table">
            <thead>
            <tr><th>Tests Taken</th>
            <th>Test Score/100</th>
            <th>Score Rating</th>
            </tr></thead>

            <tbody>
            {renderedList}
            </tbody>
            </table>

        </div>
    )
};
export default Stats;