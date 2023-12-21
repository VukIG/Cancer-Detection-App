import random
import shutil
import os
from dir_manipulation import test_data, train_data, validate_data, main_folder,csv_location, data;

seed = 1
random.seed(seed)
test_examples = train_examples = validation_examples = 0

train = main_folder + "train/"
test = main_folder + "test/"
validation = main_folder + "validation/"

if os.path.exists(train):
    print('Image manipulation not needed')
else: 
    for line in open(csv_location).readlines()[1:]:
        split_line = line.split(',');
        img_file = split_line[1];
        tumor_type = split_line[2];
        random_num = random.random()

        if random_num < 0.8:
            location = train_data
            train_examples += 1

        elif random_num < 0.9:
            location = validate_data
            validation_examples += 1

        else:
            location = test_data
            test_examples += 1

        if(tumor_type == 'mel'):
            shutil.copy(
                main_folder + img_file + ".jpg",
                location + "malignant/" + img_file + ".jpg",
            )
        else:
            shutil.copy(
                main_folder + img_file + ".jpg",
                location + "benign/"+ img_file + ".jpg",
            )

    print(f"Number of training examples {train_examples}")
    print(f"Number of test examples {test_examples}")
    print(f"Number of validation examples {validation_examples}")