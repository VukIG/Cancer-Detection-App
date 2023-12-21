import tensorflow as tf
import os
from pre_processing import train_dataset, validation_dataset, img_width, img_height, batch_size

validation_size=988
train_size=7993
test_size=1034

if os.path.exists('/home/vuk/Documents/ML/Cancer-Detection-AI/Cancer-detection-model'):
    print("Model loaded")
else:

    model = tf.keras.models.Sequential([
        tf.keras.layers.Conv2D(filters=32, kernel_size=(3, 3), activation='relu', input_shape=(img_width,img_height,3)),
        tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
        
        tf.keras.layers.Conv2D(filters=64, kernel_size=(3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
        
        tf.keras.layers.Conv2D(filters=128, kernel_size=(3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
        
        tf.keras.layers.Conv2D(filters=256, kernel_size=(3, 3), activation='relu'),
        tf.keras.layers.MaxPooling2D(pool_size=(2, 2)),
        
        tf.keras.layers.Flatten(),
        
        tf.keras.layers.Dense(units=512, activation='relu'),
        tf.keras.layers.Dense(units=1, activation='sigmoid') 
    ])


    METRICS = [
        tf.keras.metrics.BinaryAccuracy(),
        tf.keras.metrics.Precision(),
        tf.keras.metrics.Recall(),
        tf.keras.metrics.AUC(),
    ]

    model.compile(
        optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3),
        loss=tf.keras.losses.BinaryCrossentropy(),
        metrics=METRICS
    )

    model.fit(
        train_dataset,
        epochs=1,
        verbose=2,
        steps_per_epoch=train_size // batch_size,
        validation_data=validation_dataset,
        validation_steps=validation_size // batch_size,
    )

    model.save("Cancer-detection-model");
    loaded_model = tf.keras.models.load_model("Cancer-detection-model")