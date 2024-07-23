# ML Experiment Tracking UI with MLFlow Integration

This project demonstrates how to integrate MLFlow with a React-based ML experiment tracking UI. It allows you to track different ML models, datasets, experiments, and results, including metrics such as accuracy, latency, perplexity, and size.

## Setup Instructions

### Local Setup

1. Install dependencies:
   ```
   npm install
   pip install mlflow scikit-learn numpy
   ```

2. Start the MLFlow server:
   ```
   mlflow server --backend-store-uri sqlite:///mlflow.db --default-artifact-root ./mlflow-artifacts --host 0.0.0.0
   ```

3. Run the ML experiment:
   ```
   python src/mlflow_integration.py
   ```

4. Start the React development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to view the UI.

### Cloud Setup (AWS Example)

1. Set up an EC2 instance with Python and Node.js installed.

2. Install dependencies as in the local setup.

3. Configure AWS CLI and set up appropriate IAM roles for S3 access.

4. Start the MLFlow server with S3 backend:
   ```
   mlflow server --backend-store-uri sqlite:///mlflow.db --default-artifact-root s3://your-bucket-name/mlflow-artifacts --host 0.0.0.0
   ```

5. Update the `mlflow.set_tracking_uri()` in `src/mlflow_integration.py` to point to your EC2 instance's public IP or domain.

6. Run the ML experiment and start the React development server as in the local setup.

## Using the MLFlow Integration

1. Navigate to the "MLFlow Integration" page in the UI.
2. View the list of experiments and recent runs.
3. Click on the eye icon to view details of an experiment.
4. Click on the chart icon to view metrics for a specific run.

## Troubleshooting

- If you encounter CORS issues, ensure your MLFlow server is configured to allow cross-origin requests.
- Make sure the MLFlow server is running before starting the React application.
- Check that the MLFlow tracking URI in `src/mlflow_integration.py` matches your server configuration.

For more information, refer to the [MLFlow documentation](https://www.mlflow.org/docs/latest/index.html).