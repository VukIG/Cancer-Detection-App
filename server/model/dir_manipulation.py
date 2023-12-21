import pandas as pd
import os
import shutil

directory = '/home/vuk/Documents/ML Data/CDA/'
csv_location = os.path.join(directory, 'HAM10000_metadata.csv')

source_directory_1 = os.path.join(directory, 'HAM10000_images_part_1')
source_directory_2 = os.path.join(directory, 'HAM10000_images_part_2')

# Create HAM10000 directory
ham_directory = os.path.join(directory, 'HAM10000')
if not os.path.exists(ham_directory):
    os.makedirs(ham_directory)
else:
    print(f"Directory '{ham_directory}' already exists.")

destination_directory = os.path.join(directory, 'HAM10000/')

def move_images(src, dest):
    for file in os.listdir(src):
        file_path = os.path.join(src, file)
        dest_path = os.path.join(dest, file)
        shutil.move(file_path, dest_path)

# Move images from the first and second source directory to the destination directory
if os.path.exists(source_directory_1) and os.listdir(source_directory_1):
    move_images(source_directory_1, destination_directory)
    shutil.rmtree(source_directory_1)
else:
    print(f"Directory '{source_directory_1}' does not exist or is empty.")

if os.path.exists(source_directory_2) and os.listdir(source_directory_2):
    move_images(source_directory_2, destination_directory)
    shutil.rmtree(source_directory_2)
else:
    print(f"Directory '{source_directory_2}' does not exist or is empty.")

# Create test_data directories
test_data = os.path.join(directory, 'test/')
for subfolder in ['benign', 'malignant']:
    subfolder_path = os.path.join(test_data, subfolder)
    if not os.path.exists(subfolder_path):
        os.makedirs(subfolder_path)
    else:
        print(f"Directory '{subfolder_path}' already exists.")

# Create train_data directories
train_data = os.path.join(directory, 'train/')
for subfolder in ['benign', 'malignant']:
    subfolder_path = os.path.join(train_data, subfolder)
    if not os.path.exists(subfolder_path):
        os.makedirs(subfolder_path)
    else:
        print(f"Directory '{subfolder_path}' already exists.")

# Create validate_data directories
validate_data = os.path.join(directory, 'validate/')
for subfolder in ['benign', 'malignant']:
    subfolder_path = os.path.join(validate_data, subfolder)
    if not os.path.exists(subfolder_path):
        os.makedirs(subfolder_path)
    else:
        print(f"Directory '{subfolder_path}' already exists.")

main_folder = destination_directory

data = pd.read_csv(csv_location)
