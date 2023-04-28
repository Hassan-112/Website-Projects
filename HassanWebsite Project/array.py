from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

# Example data
X = [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]]
y = [0, 0, 1, 1, 1]  # 0: younger person, 1: older person

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a decision tree classifier
clf = DecisionTreeClassifier()

# Train the model on the training data
clf.fit(X_train, y_train)

# Evaluate the model on the testing data
score = clf.score(X_test, y_test)

# Print the model's accuracy
print("Model accuracy:", score)
