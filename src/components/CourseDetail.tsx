
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CourseDetail.css";
import CourseImage from "./CourseImage";
import LessonData from "./LessonData";


interface CourseDetailProps {
  category: string;
  description: string;
  id: number;
  name: string;
}

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [courseDetail, setCourseDetail] = useState<CourseDetailProps | null>([
    {
      "id": 1,
      "name": "Intro to Python",
      "description":
      "Learn the basics of Python, a popular programming language for both beginners and experts.",
      "category": "Programming Fundamentals"
    },
    {
      "id": 2,
      "name": "Advanced JavaScript",
      "description":
      "Take your JavaScript skills to the next level with this advanced course.",
      "category": "Web Development"
    },
    {
      "id": 3,
      "name": "Machine Learning with TensorFlow",
      "description":
      "Learn how to build machine learning models using the popular TensorFlow library.",
      "category": "Machine Learning"
    },
    {
      "id": 4,
      "name": "Data Science with R",
      "description":
      "Explore the world of data science using the R programming language.",
      "category": "Data Science"
    },
  ]
  );

  useEffect(() => {
    axios
      .get(
        `https://borntodev-final-project-api.borntodev.repl.co/courses/${id}`
      )
      .then((response) => {
        setCourseDetail(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="coursemainbox">
        <div className="coursetitle">
          <h3>{courseDetail?.name}</h3>
        </div>
        <div className="courseimage">
          <img src={CourseImage(Number(id))} alt={courseDetail?.name} />
        </div>
        <div className="courseCategory">
          <p>{courseDetail?.category}</p>
        </div>
        <div className="coursedescription">
          <p>{courseDetail?.description}</p>
        </div>
      </div>
      <div className="lessonbox">
        <div className="lessonintro">
          <p>เนื้อหาในคอร์ส</p>
        </div>
        <LessonData courseId={Number(id)} />
      </div>
    </div>
  );
};

export default CourseDetail;
