import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GithubChart.css";

const GithubChart = () => {
  const customLabels = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    totalCount: "contributions in the last year",
    legend: {
      less: "Less",
      more: "More",
    },
  };
  return (
    <div>
      <h1 className="github-title">My GitHub Contributions</h1>
      <div
        className="githubchart"
        style={{ textAlign: "center", margin: "2rem auto" }}
      >
        <GitHubCalendar
          username="rajatt09"
          blockSize={15}
          year="last"
          blockMargin={5}
          hideTotalCount={false}
          showWeekdayLabels={true}
          color="#58a6ff"
          labels={customLabels}
          fontSize={16}
          weekStart={1}
        />
      </div>
    </div>
  );
};

export default GithubChart;
