import React from 'react';
import styles from './widget.module.css';
import cloudIcon from './cloud.svg';

const weatherIconsMap = {
  'Cloudy Skies': cloudIcon,
};

const createGroupedArray = (arr, chunkSize) => {
  var groups = [],
    i;
  for (i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }
  return groups;
};

const StatsTab = ({ stats }) => (
  <div className={styles.statsTab}>
    {stats.map(statsItem => (
      <div key={statsItem.index} className={styles[statsItem.type]}>
        {statsItem.value}
      </div>
    ))}
  </div>
);

class Widget extends React.Component {
  state = {
    activeTab: 1,
  };

  static getDerivedStateFromProps = nextProps => {
    return {
      groupedStats: createGroupedArray(nextProps.stats, 3),
    };
  };

  onTabTogglerClick = i => {
    this.setState({ activeTab: i });
  };

  render() {
    const { date, temperature, weatherDescription, city } = this.props;
    const { groupedStats, activeTab } = this.state;
    const buttonsArray = new Array(groupedStats.length).fill(0);
    return (
      <div className={styles.root}>
        <div className={styles.body}>
          <button className={styles.refreshButton} title="refresh" />
          <img
            className={styles.weatherIcon}
            src={weatherIconsMap[weatherDescription]}
            alt={weatherDescription}
          />
          <div className={styles.weatherDecal}>
            <b className={styles.temperature}>{temperature}</b>
            <div className={styles.city}>
              <span className={styles.weatherVerbose}>
                {weatherDescription}
              </span>
              <span className={styles.cityName}>{city} </span>
            </div>
            <div className={styles.date}>
              <span className={styles.month}>{date.month}</span>
              <span className={styles.day}>{date.day}</span>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <StatsTab stats={groupedStats[activeTab]} />

          <div className={styles.tabTogglers}>
            {buttonsArray.map((item, i) => (
              <button
                onClick={() => this.onTabTogglerClick(i)}
                className={
                  i === activeTab ? styles.tabTogglerActive : styles.tabToggler
                }
              />
            ))}
          </div>
        </footer>
      </div>
    );
  }
}

// Widget.defaultProps = {
//   date: {
//     day: 21,
//     month: 'may',
//   },
//   temperature: 79,
//   weatherDescription: 'Cloudy Skies',
//   city: 'Sicklerville, New Jersey ',
//   stats: [
//     {
//       type: 'wind',
//       value: '2 MPH',
//       index: 1,
//     },
//     {
//       type: 'humidity',
//       value: '33 %',
//       index: 2,
//     },
//     {
//       type: 'sun',
//       value: '83 %',
//       index: 3,
//     },
//     {
//       type: 'wind',
//       value: '2 MPH',
//       index: 4,
//     },
//     {
//       type: 'humidity',
//       value: '33 %',
//       index: 5,
//     },
//     {
//       type: 'sun',
//       value: '83 %',
//       index: 6,
//     },
//     {
//       type: 'wind',
//       value: '2 MPH',
//       index: 7,
//     },
//     {
//       type: 'humidity',
//       value: '33 %',
//       index: 8,
//     },
//     {
//       type: 'sun',
//       value: '83 %',
//       index: 9,
//     },
//   ],
// };

export default Widget;
