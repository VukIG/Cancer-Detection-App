import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from sklearn.metrics import precision_score
from pre_processing import test_dataset, batch_size
from model import test_size

# Load the pre-trained model
loaded_model = tf.keras.models.load_model('/home/vuk/Documents/ML/Cancer-Detection-AI/Cancer-detection-model')

# Evaluate the model on the test dataset
evaluation_results = loaded_model.evaluate(test_dataset, steps=test_size // batch_size, verbose=0)

# Assuming BinaryAccuracy is the first metric in your METRICS list
accuracy = evaluation_results[1]

# Extract true labels and predicted labels
true_labels = test_dataset.labels
predicted_labels = loaded_model.predict(test_dataset).argmax(axis=1)

# Calculate precision
precision = precision_score(true_labels, predicted_labels, average='weighted')  # or 'binary' if appropriate

# Print the results
print(f"Accuracy: {accuracy}")
print(f"Precision: {precision}")

def get_image(dataset, index):
    batch_index = index // batch_size
    image_index = index % batch_size

    dataset_iter = iter(dataset)
    for i in range(batch_index + 1):
        batch = next(dataset_iter)

    image = batch[0][image_index]
    label = batch[1][image_index]

    return image, label


while True:
    index = int(input("Izaberi broj slike za testiranje (0 - 9999): "))
    if index < 0 or index > 9999:
        index = int(input("Izaberite novu vrednost izmedju 0 i 9999: "))

    img, label = get_image(test_dataset, index)

    img_input = np.reshape(img, (1, img.shape[0], img.shape[1], img.shape[2]))

    # Use the loaded model for predictions
    predictions = loaded_model.predict(img_input)
    predicted_label = np.argmax(predictions)
    if(predicted_label == 1):
        predicted_label = 'kancerogeni mladez'
    else:
        predicted_label = 'dobrocudni tumor'        
    plt.imshow(img, cmap=plt.cm.binary)
    plt.title(f"Model predvidja da ova slika sadrzi: {predicted_label}, ova slika sadrzi: {label}")
    plt.show()
