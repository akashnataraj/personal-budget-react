import { Pie } from "react-chartjs-2";
import React from "react";
import axios from "axios";

export default class ChartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      budget: [],
      title: [],
    };
  }

  componentDidMount() {
    let data = [];
    let label = [];
    axios.get(`http://localhost:3001/budget`).then(
      (res) => {
        for (var i = 0; i < res.data.myBudget.length; i++) {
          data.push(res.data.myBudget[i].budget);
          label.push(res.data.myBudget[i].title);
        }
        this.setState({
          isLoaded: true,
          budget: data,
          title: label,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { error, isLoaded, budget, title } = this.state;
    if (error) {
      return <span>Error: {error.message}</span>;
    } else if (!isLoaded) {
      return <span>Loading...</span>;
    } else {
      return (
        <Pie
          data={{
            labels: title,
            datasets: [{
                data: budget,
                backgroundColor: [
                    "#ffcd56",
                    "#ff6384",
                    "#36a2eb",
                    "#fd6b19",
                    "#0cda85",
                    "#7748d2",
                    "#ff0000",
                  ]
            }]
          }}
        />
      );
    }
  }
}

//export default ChartComponent;
