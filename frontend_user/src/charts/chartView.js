import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';


const stules = {
    flex: '0 0 auto',
    width: '80%',
    height: '10%'
}
const s1 = {
    margin: '20px',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 'calc(var(--bs-gutter-y) * -1)',
    marginRight: 'calc(var(--bs-gutter-x) * -.5)',
    marginLeft: 'calc(var(--bs-gutter-x) * -.5)',
}
export default () => {
    const dataPie = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const dataBar = {
        labels: ['155', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: 'Compelete',
                data: [3, 10, 13, 15, 22, 30],
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Incompelete',
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: 'rgb(54, 162, 235)',
            },
         
            {
                label: 'Regets',
                data: [20, 19, 3, 5, 2, 3],
                backgroundColor: 'rgb(255, 99, 132)',
            },
           
        ],
    };
    

    return (
        <>
        <div className="shawdowDiv"> 
                           
                        
            <div className="row"  style={s1}>
              
                <div className="col-12 col-sm-6 col-xl-4 mb-4" style={stules}>
                    <div className='header'>
                        <h3 className='title'>Statistique Transaction CFG</h3>
                    </div>
                    <br />
                    <div className='header'>
                        <Bar data={dataBar} maxWidth="100%" height="200px" minHeight='200px' maxHeight='200px'/>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}