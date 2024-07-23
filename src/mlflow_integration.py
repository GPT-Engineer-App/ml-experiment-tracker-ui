import mlflow
import mlflow.sklearn
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.datasets import load_iris
import numpy as np

# Set the MLflow tracking URI (replace with your MLflow server URL if not local)
mlflow.set_tracking_uri("http://localhost:5000")

# Set the experiment name
mlflow.set_experiment("Iris Classification")

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

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
    
    # Make predictions
    y_pred = model.predict(X_test)
    
    # Calculate metrics
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred, average='weighted')
    recall = recall_score(y_test, y_pred, average='weighted')
    f1 = f1_score(y_test, y_pred, average='weighted')
    
    # Log the metrics
    mlflow.log_metric("accuracy", accuracy)
    mlflow.log_metric("precision", precision)
    mlflow.log_metric("recall", recall)
    mlflow.log_metric("f1_score", f1)
    
    # Log the model
    mlflow.sklearn.log_model(model, "random_forest_model")
    
    # Log the dataset as an artifact
    np.savetxt("iris_data.csv", X, delimiter=",")
    mlflow.log_artifact("iris_data.csv")

print(f"Model trained and logged to MLflow with accuracy: {accuracy}")

# To view the MLflow UI, run the following command in your terminal:
# mlflow ui
# Then open a web browser and go to http://localhost:5000