import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';
import styles from './stats.css';
import { setStats } from '../../actions/horseActions';
import { getStats } from '../../selectors/horseSelectors';
import Chart from 'chart.js';

const Stats = () => {
  const dispatch = useDispatch();
  const stats = useSelector(getStats);
  const [, updateState] = useState(false);
  var ctx = document.getElementById('myChart');
  
  useEffect(() => {
    if(!stats) dispatch(setStats());
    if(!ctx) updateState(true);
  });

  if(stats && ctx) {
    const labels = stats.gamePlayTimes.map(i => i[0]);
    const data = stats.gamePlayTimes.map(i => i[1]);
    // eslint-disable-next-line no-unused-vars
    let myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Time Spent Playing Horse Game',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'white'
            },
            scaleLabel: {
              display: true,
              labelString: 'Games',
              fontColor: 'white'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: 'white'
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });
  }


  return (
    <div className={styles.Stats}>
      <Header/>
      
      <section className={styles.Data}>
        {stats && 
      <section>
        <section>
          <h2>Games Played</h2>
          <p>{stats.numberOfGames}</p>
          <h2>Longest Game Played</h2>
          <p>{stats.longestGame[0]} Hour {stats.longestGame[1]} Minutes</p>
        </section>
      </section>
        }

        <div className={styles['Chart-Container']}>
          <h2>Time Spent Playing a Single Game</h2>
          <section>
            <canvas id="myChart" height="200"></canvas>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Stats;

