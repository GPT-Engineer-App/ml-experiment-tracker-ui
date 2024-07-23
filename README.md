# ML Experiment Tracker

This project is a web-based ML Experiment Tracker that integrates with MLflow for experiment tracking and visualization.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` to view the application

## MLflow Integration

This application integrates with MLflow for experiment tracking. To use MLflow:

1. Install MLflow:
   ```
   pip install mlflow
   ```
2. Start the MLflow server:
   ```
   mlflow ui
   ```
3. The MLflow UI will be available at `http://localhost:5000`

## Running Experiments

To run an example experiment:

1. Ensure MLflow server is running
2. Run the Python script:
   ```
   python src/mlflow_integration.py
   ```
3. View the results in the MLflow UI at `http://localhost:5000`

## Viewing Experiments in the Web UI

1. Start the development server (`npm run dev`)
2. Open your browser to `http://localhost:5173`
3. Navigate to the MLFlow Integration or Unified Dashboard pages to view experiment results

Note: The web application expects MLflow to be running on `localhost:5000`. If you've configured MLflow to run on a different port, update the fetch URLs in `src/pages/MLFlowIntegration.jsx` and `src/pages/UnifiedDashboard.jsx` accordingly.