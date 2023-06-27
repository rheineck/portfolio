def calculate_proportion_ratio(width, height):
    ratio = width / height
    return ratio

def calculate_dimension(proportion_ratio, dimension):
    if dimension == "width":
        width = float(input("Enter the width of the image: "))
        height = width / proportion_ratio
        return height
    elif dimension == "height":
        height = float(input("Enter the height of the image: "))
        width = height * proportion_ratio
        return width
    else:
        return None

# Get user input
width = float(input("Enter the width of the image: "))
height = float(input("Enter the height of the image: "))

# Calculate proportion ratio
proportion_ratio = calculate_proportion_ratio(width, height)

# Get user input for the required dimension
required_dimension = input("Enter the required dimension (width or height): ")

# Calculate the other dimension based on the proportion ratio
calculated_dimension = calculate_dimension(proportion_ratio, required_dimension)

# Format the calculated dimension without decimals
formatted_dimension = "{:.0f}".format(calculated_dimension)

# Print the result
if calculated_dimension is not None:
    print("The calculated", required_dimension, "is:", formatted_dimension)
else:
    print("Invalid dimension entered.")
