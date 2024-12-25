// Course Completion Chart
const completionCtx = document.getElementById('completionChart').getContext('2d');
const completionChart = new Chart(completionCtx, {
  type: 'bar', // Choose chart type (bar, line, etc.)
  data: {
    labels: ['Web Development', 'Data Science', 'AI', 'Machine Learning', 'Cloud Computing'], // Add the course names
    datasets: [{
      label: 'Course Completion (%)',
      data: [80, 65, 50, 70, 60], // Completion percentages for each course
      backgroundColor: [
        'rgba(75, 192, 192, 0.7)', // Web Development
        'rgba(153, 102, 255, 0.7)', // Data Science
        'rgba(255, 159, 64, 0.7)', // AI
        'rgba(54, 162, 235, 0.7)', // Machine Learning
        'rgba(255, 99, 132, 0.7)'  // Cloud Computing
      ], // Different colors for each bar
      borderColor: [
        'rgba(75, 192, 192, 1)', // Web Development
        'rgba(153, 102, 255, 1)', // Data Science
        'rgba(255, 159, 64, 1)', // AI
        'rgba(54, 162, 235, 1)', // Machine Learning
        'rgba(255, 99, 132, 1)'  // Cloud Computing
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100 // Max value for the completion percentage
      }
    }
  }
});

// Course Accuracy Chart
const accuracyCtx = document.getElementById('accuracyChart').getContext('2d');
const accuracyChart = new Chart(accuracyCtx, {
  type: 'bar', // Choose chart type (bar, line, etc.)
  data: {
    labels: ['Web Development', 'Data Science', 'AI', 'Machine Learning', 'Cloud Computing'], // Add the course names
    datasets: [{
      label: 'Course Accuracy (%)',
      data: [90, 85, 78, 88, 82], // Accuracy percentages for each course
      backgroundColor: [
        'rgba(75, 192, 192, 0.7)', // Web Development
        'rgba(153, 102, 255, 0.7)', // Data Science
        'rgba(255, 159, 64, 0.7)', // AI
        'rgba(54, 162, 235, 0.7)', // Machine Learning
        'rgba(255, 99, 132, 0.7)'  // Cloud Computing
      ], // Different colors for each bar
      borderColor: [
        'rgba(75, 192, 192, 1)', // Web Development
        'rgba(153, 102, 255, 1)', // Data Science
        'rgba(255, 159, 64, 1)', // AI
        'rgba(54, 162, 235, 1)', // Machine Learning
        'rgba(255, 99, 132, 1)'  // Cloud Computing
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100 // Max value for the accuracy percentage
      }
    }
  }
});

