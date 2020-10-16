import React from "react";
import Chart from "../Chart/Chart";
import D3 from "../D3/D3";

function App() {
  return (
    <div>
      <main className="container center">
        <table>
          <tbody>
            <tr>
              <td className="text-box">
                <h1>Stay on track</h1>
                <p>
                  Do you know where you are spending your money? If you really
                  stop to track it down, you would get surprised! Proper budget
                  management depends on real data... and this app will help you
                  with that!
                </p>
              </td>
              <td className="text-box">
                <h1>Alerts</h1>
                <p>
                  What if your clothing budget ended? You will get an alert. The
                  goal is to never go over the budget.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h1>Results</h1>
                <p>
                  People who stick to a financial plan, budgeting every expense,
                  get out of debt faster! Also, they to live happier lives...
                  since they expend without guilt or fear... because they know
                  it is all good and accounted for.
                </p>
              </td>
              <td>
                <h1>Free</h1>
                <p>
                  This app is free!!! And you are the only one holding your
                  data!
                </p>
              </td>
            </tr>
            <tr>
              <td className="text-box">
                <h1>Stay on track</h1>
                <p>
                  Do you know where you are spending your money? If you really
                  stop to track it down, you would get surprised! Proper budget
                  management depends on real data... and this app will help you
                  with that!
                </p>
              </td>
              <td className="text-box">
                <h1>Alerts</h1>
                <p>
                  What if your clothing budget ended? You will get an alert. The
                  goal is to never go over the budget.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <article>
          <h1>Chart JS</h1>
          <div>
            <Chart />
          </div>
        </article>
        <article>
          <h1>D3 JS</h1>
          <div>
            <D3 />
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
