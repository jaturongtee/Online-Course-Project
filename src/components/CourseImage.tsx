const CourseImage = (courseId: number): string => {
  switch (courseId) {
    case 1:
      return "/Image/IntrotoPython.webp";
    case 2:
      return "/Image/AdvancedJavaScript.webp";
    case 3:
      return "/Image/TensorFlow.png";
    case 4:
      return "/Image/DataScience.webp";
    default:
      return "/Image/default-image.jpg";
  }
};

export default CourseImage;
