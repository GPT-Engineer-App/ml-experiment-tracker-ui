import mlflow
import mlflow.sklearn
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import numpy as np

# Set the MLflow tracking URI (replace with your MLflow server URL if not local)
mlflow.set_tracking_uri("http://localhost:5000")

# Set the experiment name
mlflow.set_experiment("ML Experiment Tracker Demo")

# Sample data (replace with your actual dataset)
X = np.random.rand(100, 5)
y = np.random.randint(0, 2, 100)

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Define model parameters
n_estimators = 100
max_depth = 5

# Start an MLflow run
with mlflow.start_run():
    # Log the model parameters
    mlflow.log_param("n_estimators", n_estimators)
    mlflow.log_param("max_depth", max_depth)
    
    # Train the model
    model = RandomForestClassifier(n_estimators=n_estimators, max_depth=max_depth)
    model.fit(X_train, y_train)
    
    # Make predictions and calculate accuracy
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    # Log the accuracy metric
    mlflow.log_metric("accuracy", accuracy)
    
    # Log the model
    mlflow.sklearn.log_model(model, "random_forest_model")
    
    # Log the dataset as an artifact
    np.savetxt("data.csv", X, delimiter=",")
    mlflow.log_artifact("data.csv")

print(f"Model trained and logged to MLflow with accuracy: {accuracy}")

# To view the MLflow UI, run the following command in your terminal:
# mlflow ui
# Then open a web browser and go to http://localhost:5000