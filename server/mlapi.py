from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import pandas as pd

app = FastAPI()

class ModelPrediction(BaseModel):  # Corrected the class name
    benign: int

with open('./model/saved_model.pb', 'pb') as f:
    model = pickle.load(f)

@app.get('/')
async def scoring_endpoint(prediction: ModelPrediction):  # Corrected the function parameter name
    df = pd.DataFrame([prediction.model_dump().values()], columns=prediction.model_dump().keys())  # Corrected the variable name
    yhat = model.predict(df)
    return {"prediction": int(yhat)}
