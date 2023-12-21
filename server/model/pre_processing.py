import tensorflow as tf
import numpy as np
import pandas as pd
from dir_manipulation import test_data, train_data, validate_data
import scipy

#constants
img_width = img_height = 224
batch_size = 32
csv_file = '/home/vuk/Documents/ML Data/CDA/hmnist_28_28_L.csv'

images_dataset = pd.read_csv(csv_file)


#Generate additional images due to the imbalance of the HAM10000 dataset
train_gen = tf.keras.preprocessing.image.ImageDataGenerator(
    rescale = 1/255,
    rotation_range = 15,
    width_shift_range = 0.1,
    height_shift_range = 0.1,
    zoom_range = 0.2,
    horizontal_flip = True,
    vertical_flip = True,
)
test_gen = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1.0 / 255)
validation_gen = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1.0 / 255)

#Grab images from their respective folders 
train_dataset = train_gen.flow_from_directory(
    train_data,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    color_mode="rgb",
    class_mode="binary",
    shuffle=True,
    seed=123,
)

test_dataset = test_gen.flow_from_directory(
    test_data,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    color_mode="rgb",
    class_mode="binary",
    shuffle=True,
    seed=123,
)

validation_dataset = validation_gen.flow_from_directory(
    validate_data,
    target_size=(img_height, img_width),
    batch_size=batch_size,
    color_mode="rgb",
    class_mode="binary",
    shuffle=True,
    seed=123,
)
